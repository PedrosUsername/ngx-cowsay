import { Injectable } from '@angular/core';

var modes: { [key: string]: string } = {
  "DEFAULT" : 
`
$the_cow = <<"EOC";
        $thoughts   ^__^
         $thoughts  ($eyes)\\_______
            (__)\\       )\\/\\
             $tongue ||----w |
                ||     ||
EOC
`,
  "MUTILATED" : 
`
##
## A mutilated cow, from aspolito@csua.berkeley.edu
##
$the_cow = <<EOC;
       $thoughts   \\_______
 v__v   $thoughts  \\   O   )
 ($eyes)      ||----w |
 (__)      ||     ||  \\/\\
  $tongue
EOC
`,
  "SMALL" : 
`
##
## A small cow, artist unknown
##
$eyes = ".." unless ($eyes);
$the_cow = <<EOC;
       $thoughts   ,__,
        $thoughts  ($eyes)____
           (__)    )\\
            $tongue||--|| *
EOC
`,
  "MOOSE" : 
`
$the_cow = <<EOC;
  $thoughts
   $thoughts   \\_\\_    _/_/
    $thoughts      \\__/
           ($eyes)\\_______
           (__)\\       )\\/\\
            $tongue ||----w |
               ||     ||
EOC
`,
  
  "NOOO" : 
`
##
## A cow performing an unnatural act, artist unknown.
##
$the_cow = <<EOC;
      $thoughts                _
       $thoughts              (_)
        $thoughts   ^__^       / \\
         $thoughts  ($eyes)\\_____/_\\ \\
            (__)\\       ) /
             $tongue ||----w ((
                ||     ||>> 
EOC
`,
  "VADER" :
`
##
## Cowth Vader, from geordan@csua.berkeley.edu
##
$the_cow = <<EOC;
        $thoughts    ,-^-.
         $thoughts   !oYo!
          $thoughts /./=\\.\\______
               ##        )\\/\\
                ||-----w||
                ||      ||

               Cowth Vader
EOC
`,
};

@Injectable({
  providedIn: 'any'
})
export class CowService {

  use(cow: string): any {
      
    let text: string;
    let flag = false;

    for (let mode in modes) {
      if (mode === cow) {
        text = modes[mode];
        flag = true
      }
    }
    if(!flag)
      text = modes["DEFAULT"];

  
    return (options: object) => { return this._replacer(text, options); };
  }

  private _replacer(cow: string, variables: any): string {
    if (cow.indexOf("$the_cow") !== -1) {
      cow = this._extractTheCow(cow);
    }
  
    return cow
      .replace(/\$thoughts/g, variables.thoughts)
      .replace(/\$eyes/g, variables.eyes)
      .replace(/\$tongue/g, variables.tongue)
      .replace(/\$\{eyes\}/g, variables.eyes)
      .replace(/\$\{tongue\}/g, variables.tongue)
    ;
  }
  
  private _extractTheCow(cow: string): any {
    var match = /\$the_cow\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(cow);
  
    if (!match) {
      console.error("Cannot parse cow file\n", cow);
      return cow;
    } else {
      return match[1].replace(/\\{2}/g, "\\").replace(/\\@/g, "@").replace(/\\\$/g, "$");
    }
  }
}
