import { doApi } from "./weatherInfo.js";

export const declareEvents = () => {
  let id_input = document.querySelector("#id_input");
  let search_btn = document.querySelector("#search_btn");
  search_btn.addEventListener("click", () => {
    doApi(id_input.value);
  });
};
