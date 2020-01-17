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

import { TestBed, async, ComponentFixture} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { testRoutes } from './app-routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { expect } from 'chai';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(testRoutes),
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  }));

  it('should get correct margin value after change dom element direct', () => {
    const nativeEl = fixture.nativeElement;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    const boxEl = nativeEl.querySelector('.box');
    expect(boxEl.style.marginTop).to.equal('');
  });

  it('should get correct margin value after change style via angular style binding', () => {
    const nativeEl = fixture.nativeElement;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('.button2'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();
    const boxEl = nativeEl.querySelector('.box2');
    expect(boxEl.style.marginTop).to.equal('');
  });


});
