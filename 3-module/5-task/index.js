function getMinMax(str) {
  // ваш код...
  args = [...str]
  .map(i => {if(isFinite(i) == true || i == "." || i == "-"){
    return i
  } else {
    return " "}
  })
  .join("")
  .split(" ")
  .filter(i => i != "")
  .map(i => Number(i));
  let min = Math.min(...args);
  let max = Math.max(...args);
  let finalObj = {
    min: min ,
    max: max
  };
  return finalObj;
}
