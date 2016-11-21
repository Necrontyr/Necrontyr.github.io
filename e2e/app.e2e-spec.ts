import { TestCLIProjectPage } from './app.po';

describe('test-cliproject App', function() {
  let page: TestCLIProjectPage;

  beforeEach(() => {
    page = new TestCLIProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
