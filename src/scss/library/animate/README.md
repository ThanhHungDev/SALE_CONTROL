

### Animations

To animate an element, add the class `animate__animated` to an element. You can include the class `animate__infinite` for an infinite loop. Finally you need to add one of the following classes to the element (adding the `animate__` prefix before it):

| Class Name           |                     |                     |                      |
| -------------------- | ------------------- | ------------------- | -------------------- |
| `bounce`             | `flash`             | `pulse`             | `rubberBand`         |
| `shake`              | `headShake`         | `swing`             | `tada`               |
| `wobble`             | `jello`             | `bounceIn`          | `bounceInDown`       |
| `bounceInLeft`       | `bounceInRight`     | `bounceInUp`        | `bounceOut`          |
| `bounceOutDown`      | `bounceOutLeft`     | `bounceOutRight`    | `bounceOutUp`        |
| `fadeIn`             | `fadeInDown`        | `fadeInDownBig`     | `fadeInLeft`         |
| `fadeInLeftBig`      | `fadeInRight`       | `fadeInRightBig`    | `fadeInUp`           |
| `fadeInUpBig`        | `fadeOut`           | `fadeOutDown`       | `fadeOutDownBig`     |
| `fadeOutLeft`        | `fadeOutLeftBig`    | `fadeOutRight`      | `fadeOutRightBig`    |
| `fadeOutUp`          | `fadeOutUpBig`      | `fadeInTopLeft`     | `fadeInTopRight`     |
| `fadeInBottomLeft`   | `fadeInBottomRight` | `fadeOutTopLeft`    | `fadeOutTopRight`    |
| `fadeOutBottomRight` | `fadeOutBottomLeft` | `flipInX`           | `flipInY`            |
| `flipOutX`           | `flipOutY`          | `lightSpeedIn`      | `lightSpeedOut`      |
| `rotateIn`           | `rotateInDownLeft`  | `rotateInDownRight` | `rotateInUpLeft`     |
| `rotateInUpRight`    | `rotateOut`         | `rotateOutDownLeft` | `rotateOutDownRight` |
| `rotateOutUpLeft`    | `rotateOutUpRight`  | `hinge`             | `jackInTheBox`       |
| `rollIn`             | `rollOut`           | `zoomIn`            | `zoomInDown`         |
| `zoomInLeft`         | `zoomInRight`       | `zoomInUp`          | `zoomOut`            |
| `zoomOutDown`        | `zoomOutLeft`       | `zoomOutRight`      | `zoomOutUp`          |
| `slideInDown`        | `slideInLeft`       | `slideInRight`      | `slideInUp`          |
| `slideOutDown`       | `slideOutLeft`      | `slideOutRight`     | `slideOutUp`         |
| `backInDown`         | `backInLeft`        | `backInRight`       | `backInUp`           |
| `backOutDown`        | `backOutLeft`       | `backOutRight`      | `backOutUp`          |
| `heartBeat`          |

Full example:

```html
<h1 class="animate__animated animate__infinite animate__bounce animate__delay-2s">Example</h1>
```

