
/**
 * 
 * @param {string} txt - the text to be sliced
 * @param {number} [max=50] - the maximum length of the text
 * @returns the sliced text, with an ellipsis (...) if it exceeds the maximum length
 */

export function txtSLicer(txt: string, max: number = 50) {
  if (txt.length > max) {
    return txt.slice(0, max) + "...";
  }
  return txt;
}

