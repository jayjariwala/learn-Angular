import { NinjaappPage } from './app.po';

describe('ninjaapp App', function() {
  let page: NinjaappPage;

  beforeEach(() => {
    page = new NinjaappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
