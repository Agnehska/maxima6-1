import { makeList } from "./util";

const newList = makeList(1, 100);

let root = document.querySelector(".root");
let elem = document.createElement("p");
elem.innerHTML = newList.map((item) => String(item));
root.append(elem);
