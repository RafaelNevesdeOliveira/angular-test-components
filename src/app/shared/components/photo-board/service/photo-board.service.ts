import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../interface/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoBoardService {

  constructor(private httpClient: HttpClient) { }

  public getPhotos():Observable<Photo[]> {
    return this.httpClient.get<Photo[]>('http://localhost:3000/photos');
  }

}
