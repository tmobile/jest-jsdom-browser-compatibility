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

  it('NodeList.item', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const els = fixture.nativeElement.querySelectorAll('.test');
    expect(els.item(1).textContent).to.equal('test');
  });
  it('NodeList.entries', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const els = fixture.nativeElement.querySelectorAll('.test');
    expect(els.entries).to.be.instanceOf(Function);
  });
  it('NodeList.forEach', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const els = fixture.nativeElement.querySelectorAll('.test');
    expect(els.forEach).to.be.instanceOf(Function);
  });
  it('NodeList.keys', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const els = fixture.nativeElement.querySelectorAll('.test');
    expect(els.keys).to.be.instanceOf(Function);
  });
  it('NodeList.values', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const els = fixture.nativeElement.querySelectorAll('.test');
    expect(els.values).to.be.instanceOf(Function);
  });
});
