import { ShopaholistPage } from './app.po';

describe('shopaholist App', () => {
  let page: ShopaholistPage;

  beforeEach(() => {
    page = new ShopaholistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
