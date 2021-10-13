import { Injectable } from '@angular/core';
import { BaloonService } from './util/baloon.service';
import { CowService } from './util/cow.service';
import { FaceService } from './util/face.service';

@Injectable({
  providedIn: 'root'
})
export class NgxCowsayService {

  constructor(
    private baloon: BaloonService,
    private cows: CowService,
    private faces: FaceService
  ) { }

  log(str: string, art = "DEFAULT", mood = "w", sayAloud = true): void {

    let cow = this.cows.use(art);
    let face = this.faces.use(mood);
    
    if(sayAloud){
      face.thoughts = "\\";
      console.log(this.baloon.say( str, 30 ) + "\n" + cow(face));
    } else {
      face.thoughts = "o";
      console.log(this.baloon.think( str, 30 ) + "\n" + cow(face));
    }

  }

}
