# HTML & CSS Day 2 Lecture Notes

## Examples

There are two versions of the same website in this project!

1. `semantic_example` has a landing page built with semantic HTML tags.
2. `divs_example` has the same landing page built with only divs.

## Lesson Outline

### Semantic HTML

I typically show students the webpage built with only divs first, and the code associated with it in the `divs_example` folder. Then I show them how semantic tags can clean things up and provide clarity in the code in the `semantic_example` folder.

### The importance of CSS

- CSS is incredibly important. Users are inclined to spend more time on websites and apps if they are visually appealing!
- I make sure students know they won't get a _lot_ of HTML/CSS content on its own. There simply isn't enough time in a 13 week bootcamp. It is, however, something which is easily self-taught.
- Students should spend time on their own teaching themselves HTML/CSS! How? Clone a website. Students will learn _so much_ by tackling the challenges of cloning a website. Here are some ideas:
  - apple.com
  - nordstrom.com
  - jane.com
  - ableton.com
  - native-instruments.com
  - tesla.com
  - designbetter.co (I often use this one as the afternoon project)
- CSS will be a major part of your career (especially since a lot of junior level positions focus on front-end development).
- When recruiters look at your portfolio, they may not have the technical knowledge to know what kind of work goes into an app. They will definitely know if it looks good or not though!

### The `position` property

The position attribute sets the position of an element on the screen. A positioned element has access to some extra properties:

1.  top/bottom/left/right
    - the behavior of these changed depending on which position value an element has.
2.  z-index
    - z-index refers to the "depth" of the document. It's like layers in Photoshop.

- Values:
  - **relative**
    - positioned in relation to its normal position on the page.
    - other content will _not_ be adjusted to fit into any gap left by the element.
  - **absolute**
    - positioned in relation to the nearest positioned ancestor
    - (or the body, if no ancestor has been positioned)
    - removes the element from the flow of the document, does not affect other elements' positioning.
  - **fixed**
    - positioned in relation to the viewport, which means it always stays in the same part of the window, even if the page is scrolled.
  - **sticky**
    - behaves like `position: relative` within its parent, until it reaches a certain point in the viewport.
  - **static**
    - the default position value.
    - not considered a positioned element

### The `overflow` property

Demonstrate the overflow property, which changes how an element handles content that is bigger than the element itself.

- Values:
  - **visible**
    - the default value
  - **hidden**
    - hides any content which goes beyond the bounds of an element
  - **scroll**
    - causes an element to receive both vertical and horizontal scrollbars
    - **scroll-y** and **scroll-x** are both ways of showing only one scrollbars
  - **auto**
    - won't show a scrollbar until the content exceeds the bounds of the element. Will only show the scrollbars it needs.

### The `display` property

Before talking about `display`, talk about inline, block, and inline-block elements.

- Inline elements (span, a tag, etc.):
  - respect left & right margins and padding, but not top & bottom
  - cannot have a width and height set
  - allow other elements to sit to their left and right.
  - see very important side notes on this here.
- Block elements (div, p tag, etc):
  - respect all of those
  - force a line break after the block element
  - acquires full-width if width not defined
- Inline-block elements (button, select):
  - allow other elements to sit to their left and right
  - respect top & bottom margins and padding
  - respect height and width

We can use the property `display` to overwrite any of these default behaviors in any element:

- Values:
  - **block**
  - **inline**
  - **inline-block**
  - **none**
    - Talk about `visibility: hidden` vs `display: none`.
    - `display: none` will cause an element to disappear completely
    - `visibility: hidden` will cause an element to still occupy space, even though it visible
  - **flex**
    - which leads into......

## Flexbox

I spend the majority of this lecture talking about flexbox, as it is probably the most frequently utilized tool as students begin learning CSS.

- Values
  - flex-direction
  - flex-wrap
  - justify-content
  - align-items
  - align-content
  - flex (grow, shrink, basis)

I use flexbox to create an american flag with the class:

1. First start with the stripes.
   - Show the students an emmett shortcut for this one: `.stripe*7`, and then `tab`.
2. Next create the blue field, with stars nested inside.
   - Show the students an emmett shortcut for this one: `.blue-field>.star*50`, then hit `tab`.
   - I only explain the idea behind making a star in CSS to the students if they are understanding things fairly well.
   - In either case, I just have them copy the CSS for the star so we don't spend a ton of time on it.

In any extra time we have, I let the class practice flexbox using some websites (in this order):

1. [flexbox defense](http://www.flexboxdefense.com/)
2. [flexbox froggy](https://flexboxfroggy.com/)
3. [flexbox zombies](https://mastery.games/p/flexbox-zombies)
