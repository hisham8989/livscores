import Sport from "../models/Sport.js";

class SportDao {
  constructor() {}

  create(sportBody) {
    return new Promise(async (resolve, reject) => {
      try {
        const sport = await Sport.create(sportBody);
        resolve(sport);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  fetchSports() {
    return new Promise(async (resolve, reject) => {
      try {
        const sports = await Sport.find()
          .populate({
            path: "matches",
            populate: {
              path: "score",
            },
          })
          .sort({
            createdAt: -1,
          });
        resolve(sports);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }
}

export default SportDao;
