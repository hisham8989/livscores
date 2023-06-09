import { getApi } from "../utils/apiCalls";
import { API_CONSTANTS } from "../utils/contants";

const getScoreInfo = async () => {
  const data = await getApi(API_CONSTANTS.getScores);
  return data;
};

export default { getScoreInfo };
