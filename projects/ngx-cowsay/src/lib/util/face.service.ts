import { Injectable } from '@angular/core';

var modes: { [key: string]: any } = {
  "a" : {
    eyes : "0o",
    tongue : "  "
  },
	"b" : {
		eyes : "==",
		tongue : "  "
  },
	"d" : {
		eyes : "xx",
		tongue : "U "
	},
	"g" : {
		eyes : "$$$",  // extra '$' needed because of bug
		tongue : "  "
	},
	"p" : {
		eyes : "@@",
		tongue : "  "
	},
	"s" : {
		eyes : "**",
		tongue : "U "
	},
	"t" : {
		eyes : "--",
		tongue : "  "
	},
	"w" : {
		eyes : "OO",
		tongue : "  "
	},
	"y" : {
		eyes : "..",
		tongue : "  "
  }
};

@Injectable({
  providedIn: 'any'
})
export class FaceService {
  
  use(option: string): any {
    for (let mode in modes) {
      if (mode === option) {
        return modes[mode];
      }
    }

    return modes["w"];
  }
}
