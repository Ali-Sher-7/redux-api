import { APP_SETTING } from "../../Config";
import axios from "axios";
export function unitedStatesUniversities() {
  return axios.get(
    "http://universities.hipolabs.com/search?country=United+States"
  );
}
