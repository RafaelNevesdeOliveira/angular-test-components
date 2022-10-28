import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent> = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create compost', () => {
    expect(component).toBeTruthy();
  });

  it(`#${PhotoFrameComponent.prototype.like.name} should trigger (@output liked) once when
  called multiple times within debounce time`, fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    component.liked.subscribe(() => times++);
    component.like();
    component.like();
    //parar aplicacao e executar depois desse tempo
    tick(500);
    expect(times).toBe(1);
  }));

  it(`#${PhotoFrameComponent.prototype.like.name} should trigger (@output liked) once when
  called two times within debounce time`, fakeAsync(() => {
    fixture.detectChanges();
    let times = 0;
    component.liked.subscribe(() => times++);
    component.like();
    tick(500);
    component.like();
    tick(500);
    //parar aplicacao e executar depois desse tempo
    expect(times).toBe(2);
  }));

  it(`(D) Should display number of likes when (@Input likes) is incremented`, () => {
    // Quando componente é disparado
    fixture.detectChanges();
    component.likes++;
    //escutar novamente apos o click
    fixture.detectChanges();
    const element: HTMLElement =
      fixture.nativeElement.querySelector('.like-counter');
    expect(element.textContent.trim()).toBe('1');
  });

  it(`(D) Should update aria-label when (@Input likes) is incremented`, () => {
    // Quando componente é disparado
    fixture.detectChanges();
    component.likes++;
    //escutar novamente apos o click
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('1: people liked');
  });

  it(`(D) Should have aria-label with 0 (@Input likes)`, () => {
    // Quando componente é disparado
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('0: people liked');
  });

  it(`(D) Should display image with src and description when bound to properties`, () => {
    const description = 'some description';
    const src = 'http://somesite.com/img.jpg';

    component.src = src;
    component.description = description;

    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(src);
    expect(img.getAttribute('alt')).toBe(description);
  });
});
