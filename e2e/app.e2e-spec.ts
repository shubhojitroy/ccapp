import { CcappPage } from './app.po';

describe('ccapp App', () => {
  let page: CcappPage;

  beforeEach(() => {
    page = new CcappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ccapp!!');
  });
});
