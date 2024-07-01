import { APP_SETTING } from "../../Config";
import axios from "axios";

export function unitedKingdomUniversities() {
  return axios.get(`${APP_SETTING.API_PATH.UNITED_KINGDOM.unitedKingdom}`);
}
