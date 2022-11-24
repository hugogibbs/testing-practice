function caesar(str) {
    let caesarStr = "";
    let caesarNum = 0;
    for (let i = 0; i < str.length; i++ ) {
      if (str[i] == "." || str[i] == ",") {
        caesarStr += str[i];
      }
      else {
        if (str[i] == "z") {
          caesarStr += "a";
        }
        else {
        caesarNum = str.charCodeAt(i) + 1;
        caesarStr += String.fromCharCode(caesarNum);  
        }
      }
    } 
    return caesarStr;
  }  
export {caesar}