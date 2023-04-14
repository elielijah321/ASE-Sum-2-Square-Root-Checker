import { calculateSquareRoot, isSquareNumber } from "../../functions/squareNumberHelper";

describe('smoke tests to ensure jest is working', () => {
    it('should return the sum of two numbers', () => {
      expect(2 + 1).toBe(3);
      expect(4 + 5).toBe(9);
      expect(8 + 2).toBe(10);
    });
});

describe('isSquareNumber', () => {
  it('returns true for square numbers', () => {
    expect(isSquareNumber(0)).toBe(true);
    expect(isSquareNumber(1)).toBe(true);
    expect(isSquareNumber(4)).toBe(true);
    expect(isSquareNumber(9)).toBe(true);
    expect(isSquareNumber(16)).toBe(true);
  });

  it('returns false for non square numbers', () => {
    expect(isSquareNumber(2)).toBe(false);
    expect(isSquareNumber(3)).toBe(false);
    expect(isSquareNumber(5)).toBe(false);
    expect(isSquareNumber(10)).toBe(false);
    expect(isSquareNumber(15)).toBe(false);
  });

  it('returns false for negative numbers', () => {
    expect(isSquareNumber(-1)).toBe(false);
    expect(isSquareNumber(-4)).toBe(false);
    expect(isSquareNumber(-9)).toBe(false);
    expect(isSquareNumber(-16)).toBe(false);
  });
  
  it('returns false for non integer numbers', () => {
    expect(isSquareNumber(0.5)).toBe(false);
    expect(isSquareNumber(2.5)).toBe(false);
    expect(isSquareNumber(3.14)).toBe(false);
    expect(isSquareNumber(10.2)).toBe(false);
    expect(isSquareNumber(15.8)).toBe(false);
  });
});

describe('calculateSquareRoot', () => {
it('returns square root of positive number', () => {
  expect(calculateSquareRoot(0)).toBe(0);
  expect(calculateSquareRoot(16)).toBe(4);
  expect(calculateSquareRoot(25)).toBe(5);
  expect(calculateSquareRoot(81)).toBe(9);
  expect(calculateSquareRoot(100)).toBe(10);
});


it('returns square root of negative number', () => {
  expect(calculateSquareRoot(-16)).toBeNaN();
  expect(calculateSquareRoot(-25)).toBeNaN();
  expect(calculateSquareRoot(-81)).toBeNaN();
  expect(calculateSquareRoot(-100)).toBeNaN();
  expect(calculateSquareRoot(-144)).toBeNaN();
});
});


export {}