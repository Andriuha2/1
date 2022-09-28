import getFullAvatar from "./getFullAvatar";
import "./styles.scss";

console.log("working");
getFullAvatar();

const first = { a: 1, b: 2 };
const second = { ...first, c: 3 };

console.log(second);
