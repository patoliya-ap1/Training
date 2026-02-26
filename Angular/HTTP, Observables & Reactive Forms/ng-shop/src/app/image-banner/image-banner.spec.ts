import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBanner } from './image-banner';

describe('ImageBanner', () => {
  let component: ImageBanner;
  let fixture: ComponentFixture<ImageBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageBanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
