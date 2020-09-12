import pairs from "./pairs";
const transformIntoOdia = (input, keymap = pairs) => {
  console.log(input);
  console.log(keymap);
  let output = input;
  for (const [key, value] of Object.entries(keymap)) {
    console.log(key, value);
    output = output.replace(value, key);
  }
  return output;
};

/**
 * Transformation
 *  Todos:
 *  special escape : Odia key words can not be keywords
 *  escape
 *  find and replace
 * unescape
 */

export default transformIntoOdia;
