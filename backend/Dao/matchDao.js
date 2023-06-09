import Match from "../models/Match.js";

class MatchDao {
  constructor() {}

  create(matchBody) {
    return new Promise(async (resolve, reject) => {
      try {
        const match = await Match.create(matchBody);
        resolve(match);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }
}

export default MatchDao;
