/**
=========================================================================
Copyright 2019 T-Mobile, USA
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
See the LICENSE file for additional language around disclaimer of warranties.
Trademark Disclaimer: Neither the name of “T-Mobile, USA” nor the names of
its contributors may be used to endorse or promote products derived from this
software without specific prior written permission.
===========================================================================
*/

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
