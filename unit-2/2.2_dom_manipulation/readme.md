# Javascript In The DOM

## Resources

- [Slides I use](https://slides.com/jonmcd/deck-15)
    - _Note:_ these slides have content from both days of lecture combined into one. 

## Notes on this lecture

Javascript in the DOM was previously taught over the course of 2 days. In lieu of a review before Skill Check 1 (I find almost all students finish the skills check around lunch time _without_ a review the day before), I choose to split this lesson into 2 days again.

## Day 1 lecture outline

We are going to be using Javascript in a different way today. Where HTML is like the skeleton, CSS is like the skin, and Javascript's real purpose is the muscles and organs. It's what makes your application interactive and actually _do_ things.

#### The DOM

`DOM` stands for "Document Object Model". The HTML you write is parsed by the browser and turned into the DOM, which means what you see on a website isn't _technically_ the HTML you wrote. Javascript is a language that the browser reads and runs, but the DOM is where that happens.

Create an html document with 6 `<button>` elements inside some sort of **buttons-container** div. Next to that, create a div with an id of "box".

```html
<!DOCTYPE html>
<html>
<head>
  <title>JS in the DOM</title>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div id="app">
    <div class="buttons-container">
      <button>Button 1</button>
      <button>Button 2</button>
      <button>Button 3</button>
      <button>Button 4</button>
      <button>Button 5</button>
      <button>Button 6</button>
    </div>
    <div id="box">I have some text</div>
  </div>
</body>
</html>
```

Next create a `style.css` file and have the class copy some styles. Since the point of this lecture is Javascript, not CSS, don't spend much time here.

```css
body {
  background: linear-gradient(40deg, #e3ffe7, #d9e7ff);
  margin: 0;
  min-height: 100vh;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.test-button {
  background: #fffffa;
  border: 1px solid black;
  border-radius: 5px;
  padding: .5rem 2rem;
  margin: 0 2rem;
  cursor: pointer;
}

.blue {
  color: #096cff;
  background: #afafaf;
  border-color: #096cff;
}

.key {
  color: #333333;
  background: #096cff;
  border-color: #333333;
}

input {
  width: 400px;
}
```

Load this up in the browser (now would be a good time to double/triple check everyone has `live-server` installed so they don't have to keep refreshing their pages) and open up the elements inspector in Chrome. This is the actual DOM.

It looks exactly like the HTML we wrote, right? _But it isn't!_ It's actually a sort of "copy" that the browser made for us, fixing any mistakes it can and making it easily editable.

We can directly modify the DOM using Javascript.

#### Special Browser Objects

The browser includes a global object called the `window`. This is the global scope.

Try declaring a `var` straight in the developer console and then `console.log(window.<yourvarname>)`. It appears as if you'd console.log'd the var by itself.

Inside this `window` object, the browser contains another object called `document`. _This `document` obejct is the DOM_.

This means that we can find our entire nested HTML document inside this `document` object. 

Every element we create is called a `node` and is a special type of object. This node object includes all of the information about that element on the page. Its classes, ids, and styles are all there. The other elements that are nested inside are also included.

Navigating this can be kind of a lot though, so we have some methods for making this a little easier on us. A little more on this in a minute.

#### HTML + JS Together

Create a file called `index.js`:
```js
console.log('hello world!')
```

How do we run a this javascript file in the browser though?

With a `<script>` tag!

Originally, these were placed in the head of the HTML document. Javascript can slow down our load times, however, so a better solution is to place them at the bottom of the document, underneath the closing `</body>` tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JS in the DOM</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    ...
  </body>
  <script src="./index.js"></script>
</html>
```

Another newer solution is to place the `<script>` tag in the head (for organization's sake), and add the attribute `async`. This causes the javascript in this script tag to load after the rest of the HTML.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JS in the DOM</title>
    <link rel="stylesheet" href="./style.css">
    <script src="./index.js" async></script>
  </head>
  <body>
    ...
  </body>
</html>
```

### DOM Manipulation

Demonstrate these methods and attributes using the buttons created in our HTML document:

#### `document.getElementById('id-name')`

Grabs a single element from the DOM. This is why the `id` attribute should be used to give a unique name to an element, not used more than once.

In the `index.js` file, save the element with the id "box" to a variable called "box".

`const box = document.getElementById('box')`

Now console.log the box and see what shows up in the developer console. If we want to see any more information about our element, we can use console.dir instead.

#### `HTMLElement.innerText`
Now that we have a reference to the box div saved as a variable, we can modify it right here. Type `box.innerText = 'I changed the text'` and see what happens in Chrome.

So we could _in theory_ compose our entire website inside javascript. It could certainly be more difficult, but we could do it!

A more realistic use case, however, might be to have something change as we click a button.

Replace this box.innerText statement with a function:

```js
function changeText() {
  if (box.innerText === 'I changed the text') {
    box.innerText = 'I have some text'
  } else {
    box.innerText = 'I changed the text'
  }
}
```

Now the box's text hasn't changed. What's the big idea? Well we aren't running our function. Try invoking it below and see the box's text change. Invoke it again, and it goes back to the original text.

But our users aren't going to type `changeText()` in an app! Let's make this function run when a user clicks on a button.

#### Event Listeners

The browser (specifically the DOM) is constantly watching everything you do. When you move your mouse slightly, the browser keeps track of it. When you press a key or click or scroll or resize the window, the browser keeps track of it.

An `event listener` is something that waits for you to do something specific and  when you do, it responds with something else.

Take a look at our first button, and let's attach an event listener.

```html
...
<button onclick="changeText()">Button 1</button>
...
```

Now when the browser sees you click on this element, it will find a function called **changeText** and run it!

Click the button a few times and see the text change back and forth.

#### `document.getElementsByClassName('class-name')`
What if I want to select an element without an id?

Grab the `buttons-container` div like this:

```js
const buttonsContainer = document.getElementsByClassName('buttons-container')
```

When we console.log or console.dir the buttonsContainer, we see it is enclosed in what _appears_ to be an array! In fact, this is not an array at all, but is an HTML Collection, also known as a Node List. It's just like an array, but without the array methods we've learned about.

So if we want one element from this list, we will use bracket notation to get the element we want. 

#### The `style` property

We can also add CSS styles in our javascript file! There are only a couple differences:

1. Properties which are more than one word are camelCased instead of kebob-cased
2. All of the values are strings

Let's add some styles to our `buttons-container` div which is saved in our HTML Collection list as `buttons-container[0]`.

```js
buttonsContainer[0].style.height = '80px'
buttonsContainer[0].style.display = 'flex'
buttonsContainer[0].style.alignItems = 'center'
buttonsContainer[0].style.justifyContent = 'center'
buttonsContainer[0].style.borderTop = '5px solid orange'
```

#### `document.getElementsByTagName('tagname')`
Grab all of our buttons in one fell swoop with this function:

```js
const buttons = document.getElementsByTagName('button')
```

Just as the last method, `getElementsByTagName` will also return an HTML Collection. So if we want to do the same thing to all of our buttons, we will need to loop through the list.


#### `className`
Loop through the list of buttons we have, and give each of them the class of "test-button" by using the className property of each of them.

```js
for (let i = 0; i < buttons.length; i++) {
  buttons[i].className = 'test-button'
}
```

#### classList
`classList.add('class-name')` is a safer way of adding class names. You won't accidentally remove other class names if you use this method.

`classList.remove('class-name')` is the best way to _remove_ a class from an element without affecting other classes it may have.

`classList.contains('class-name')` is a great way of checking if a single class has been appied to an element.

Create this function to demonstrate all of these features together:

```js
function changeColor() {
  if (buttons[1].classList.contains('blue')) {
    buttons[1].classList.add('key')
    buttons[1].classList.remove('blue')
  } else {
    buttons[1].classList.add('blue')
    buttons[1].classList.remove('key')
  }
}
```

Attach this function to our second button in the HTML document with another **event listener**.

```html
...
<button onclick='changeColor()'>Button 2</button>
...
```

This changes the classes applied to our button each time we click on it. Because of the styles we have in our `style.css` file, we see a pretty stark difference between the two classes.

#### innerHTML

Just like with innerText, we can alter the contents of an element to include other html elements.

Let's demonstrate this with another function:

```js
function addHTML() {
  box.innerHTML = `
    <h1>I'm big</h1>
    <p>This is a paragraph</p>
  `
}
```

<!-- TODO: Finish BUTTON 3 from wlh14/unit2/vanillajs-1-lecture -->