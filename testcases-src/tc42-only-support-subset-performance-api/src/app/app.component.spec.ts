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

  it('performance.now', () => {
    expect(performance.now).to.not.be.undefined;
  });
  it('performance.toJSON', () => {
    expect(performance.toJSON).to.not.be.undefined;
  });
  it('performance.timeOrigin', () => {
    expect(performance.timeOrigin).to.not.be.undefined;
  });
  it('performance.clearMarks', () => {
    expect(performance.clearMarks).to.not.be.undefined;
  });
  it('performance.clearMeasures', () => {
    expect(performance.clearMeasures).to.not.be.undefined;
  });
  it('performance.clearResourceTimings', () => {
    expect(performance.clearResourceTimings).to.not.be.undefined;
  });
  it('performance.getEntries', () => {
    expect(performance.getEntries).to.not.be.undefined;
  });
  it('performance.getEntriesByName', () => {
    expect(performance.getEntriesByName).to.not.be.undefined;
  });
  it('performance.getEntriesByType', () => {
    expect(performance.getEntriesByType).to.not.be.undefined;
  });
  it('performance.mark', () => {
    expect(performance.mark).to.not.be.undefined;
  });
  it('performance.measure', () => {
    expect(performance.measure).to.not.be.undefined;
  });
  it('performance.setResourceTimingBufferSize', () => {
    expect(performance.setResourceTimingBufferSize).to.not.be.undefined;
  });
});
