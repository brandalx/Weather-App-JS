import { declareEvents } from "./weatherForm.js";
import { doApi } from "./weatherInfo.js";

const init = () => {
  doApi("tel aviv");
  declareEvents();
};

init();
