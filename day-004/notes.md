# Day 4 Notes

Tutorial I'm following: [Create typing effect in CSS and JS](https://medium.com/front-end-weekly/how-to-create-typing-effect-in-css-and-js-3252dd807f0a)

Preexisting typewriter JS libraries: [TypeIt](https://www.typeitjs.com/) | [TypewriterJS](https://safi.me.uk/typewriterjs/)

I... want to make my own typewriter because I want to link it to my own keylogger.

## [CSS Animation](https://www.w3schools.com/cssref/css3_pr_animation.asp)

`animation: name duration timing-function delay iteration-count direction fill-mode play-state;`

Ugh, this typewriter cannot handle multi-line input. The way that the cursor works is that it is a div sitting to the right of the div that has the text. So when the text goes onto a new line, its box has already reached its full width so the cursor continues to sit at the far right end.

I will look into this [post](https://dev.to/afif/a-multi-line-css-only-typewriter-effect-3op3) tomorrow that uses background color(?) supposedly to solve this.