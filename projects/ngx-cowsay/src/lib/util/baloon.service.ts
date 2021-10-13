import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class BaloonService {

  constructor() { }

  say(text: string, wrap: number): string {
    let delimiters = {
      first : ["/", "\\"],
      middle : ["|", "|"],
      last : ["\\", "/"],
      only : ["<", ">"]
    };
  
    return this._format(text, wrap, delimiters);
  }
  think(text: string, wrap: number): string {
    let delimiters = {
      first : ["(", ")"],
      middle : ["(", ")"],
      last : ["(", ")"],
      only : ["(", ")"]
    };
  
    return this._format(text, wrap, delimiters);
  }

  private _format(text: string, wrap: number, delimiters: any): any {
    let lines = this._split(text, wrap);
    let maxLength = this._max(lines);

    let balloon;
    if (lines.length === 1) {
      balloon = [
        " " + this._top(maxLength), 
        delimiters.only[0] + " " + lines[0] + " " + delimiters.only[1],
        " " + this._bottom(maxLength)
      ];
    } else {
      balloon = [" " + this._top(maxLength)];

      for (let i = 0, len = lines.length; i < len; i += 1) {
        let delimiter;

        if (i === 0) {
          delimiter = delimiters.first;
        } else if (i === len - 1) {
          delimiter = delimiters.last;
        } else {
          delimiter = delimiters.middle;
        }

        balloon.push(delimiter[0] + " " + this._pad(lines[i], maxLength) + " " + delimiter[1]);
      }

      balloon.push(" " + this._bottom(maxLength));
    }

    return balloon.join("\n"); //os.EOL
  }

  private _split(text: string, wrap: number): string[] {
    text = text.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '');

    let lines = [];
    if (!wrap) {
      lines = text.split("\n");
    } else {
      let start = 0;
      while (start < text.length) {
        let nextNewLine = text.indexOf("\n", start);

        let wrapAt = Math.min(start + wrap, nextNewLine === -1 ? text.length : nextNewLine);

        lines.push(text.substring(start, wrapAt));
        start = wrapAt;

        // Ignore next new line
        if (text.charAt(start) === "\n") {
          start += 1;
        }
      }
    }

    return lines;
  }

  private _max(lines: string[]) {
    let max = 0;
    for (let i = 0, len = lines.length; i < len; i += 1) {
      if (lines[i].length > max) {
        max = lines[i].length;
      }
    }

    return max;
  }

  private _pad(text: string, length: number) {
    return text + (new Array(length - text.length + 1)).join(" ");
  }

  _top(length: number) {
    return new Array(length + 3).join("_");
  }

  _bottom(length: number) {
    return new Array(length + 3).join("-");
  }
}