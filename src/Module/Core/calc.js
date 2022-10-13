/**
 * @object 연산기능을 가진 함수들을 모아놓은 객체입니다
 *
 */

const calculator = {
  /**
   *
   * @plus  인자 A와 인자 B를 더해주는 메서드
   * @minus 인자 A에서 B를 빼는 메서드
   * @multiply 인자 A에서 B를 곱하는 메서드
   * @divide 인자 A에서 B를 나누는 메서드
   * @Remainder 인자 A와 B를 나눠서 남은 나머지를 구하는 메서드
   */

  plus: (a, b) => {
    return a + b;
  },
  minus: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
  Remainder: (a, b) => {
    return a % b;
  },
};

export default calculator;
