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

  it('should create beforeunloadevent', () => {
    function addEvent() {
      return document.createEvent('beforeunloadevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create compositionevent', () => {
    function addEvent() {
      return document.createEvent('compositionevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create customevent', () => {
    function addEvent() {
      return document.createEvent('customevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create devicemotionevent', () => {
    function addEvent() {
      return document.createEvent('devicemotionevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create deviceorientationevent', () => {
    function addEvent() {
      return document.createEvent('deviceorientationevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create dragevent', () => {
    function addEvent() {
      return document.createEvent('dragevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create event', () => {
    function addEvent() {
      return document.createEvent('event');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create events', () => {
    function addEvent() {
      return document.createEvent('events');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create focusevent', () => {
    function addEvent() {
      return document.createEvent('focusevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create hashchangeevent', () => {
    function addEvent() {
      return document.createEvent('hashchangeevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create htmlevents', () => {
    function addEvent() {
      return document.createEvent('htmlevents');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create keyboardevent', () => {
    function addEvent() {
      return document.createEvent('keyboardevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create messageevent', () => {
    function addEvent() {
      return document.createEvent('messageevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create mouseevent', () => {
    function addEvent() {
      return document.createEvent('mouseevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create mouseevents', () => {
    function addEvent() {
      return document.createEvent('mouseevents');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create storageevent', () => {
    function addEvent() {
      return document.createEvent('storageevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create svgevents', () => {
    function addEvent() {
      return document.createEvent('svgevents');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create textevent', () => {
    function addEvent() {
      return document.createEvent('textevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create touchevent', () => {
    function addEvent() {
      return document.createEvent('touchevent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create uievent', () => {
    function addEvent() {
      return document.createEvent('uievent');
    }
    expect(addEvent).to.not.throw();
  });

  it('should create uievents', () => {
    function addEvent() {
      return document.createEvent('uievents');
    }
    expect(addEvent).to.not.throw();
  });
});
