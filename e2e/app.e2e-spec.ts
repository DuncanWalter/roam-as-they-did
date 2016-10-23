import { RoamAsTheyDidPage } from './app.po';

describe('roam-as-they-did App', function() {
  let page: RoamAsTheyDidPage;

  beforeEach(() => {
    page = new RoamAsTheyDidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
