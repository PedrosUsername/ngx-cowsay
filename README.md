# ngx-cowsay

````
 ______
< bruh >
 ------
        \   ^__^
         \  (OO)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
````

ngx-cowsay is a "ng add friendly" minimal version of [piuccio's cowsay](https://github.com/piuccio/cowsay).

## Install

    $ ng add ngx-cowsay

## Usage

````
import { NgxCowsayService } from 'ngx-cowsay'

@Component
export class AppComponent {

  constructor(private cowsay: NgxCowsayService){
    this.cowsay.log("hello world");
  }
}

````
you can also try:

    this.cowsay.log("cogito ergo sum", "MOOSE", "t", false);

````
 _________________
( cogito ergo sum )
 -----------------
  o
   o   \_\_    _/_/
    o      \__/
           (--)\_______
           (__)\       )\/\
               ||----w |
               ||     ||
````

### Art options:
- "DEFAULT",
- "SMALL",
- "MUTILATED",
- "MOOSE",
- "VADER"

### Mood options:
- "a" (Attacked)
- "b" (Borg)
- "d" (Dead)
- "g" (Greedy)
- "p" (Paranoia)
- "s" (Stoned)
- "t" (Tired)
- "w" (Wired)
- "y" (Youthful)

### SayALoud options:
- true (cow will say it)
- false (cow will think it)