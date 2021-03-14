import {browser, by, element, promise, protractor} from 'protractor';
import Promise = promise.Promise;

export class AppPage {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .container h2')).getText() as Promise<string>;
  }

  navigateToChart() {
    return browser.get('/chart') as Promise<any>;
  }

  getChartPageTitleText() {
    return element(by.css('app-root .container h2')).getText() as Promise<string>;
  }

  getFileUploadElement() {
    return element(by.css('input[type="file"]'));
  }

  getViewChartButton() {
    return element(by.css('button[type="button"]'));
  }

  getChartBoxTitle() {
    return element(by.css('text[text-anchor="start"]')).getText() as Promise<string>;
  }

}
