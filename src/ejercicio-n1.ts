/**
 * funcion de suma
 * @param firstNumber numerooneee
 * @param secondNumber 
 * @param remainingNumbers lala
 * @returns 
 */

export function add(firstNumber: number, secondNumber: number, ...remainingNumbers: number[]) {
    let result = firstNumber + secondNumber;
    if (remainingNumbers.length) {
      result += remainingNumbers.reduce((prev, current) => prev + current);
    }
    return result; 
  }