declare global {
  interface Window {
    DOMParser: any;
  }
}
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

  it('should correctly parse XML', () => {
    const domParser = new window.DOMParser();
    const doc = domParser.parseFromString('<?xml version="1.0" encoding="utf-8"?><example Foo="bar"></example>', 'text/xml');
    const result = doc.evaluate('//*[@Foo="bar"]', doc, null, XPathResult.ANY_TYPE, null);
    const exampleNode = result.iterateNext();
    expect(exampleNode.nodeName).to.equal('example');
  });
});
