import parse from "./src/parse";
import draw from "./src/draw";

const test = { sex: "male", id: "c5j818dyo5", name: "Oleg Vladimirovich" };
// const test = { sex: "female", id: "0owrgqqwfw", name: "Dazdraperma Petrovna" };
// const test = { sex: "male", id: "0123456789", name: "Vasya Pupkin The Sith Lord" };

draw(parse(test));
