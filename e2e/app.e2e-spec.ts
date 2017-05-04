import { Gundmann.DkPage } from './app.po';

describe('gundmann.dk App', () => {
  let page: Gundmann.DkPage;

  beforeEach(() => {
    page = new Gundmann.DkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
