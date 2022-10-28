import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Photo } from './interface/photo';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss'],
})
export class PhotoBoardComponent implements OnChanges {
  @Input() public photos: Photo[];

  public rows: any[][] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // Se houve mudanca no input fotos, ele vai executar o metodo
    if (changes.photos) {
      this.rows = this.groupColumns(changes.photos.currentValue);
    }
  }

  public groupColumns(photos: Photo[]): any[][] {
    const newRows = [];
    const step = 4;
    // Divide o array de fotos em grupos de 4
    for (let index = 0;index < photos.length; index += step) {
      newRows.push(photos.splice(index, index + step));
    }
    return newRows;
  }
}
