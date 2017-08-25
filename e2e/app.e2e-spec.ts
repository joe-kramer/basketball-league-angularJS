import { BasketballLeagueAngularPage } from './app.po';

describe('basketball-league-angular App', () => {
  let page: BasketballLeagueAngularPage;

  beforeEach(() => {
    page = new BasketballLeagueAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
