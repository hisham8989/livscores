import ScoreDao from "../Dao/scoreDao.js";
import MatchDao from "../Dao/matchDao.js";
import SportDao from "../Dao/sportDao.js";

const scoreDao = new ScoreDao();
const matchDao = new MatchDao();
const sportDao = new SportDao();

class ScoreManager {
  constructor(data = null) {
    this.body = data?.body;
  }

  fetchScores() {
    return new Promise(async (resolve, reject) => {
      try {
        const scores = await sportDao.fetchSports();
        const formattedResponse = this.#formatResponse(scores);
        resolve(formattedResponse);
      } catch (err) {
        reject(err);
      }
    });
  }

  createScore() {
    return new Promise(async (resolve, reject) => {
      try {
        const scoreBody = {
          batting: this.body.batting,
          bowling: this.body.bowling,
          runs: this.body.runs,
          oversLeft: this.body.oversLeft,
          wicketsLeft: this.body.wicketsLeft,
        };

        const matchBody = {
          matchFormat: this.body.matchFormat,
          innings: this.body.innings,
          teams: this.body.teams,
        };

        const sportBody = {
          name: this.body.sportName,
          matches: [],
        };

        const score = await scoreDao.create(scoreBody);

        matchBody.score = score._id;

        const match = await matchDao.create(matchBody);

        sportBody.matches.push(match._id);

        const sport = await sportDao.create(sportBody);
        resolve(sport);
      } catch (err) {
        reject(err);
      }
    });
  }

  #formatResponse(scores) {
    // IF Format Needs
    return scores;
  }
}

export default ScoreManager;
