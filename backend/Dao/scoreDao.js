import Score from "../models/Score.js";

class ScoreDao {
  constructor() {}

  create(scoreBody) {
    return new Promise(async (resolve, reject) => {
      try {
        const score = await Score.create(scoreBody);
        resolve(score);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }
}

export default ScoreDao;
