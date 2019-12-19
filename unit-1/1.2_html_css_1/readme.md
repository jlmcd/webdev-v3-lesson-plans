# HTML/CSS Day 1

## Lecture Notes

* <a href='https://slides.com/jonmcd/deck-13#/'>Here</a> is the slide presentation used for this lecture.

## Project Flow
1. Review some basic terminal commands while you set up the project.
    * `cd` into the correct folder (`~/devmtn/unit1/`)
    * `mkdir` a folder for the project (named `html-css-1`)
    * `cd` into the `html-css-1` folder you just created
    * `touch` a new file called `index.html`
    * `code .` to open the `html-css-1` project folder in Visual Studio Code.
2. Create the basic skeleton of an html document:
    * Do _NOT_ show the class the `!` shortcut!
    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <!-- Here we put information about the web page -->
        </head>
        <body>
            <!-- Here we put the visual elements of the page -->
        </body>
    </html>
    ```
3. What goes in the `<head>`?
    * Create a `<title>` tag nested in the `<head>`.
        * This tag describes the title which will appear in the browser's tab.
    * Create a `<meta charset="UTF-8" />` tag in the `<head>`.
        * Meta tags contain information about our website. They tell the browser how to interact with our code, and are used in SEO.
        * This is an example of a _self-closing_ tag. Most html tags contain opening and closing tags, but there are a handful of tags which don't follow this pattern. I will explain these exceptions as we come across them.
    * There are tons of `<meta>` tags which we won't cover, but the `charset` describes how text is encoded. `UTF-8` is the most popular character encoding method as it includes modern features such as emoji.
4. Let's move on to the `<body>`. 
    * First draw out a quick wireframe of what we will be building. Make it simple and easy to understand. I emulate a blog with a header and nav, footer, and a couple blog posts.
    * We will be using _semantic_ html tags which describe what their purpose is.
    * Also have the class install the `Live Server` extension by Ritwick Dey so they can hot reload the page as they save changes to the code.
    * Compare the HTML to a person's skeleton. It is what gives structure to the whole website. A well-organized and carefully planned HTML skeleton will make later tasks (i.e. styling and functionality) so much easier.
    1. First the `<header>`:
        ```html
        <header>
            <h1>
                A website about pianos
            </h1>
        </header>
        ```
        * **NOTE:** _Heading_ tags range in size and heirarchy from `h1` (most important) to `h6` (least important). Each page should have no more than one `h1` tag, and the heading tags should be used to organize the website in a logical heirarchy.
    2. We will also have a sidebar with navigation links:
        ```html
        <aside>
            <nav>
                <ul>
                    <li><a href="https://steinway.com">Steinway Pianos</a></li>
                    <li><a href="https://yamaha.com">Yamaha Pianos</a></li>
                </ul>
            </nav>
        </aside>
        ```
        * `<aside>` is a semantic html tag used for something placed on the side.
        * `<nav>` is a semantic html tag used to create some sort of navigation bar
        * `<ul>` creates an "unordered list" with bullet points 
        * `<ol>` is similar to `ul` in that it creates an "ordered list" with numbered items.
        * Both `ul` and `ol` elements contain `<li>` elements for each item in the list.
        * `<a>` is an "anchor" tag. It is used to create hyperlinks from one page to another.
            * The `<a>` tag requires an _attribute_ called `href`. This stands for "hypertext reference" which has a value equal to the url you want to move to.
    3. For our blog posts, we will use `<article>` tags. They might each have headings and subheadings in addition to paragraphs of text. Ask which tags the class might use for each.
        ```html
        <article>
            <h2>The Steinway</h2>
            <h3>King of Pianos</h3>
            <p>Steinway pianos are the instrument of choice for musicians around the world.</p>
            <p>Steinways are used in something like 90% of concert halls worldwide.</p>
            <p>All Steinway pianos are handmade in either Hamburg, Germany or New York City.</p>
        </article>

        <article>
            <h2>The Yamaha</h2>
            <h3>Affordable Pianos for Everyone</h3>
            <p>Yamaha pianos are <span>everywhere</span>. They are beautiful, affordable instruments.</p>
        </article>
        ```
    4. Last, we will add a `<footer>`.
        ```html
        <footer>
            <p>© Jonathan McDonald</p>
        </footer>
        ```
5. We're done! Let's admire the beautiful website we've created. She's just stunning, isn't she? It looks like it's straight out of geocities.
    * Obviously we need to do something extra to make this look pretty.
    * Enter `CSS`.
    * CSS is like the skin and clothes wrapping a person's skeleton - it's what makes things look good.
    1. Create opening and closing `<style>` tags in the `<head>` of the html document.
    2. We can write any CSS we want inside the `<style>` element.
        ```css
        article {
            background-color: blue;
        }

        h1 {
            background-color: yellow;
        }
        ```
        * The part on the left (before the curly braces) is called a **CSS Selector**
        * In between the curly braces we can put any **styles** we want, in property/value pairs.
            * There are so many CSS Styles that we cannot possibly cover them all during your time at DevMountain. But these principles will help you learn on your own and self study. _Expect to do a lot of googling while you are working with CSS and styling._
        * If we have a lot of styles in our HTML document, it will become very messy very quickly. 
    3. **Separation of Concerns** - To create better organization and make our code more readable, we will move our styles to a separate file.
    4. In the VS Code terminal (shortcut is `` ctrl + ` `` for both Mac and Windows), create a new file called `style.css`.
        * We will need to link the css file to our html file with the `<link />` self-closing tag.
        * `<link />` will need 2 _attributes_. 
            1. `rel` describes what kind of file we're using, in this case `rel="stylesheet"`
            2. `href` stands for hypertext reference. It's the relative path to the style.css file. In this case `href="./style.css"`.
        * The final link tag will look like this: `<link rel="stylesheet" href="./style.css />`.
    5. Style the header, explaining line-by-line what each style does to the box model:
        ```css
        header {
            border-width: 2px;
            border-color: black;
            border-style: solid;

            /* border can also be done in one line, like this: */
            border: 2px solid black;

            margin-top: 16px;
            margin-bottom: 16px;

            /* pixels are great, but "rem" is amazing for scalability and consistency. */
            /* "rem" refers to the default (root) font size in the browser. */
            /* In Chrome, this default is 16px. */
            /* "em" is similar to "rem", but refers to the closest ancestor's font size */
            margin-left: 1rem;
            margin-right: 1rem;

            /* You can also center the header horizontally using margin. */
            /* Try setting margin-left and margin-right to "auto" */

            /* combine these with one style in clockwise order, beginning at the top */
            margin: 1rem auto 1rem auto;

            /* or further pare it down with top/bottom, and left/right values */
            margin: 1rem auto;

            /* You can also use partial rem units, which is what we've done with padding: */
            padding: 1.5rem;
            /* Just like margin and border, you can specify 
            padding-left, padding-right, padding-top, and padding-bottom */
        }
        ```
    6. Our header is now centered, but nothing else is. Let's fix that by adding styles to the body of the html document:
        ```css
        body {
            width: 900px;
            margin: 0 auto;
        }
        ```
        * _NOTE:_ I try to place css selectors in roughly the same order they appear in html. That means our `body` selector will be placed _above_ our `header` selector.
    7. Let's move on to the article itself:
        ```css
        article {
            background-color: #dfdfef;
            height: 250px;
            padding: 1rem;
            margin-bottom: 1rem;
            width: 80%;
        }
        ```
        * the `background-color` property is for a _background_.
        * the `color` property is for _text_.
    8. Now let's talk about all of the styles that we _didn't_ supply.
        * The heading tags (h1-h6) are different font sizes.
        * The heading tags also have margin already.
        * Article tags have margins as well.
    9. You might think "hey, it's kind of nice that I don't have to do as much work with the styles!", but you're WRONG! 
        * These default styles become a headache when you are styling a website because you aren't always aware of the defaults. 
        * In addition, different browsers have slightly different defaults, which means your website will look inconsistent from Chrome to Safari to Firefox.
        * The solution? **reset.css**.
    10. Have the class google _"reset css"_ and copy someone's premade reset.css file into a new file in our project called `reset.css`.
        * _NOTE:_ Do NOT give them this reset.css file yourself. It's important that the class be as self-sufficient as possible so they need to know how to find their own reset.css.
        * Remember to add another `<link />` tag in the head of the html document.
        * Initially place the `<link />` tag for reset.css _below_ the `<link />` tag to show that it breaks the styles we have created.
        * CSS _cascades_ down, meaning it reads from top to bottom. Whatever style is read last will overwrite styles written above it.
        * Place the reset.css `<link />` tag _above_ the style.css to show that while things have changed (margins, font-sizes, etc.), it hasn't totally messed everything up.
    11. One of the nice things about a `reset.css` file is that it makes it very evident if something hasn't been manually styled yet. Let's fix that with our heading tags:
        ```css
        h1 {
            font-size: 3rem;
            font-weight: 700; /* 700 is "bold". */
            font-family: 'Permanent Marker', cursive;
            text-align: center;
        }
        h2 {
            font-size: 2rem;
            font-weight: bold; /* instead of saying "700", we can just say "bold" */
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        h3 {
            font-size: 1.4rem;
            font-weight: 400; /* 400 is the default, normal font-weight */
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
                Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            margin-bottom: 1rem;
        }
        ```
    12. The navigation has some abnormalities right now - I don't like the bullet points in there, so let's get rid of them:
        ```css
        nav {
            text-align: right;
        }
        ul {
            list-style: none;
        }
        ```
