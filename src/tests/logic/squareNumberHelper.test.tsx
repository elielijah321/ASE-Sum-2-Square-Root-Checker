describe('smoke tests to ensure jest is working', () => {
    it('should return the sum of two numbers', () => {
      expect(2 + 1).toBe(3);
      expect(4 + 5).toBe(9);
      expect(8 + 2).toBe(10);
    });
});