import { rowLength, idLength, nameLength } from "./constants";

/**
 *
 * @param {string} sex - "male" or "female" only
 * @param {string} id - exactly 10 ASCII chars
 * @param {string} name - 0-26 chars
 * @returns {string}
 */
export default function parse({ sex, id, name }) {
  if (!["male", "female"].includes(sex) || id.length !== idLength || name.length > nameLength) {
    let err = "Error with input values.\n";
    err += `Expected \`sex\` to be 'male' or 'female' string only.\n`;
    err += `Expected \`id\` length to be exactly ${idLength}.\n`;
    err += `Expected \`name\` length not to be greater than ${nameLength}.`;
    throw err;
  }

  let str =
    +(sex === "male") +
    (id + name.padEnd(nameLength, " "))
      .split("")
      .map(e =>
        e
          .charCodeAt()
          .toString(2)
          .padStart(8, "0")
      )
      .join("");

  for (let i = 0; i < rowLength; i++) {
    let j = i;
    let sum = 0;

    while (str[j]) {
      sum += +str[j];
      j += rowLength;
    }
    str += sum % 2;
  }

  return str;
}
