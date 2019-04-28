import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { expect } from 'chai';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('navigator.appCodeName', () => {
    expect(navigator.appCodeName).to.not.be.undefined;
  });
  it('navigator.appName', () => {
    expect(navigator.appName).to.not.be.undefined;
  });
  it('navigator.appVersion', () => {
    expect(navigator.appVersion).to.not.be.undefined;
  });
  it('navigator.platform', () => {
    expect(navigator.platform).to.not.be.undefined;
  });
  it('navigator.product', () => {
    expect(navigator.product).to.not.be.undefined;
  });
  it('navigator.productSub', () => {
    expect(navigator.productSub).to.not.be.undefined;
  });
  it('navigator.userAgent', () => {
    expect(navigator.userAgent).to.not.be.undefined;
  });
  it('navigator.vendor', () => {
    expect(navigator.vendor).to.not.be.undefined;
  });
  it('navigator.vendorSub', () => {
    expect(navigator.vendorSub).to.not.be.undefined;
  });
  it('navigator.language', () => {
    expect(navigator.language).to.not.be.undefined;
  });
  it('navigator.languages', () => {
    expect(navigator.languages).to.not.be.undefined;
  });
  it('navigator.onLine', () => {
    expect(navigator.onLine).to.not.be.undefined;
  });
  it('navigator.cookieEnabled', () => {
    expect(navigator.cookieEnabled).to.not.be.undefined;
  });
  it('navigator.hardwareConcurrency', () => {
    expect(navigator.hardwareConcurrency).to.not.be.undefined;
  });

  // Undefined in JSDOM
  it('navigator.doNotTrack', () => {
    expect(navigator.doNotTrack).to.not.be.undefined;
  });
  it('navigator.geolocation', () => {
    expect(navigator.geolocation).to.not.be.undefined;
  });
  it('navigator.getGamepads', () => {
    expect(navigator.getGamepads).to.not.be.undefined;
  });
  it('navigator.maxTouchPoints', () => {
    expect(navigator.maxTouchPoints).to.not.be.undefined;
  });
  it('navigator.mediaDevices', () => {
    expect(navigator.mediaDevices).to.not.be.undefined;
  });
  it('navigator.serviceWorker', () => {
    expect(navigator.serviceWorker).to.not.be.undefined;
  });
  it('navigator.sendBeacon', () => {
    expect(navigator.sendBeacon).to.not.be.undefined;
  });
  it('navigator.request​Media​KeySystem​Access', () => {
    expect(navigator.requestMediaKeySystemAccess).to.not.be.undefined;
  });
});
