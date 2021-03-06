import { MathMedianPipe } from './math-median.pipe';

describe('MathMedianPipe', () => {
  it('create an instance', () => {
    const pipe = new MathMedianPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return median value 0 for null passed', () => {
    const pipe = new MathMedianPipe();
    expect(pipe.transform('test' as any)).toEqual(0);
  });

  it('should return median value for empty array passed', () => {
    const pipe = new MathMedianPipe();
    expect(pipe.transform([])).toEqual(0);
  });

  it('should return median value for array passed with odd count', () => {
    const pipe = new MathMedianPipe();
    expect(pipe.transform([1, 2, 4, 5, 7])).toEqual(4);
  });

  it('should return median value for array passed with even count', () => {
    const pipe = new MathMedianPipe();
    expect(pipe.transform([1, 2, 4, 5, 7, 8])).toEqual(9 / 2);
  });
});