[Check out all the animations here!](https://daneden.github.io/animate.css/)

It's possible to change the duration of your animations, add a delay or change the number of times that it plays:

```css
.yourElement {
  animation-duration: 3s;
  animation-delay: 2s;
  animation-iteration-count: infinite;
}
```

## CSS Custom Properties (CSS Variables)

Since version 4, animate.css makes use of custom properties (also known as CSS variables) to define the animations duration, delay and speed. This makes it easy to change all your animations time contrained properties on the fly. It means that you can have a slowmotion or timelapse effect with an one-liner javascript:

```javascript
// All animations will take twice the time to acomplish
document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to acomplish
document.documentElement.style.setProperty('--animate-duration', '.5s');
```

It's possible to overwrite the variables with pure CSS too:

```css
/* This will overide all animations duration */
:root {
  --animate-duration: 2s;
}

/* This will overide only this animation duration */
.animate__bounce {
  --animate-duration: 3s;
}
```

Even though custom properties are not supported by some older browsers - like IE 10+ - you can use it safely as animate is powered by postcss, providing a proper fallback.

## Usage with Javascript

You can do a whole bunch of other stuff with animate.css when you combine it with Javascript. A simple example:

```javascript
const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__bounceOutLeft');
```

You can also detect when an animation ends:

```javascript
const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__bounceOutLeft');

element.addEventListener('animationend', function() {
  doSomething();
});
```

You can use this simple function to add and remove the animations:

```javascript
function animateCSS(element, animationName, callback) {
  const node = document.querySelector(element);
  node.classList.add('animate__animated', animationName);

  function handleAnimationEnd() {
    node.classList.remove('animate__animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);

    if (typeof callback === 'function') callback();
  }

  node.addEventListener('animationend', handleAnimationEnd);
}
```

And use it like this:

```javascript
animateCSS('.my-element', 'animate__bounce');

// or
animateCSS('.my-element', 'animate__bounce', function() {
  // Do something after animation
});
```

Notice that the examples are using ES6's `const` declaration, dropping support for IE10 and some aging browsers. If you prefer, switch the `const` to `var` declarations and IE10 and some old browsers will get support (they still have to provide [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) support, so do your [research](https://caniuse.com/#feat=classlist)).

## Setting _Delay_ and _Speed_

### Delay Class

It's possible to add delays directly on the element's class attribute, just like this:

```html
<div class="animate__animated bounce delay-2s">Example</div>
```

| Class Name          | Delay Time |
| ------------------- | ---------- |
| `animate__delay-2s` | `2s`       |
| `animate__delay-3s` | `3s`       |
| `animate__delay-4s` | `4s`       |
| `animate__delay-5s` | `5s`       |

> _**Note**: The default delays are from 1 second to 5 seconds only. If you need custom delays, add it directly to your own CSS code._

### Slow, Slower, Fast, and Faster Class

It's possible to control the speed of the animation by adding these classes, as a sample below:

```html
<div class="animate__animated animate__bounce animate__faster">Example</div>
```

| Class Name        | Speed Time |
| ----------------- | ---------- |
| `animate__slow`   | `2s`       |
| `animate__slower` | `3s`       |
| `animate__fast`   | `800ms`    |
| `animate__faster` | `500ms`    |

> _**Note**: The `animate__animated` class has a default speed of `1s`. If you need custom duration, add it directly to your own CSS code._

### Loop Class

It's possible to control the iteration count of the animation by adding these classes, like below:

```html
<div class="animate__animated animate__bounce animate__loop-2">Example</div>
```

| Class Name        | Iteration Count |
| ----------------- | --------------- |
| `animate__loop-1` | `1`             |
| `animate__loop-2` | `2`             |
| `animate__loop-3` | `3`             |

> _**Note**: The `animate__loop` class has a default iteration count of `1`. If you need custom iteration count, add it directly to your own CSS code._

## Custom Builds

Animate.css is powered by npm/npx, postcss + postcss-preset-env, which means you can create custom builds pretty easily, using future CSS features safely. First of all, you???ll need Node and all other dependencies:

```sh
cd path/to/animate.css/
npm install
```

Next, run `npm start` to compile your custom builds. For example, if you want only some of the ???attention seekers???, simply edit the `./source/animate.css` file and keep only the animations `@import` you want to use.

```css
@import 'attention_seekers/bounce.css';
@import 'attention_seekers/flash.css';
@import 'attention_seekers/pulse.css';
@import 'attention_seekers/rubberBand.css';
@import 'attention_seekers/shake.css';
@import 'attention_seekers/headShake.css';
@import 'attention_seekers/swing.css';
@import 'attention_seekers/tada.css';
@import 'attention_seekers/wobble.css';
@import 'attention_seekers/jello.css';
@import 'attention_seekers/heartBeat.css';
```
