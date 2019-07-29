import { MatchModel as Match } from './match-model.model';

describe('Match', () => {
  it('should create an instance', () => {
    expect(new Match(new Us,"b")).toBeTruthy();
  });
});
