import { IScalePage } from './app.po';

describe('iscale App', () => {
  let page: IScalePage;

  beforeEach(() => {
    page = new IScalePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
