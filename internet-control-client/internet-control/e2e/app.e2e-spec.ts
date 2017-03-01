import { InternetControlPage } from './app.po';

describe('internet-control App', function() {
  let page: InternetControlPage;

  beforeEach(() => {
    page = new InternetControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
