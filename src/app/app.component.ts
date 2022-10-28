import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './shared/components/photo-board/interface/photo';
import { PhotoBoardService } from './shared/components/photo-board/service/photo-board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular testing';
  public photos$: Observable<Photo[]>;

  constructor(private service: PhotoBoardService) {}

  ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }

  // public likes = 0;

  // public like(): void {
  //   this.likes++;
  // }
}
