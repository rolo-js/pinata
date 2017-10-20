import { PinataPage } from './app.po';

describe('pinata App', () => {
  let page: PinataPage;

  beforeEach(() => {
    page = new PinataPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
