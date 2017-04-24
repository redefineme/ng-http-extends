import { NgHttpExtendsPage } from './app.po';

describe('ng-http-extends App', () => {
  let page: NgHttpExtendsPage;

  beforeEach(() => {
    page = new NgHttpExtendsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
