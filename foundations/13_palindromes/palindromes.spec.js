const palindromes = require('./palindromes')

describe('palindromes', () => {
<<<<<<< HEAD
  test('works with single words', () => {
    expect(palindromes('racecar')).toBe(true);
  });
  test.skip('works with punctuation ', () => {
    expect(palindromes('racecar!')).toBe(true);
  });
  test.skip('works with upper-case letters ', () => {
    expect(palindromes('Racecar!')).toBe(true);
  });
  test.skip('works with multiple words', () => {
    expect(palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test.skip('works with multiple words', () => {
    expect(palindromes('Animal loots foliated detail of stool lamina.')).toBe(true);
  });
  test.skip('doesn\'t just always return true', () => {
    expect(palindromes('ZZZZ car, a man, a maracaz.')).toBe(false);
  });
  test.skip('works with numbers in a string', () => {
    expect(palindromes('rac3e3car')).toBe(true);
  });
  test.skip('works with unevenly spaced numbers in a string', () => {
=======
  test('detects palindrome', () => {
    expect(palindromes('racecar')).toBe(true);
  });
  test.skip('detects palindrome with numbers', () => {
    expect(palindromes('rac3e3car')).toBe(true);
  });
  test.skip('detects palindrome with multiple words', () => {
    expect(palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test.skip('ignores punctuation', () => {
    expect(palindromes('racecar!')).toBe(true);
  });
  test.skip('is case insensitive', () => {
    expect(palindromes('Racecar!')).toBe(true);
  });
  test.skip('detects non-palindromes', () => {
    expect(palindromes('ZZZZ car, a man, a maracaz.')).toBe(false);
  });
  test.skip('detects non-palindromes with numbers', () => {
>>>>>>> upstream/main
    expect(palindromes('r3ace3car')).toBe(false);
  });
});
