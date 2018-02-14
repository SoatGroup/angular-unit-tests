import { TestBed, async, inject } from '@angular/core/testing';

import { UpperCasePipe } from './uppercase.pipe';

describe('UpperCasePipe', () => {
  let pipe;

  beforeEach(async(() => {
      TestBed.configureTestingModule({
          providers: [ UpperCasePipe ]
      });
  }));

  beforeEach(inject([UpperCasePipe], (_u: UpperCasePipe) => {
    pipe = _u;
  }));

  it('should return an uppercase string', () => {
      const result = pipe.transform('hello');
      expect(result).toBe('HELLO');
  });
});
