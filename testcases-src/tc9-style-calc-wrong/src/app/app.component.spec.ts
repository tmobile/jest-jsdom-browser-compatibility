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

  it('should get correct width for box1', () => {
    const box = fixture.debugElement.query(By.css('.box1')).nativeElement;
    console.log(box.style.width);
    expect(box.style.width).to.equal('20px');
  });

  it('should get correct width for box2', () => {
    const box = fixture.debugElement.query(By.css('.box2')).nativeElement;
    console.log();
    expect(box.style.width).to.equal('10vh');
  });

  it('should get correct width for box3', () => {
    const box = fixture.debugElement.query(By.css('.box3')).nativeElement;
    console.log(box.style.width);
    expect(box.style.width).to.equal('calc(30px)');
  });

  it('should get correct width for box4', () => {
    const box = fixture.debugElement.query(By.css('.box4')).nativeElement;
    console.log(box.style.width);
    expect(box.style.width).to.equal('calc(10px + 20%)');
  });

  it('should get correct width for box5', () => {
    const box = fixture.debugElement.query(By.css('.box5')).nativeElement;
    console.log(box.style.width);
    expect(box.style.width).to.equal('calc(10px + 100vh)');
  });

});
