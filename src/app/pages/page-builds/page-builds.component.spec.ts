import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBuildsComponent } from './page-builds.component';

describe('PageBuildsComponent', () => {
  let component: PageBuildsComponent;
  let fixture: ComponentFixture<PageBuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