5. Images
    1. To create an image, we use a self-closing `<img />` tag. Let's add one to one of our articles.
        * Inside the article about Steinways, add `<img src="some url" />` adding the url to a picture.
        * The `img` tag is self closing
        * The `img` tag has one _attribute_, a `src` which points to the location of our image.
    2. Notice that the image is huge! It it totally messing up our layout. We will fix that with CSS.
    3. In our `style.css` file, add `width` and `height` properties. Notice that if you aren't careful it will stretch or compress your image. The solution is giving a value of `auto` on only one of the properties, like this:
        ```css
        img {
            height: 65%;
            width: auto;
        }
        ```
        * _NOTE:_ Percentage units describe how much of the parent's space to occupy. For height it only works when a parent has a defined height.
6. Float and Clear
    * I want our image to occupy the space on the left of the article, and the paragraphs of text to occupy the right side of the article. Enter the **float**.
    * In our styles for the `img` selector, add a `float: left` property/value pair.
    * Let's also add a `margin-right: 1rem` so the paragraphs aren't butted right up against the image.
    * Now our article looks great! Let's do the same thing with our `<aside>` element which we want on the right side of our page:
    ```css
    aside {
        float: right;
    }
    ```
    * What happened? Elements which have been "floated" do not occupy any vertical space. That means our `<article>` elements are going to occupy the same space as our aside! We can fix that by adding:
    ```css
    article {
        float: left;
        width: 80%;
    }
    ```
    * But this causes another problem altogether! Now our footer doesn't notice any of the vertical space from our articles OR our aside. It's been pushed up to the top of the screen wherever it can find some space.
    * To force an element to respect the space of other "floated" elements, we add the `clear` property:
    ```css 
    footer {
        clear: both;
    }
    ```
    * The `clear` property can accept either `right`, `left` or `both`. and depending on what you specify, it will only respect the space of elements floated on one side or both.