function rev(str) {
    let strArray = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strArray += str[i];
    }
    return strArray;
  }
  module.exports = rev;