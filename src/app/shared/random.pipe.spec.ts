import { RandomPipe } from './random.pipe';

describe('RandomPipe', () => {
  it('should create an instance', () => {
    const pipe = new RandomPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform any number to another random number', () => {
    const testValue = 300;
    const pipe = new RandomPipe();

    expect(pipe.transform(testValue)).toBeLessThanOrEqual(testValue);
    expect(pipe.transform(testValue)).toBeGreaterThanOrEqual(0);
  });
});
