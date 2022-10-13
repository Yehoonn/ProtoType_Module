import calculator from "./Core/calc.js";

/**
 * @function 사각형의 넓이를 구하는 함수입니다 (인자는 2개)
 * @param {*} width : 구하고자 하는 사각형의 길이 ;
 * @param {*} height : 구하고자 하는 사각형의 높이 ;
 * @returns 사각형의 넓이를 return 합니다
 */

const squareArea = (width, height) => {
  return calculator.multiply(width, height);
};

export default squareArea;
