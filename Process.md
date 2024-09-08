<!---
You are required to submit a supporting document, which may take the form of a blog or a ‘how- to’.
The supporting document should include your decision-making and specify the problems, and their solutions, that have been encountered while completing this assessment. Highlight important aspects of the project by using screenshots and annotations.
--->

# Process Documentation:

## Basic Folder Structure and Setup:

- #### Folder Structure:

We are starting up with the following folder and file structure layout and as the project evolve we might add/create more folders (layout, components, pages, themes, base, abstracts)

```
project folder/
|
|- css/ => this is where Sass will generate the Css file for us.
|
|
|- images/
|
|
|- js/ => for Javascript scripts
|
|
|- sass/ => this is where we are going to store variables, mixins, partials, etc...
|
|
|- vendor/ => for our bootstrap grid and other elements we want to use in the project
|
index.html

```

> **Note:** _The order when importing is important! ex If base.scss uses variables.scss, variables need to be imported first._

- #### Bootstrap Download and Install:

We can download Bootstrap [Bootstrap Download](https://getbootstrap.com/docs/5.0/getting-started/download/) to drop in the project and put the bootstrap folder in our vendor folder. And we can use the boostrap by linking it to our Scss.

- #### Reset Css and base layout with scroll snap:

## Basic layout with grid:

## Basic Styling with mixins, partials and variables:

> _"Sass keeps the CSS code DRY (Don't Repeat Yourself). One way to write DRY code is to keep related code in separate files."_

This was really helpfull for my skill level svg circles as i had to make 6 of them so i created the following:

```
@mixin skill($columnNumber) {
  grid-column: $columnNumber;
  & > div.skill-name-logo {
    img {
      grid-row: 1;
      &.skill-logo {
        margin-top: 3rem;
        margin-bottom: 2rem;
        margin-left: auto;
        margin-right: auto;
        width: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
      }
    }
  }
  & > div.single-chart {
    grid-row: 2;
    @include circle;
  }
  & > p {
    grid-row: 3;
    font-size: 1.2rem;
    font-weight: 500;
    text-decoration: underline;
    color: $color-lighterPrime;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
  }
  & > div.Framwork {
    grid-row: 4;
    margin: 1rem;
    line-height: 1.3;
    font-size: 1rem;
    font-weight: 400;
  }
}

```

which inside that mixin is using the css for the circle:

```
@mixin circle() {
  .single-chart {
    width: 33%;
    justify-content: space-around;
  }

  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 80%;
    max-height: 250px;
  }

  .circle-bg {
    fill: none;
    stroke: $color-lighterPrime;
    stroke-linecap: round;
    stroke-width: 3.8;
  }

  .circle {
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }

  .circular-chart .circle {
    stroke: $color-accent;
  }
  .percentage {
    fill: $color-secondary;
    font-family: sans-serif;
    font-size: 0.4em;
    text-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
    text-anchor: middle;
  }
}

```

And all that combined saved me hundreds of lines of repeating code, so instead in my section styling sheet i only have the following for the 6 circles and my 6 column grid:

```
.skills-container {
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 3rem, 5rem, 90px, auto;
  gap: 1rem;
}
.skill-1 {
  @include skill(1);
}
.skill-2 {
  @include skill(2);
}
.skill-3 {
  @include skill(3);
}
.skill-4 {
  @include skill(4);
}
.skill-5 {
  @include skill(5);
}
.skill-6 {
  @include skill(6);
}
```

And of course i could have nested it, but i like the seperation and that make it easier to read.

## Partials:

I organised and expended the folders tree strucure as follow:

```
.
├── Process.md
├── css
│   ├── normalize.css
│   ├── styles.css
│   └── styles.css.map
├── firstattempt.html
├── images
│   ├── Csh.png
│   ├── Csharp_Logo.png
│   ├── HTML5_Logo_128.png
│   ├── JavaScript-logo.png
│   ├── _SEB7784~2.NEF.jpg
│   ├── logo-mysql-170x115.png
│   ├── new-php-logo.png
│   └── python-logo-only.png
├── index.html
├── js
│   └── hamburger.js
├── sass
│   ├── _variables.scss
│   ├── base
│   │   ├── __base-dir.scss
│   │   ├── _basics.scss
│   │   ├── _mixins.scss
│   │   ├── _nav.scss
│   │   ├── _reset.scss
│   │   └── _scrolling.scss
│   ├── sections
│   │   ├── _about.scss
│   │   ├── _contact.scss
│   │   ├── _experience.scss
│   │   ├── _home.scss
│   │   └── _projects.scss
│   └── styles.scss
└── vendor
    └── bootstrap-5.0.2-dist
        ├── css
        │   ├── bootstrap-grid.min.css
        │   └── bootstrap.min.css
        └── js
            ├── bootstrap.bundle.js
            └── bootstrap.min.js

```

The section folder is helping me to keep the code organised per section and to work on each section independently.
It also create a seperation of concern.

## Responsiveness and Breakpoints:

---

## Animation and advanced styling:

I'm trying to push CSS animation if i can and if not Javascipt.

### Lotties:

I have discovered Lotties. Lottie is incredible because it works on all browsers that support JavaScript. Besides, you can add its code on any website and application where you want to show animations. The Lottie libraries are compatible with iOS, Android, and different operating systems.

The only downside that i have found is that to create it you need a paid software or subscribe to lottielabs for example to download the animation without the trademarks...

### CSS Animation and Keyframe:

Here are example of use of CSS animation used in the website, mainly for text animation:

```

// simple text change loop animation:
@keyframes changeText {
  0% {
    content: "Bonjour";
  }
  50% {
    content: "Kia Ora";
  }
}

// This one is slightly more complexe as it makes the top text showing first and appearing on top the the second block of text appears at the bottom:

@keyframes showTopText {
  0% {
    transform: translate3d(0, 100%, 0);
  }
  40%,
  60% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes showBottomText {
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
```

I did not use Javascript for the svg animation as it was easier in my opinion to do it with css.

### Javascript:

For a more complexe animation, i prefered to use Javascript animation.
It was really handy for the hamburger menu:

```
const menu = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

let showMenu = false;
menu.addEventListener('click', toggle);
function toggle() {
    if (!showMenu) {
        menu.classList.add('open');
        hamburger.classList.add('open');
        nav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
    } else {
        menu.classList.remove('open');
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}

```

I did wnat to reinvent the wheel here, this code can be reuse for all projects as much as we keep class name the same or modify the script.
