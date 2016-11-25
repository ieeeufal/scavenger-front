import { ScavengerWebappPage } from './app.po';

describe('scavenger-webapp App', function() {
  let page: ScavengerWebappPage;

  beforeEach(() => {
    page = new ScavengerWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
