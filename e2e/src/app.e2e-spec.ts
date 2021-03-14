import { AppPage } from './app.po';
import {browser, element, logging, protractor} from 'protractor';

describe('Spectrum Chart Viewer App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Home Page Title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Chart Viewer Home');
  });

  it('should display Chart Page Title', () => {
    page.navigateToChart();
    expect(page.getChartPageTitleText()).toEqual('Spectrum Chart Viewer');
  });

  it('should upload JSON file', () => {
    var path = require('path');
    var fileToUpload = '../json1.txt';
    var absolutePath = path.resolve(__dirname, fileToUpload);
    var fileElem = page.getFileUploadElement();
    fileElem.sendKeys(absolutePath);
  });

  it('should view Chart', () => {
    var buttonElem = page.getViewChartButton();
    console.log("Button "+buttonElem);
    buttonElem.click();
    expect(page.getChartBoxTitle()).toEqual('CCMSLIB00000578035');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
