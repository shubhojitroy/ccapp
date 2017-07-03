import { browser, by, element } from 'protractor';

export class CcappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ccapp-root h1')).getText();
  }
}
