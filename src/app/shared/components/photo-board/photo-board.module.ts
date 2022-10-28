import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoFrameModule } from '../photo-frame/photo-frame.module';
import { PhotoBoardService } from './service/photo-board.service';



@NgModule({
  declarations: [PhotoBoardComponent],
  imports: [
    CommonModule,
    PhotoFrameModule
  ],
  providers: [PhotoBoardService],
  exports: [PhotoBoardComponent]
})
export class PhotoBoardModule { }
