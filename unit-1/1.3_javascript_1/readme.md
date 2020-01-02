# Javascript Day 1

## Lecture Notes

The `replit-outline.js` file contains the notes/examples I type out with the class in repl.it (or similar code editor).

At the end of the lecture, the repl.it will become notes and a reference point for the students, so I make sure to pace the lecture in a way that they can keep up and type along.

### Lesson Outline

- With the new curriculum structure, we'll have students at varying levels of preparedness, the more we can involve the students, the better this will go. The more advanced students can answer questions and teach concepts through their answers, while the more remedial students can learn from them. Teach to the bottom and engage the class to make sure we're teaching at their level.
- Start this lecture by going through the JS day-1 slides.
  - This slides are pretty self-explanatory.
    - Take your time and build the foundation. The concepts covered in this first day of lecture are essential in moving forward. There are lots of practice problems in the LMS for the mini, give the students time to work on those after teaching each concept.
  - Variables
    - We can declare a variable with the `var` keyword and the variable's name.
      - `var names;`
    - You can optionally assign a variable declaration a value.
      - Assign an existing var a value using assignment operator `=`
        - `names = ['Jaylo', 'Haylo']`
      - Declare and assign
        - `var myName = 'Travis`;
      - Re-assign a value to existing variable.
  - Data types
    - I tend to dicuss JS datatypes here and not discuss them in the context of the 6 primitives vs Objects.
    - Discuss difference between null and undefined.
  - Array
    - Uses square brackets
    - List of like items
    - Each value is separated by a comma
    - Arrays can contain various data types
  - Objects
    - Unordered data structure
    - key/value pairs, each separated by comma
    - keys and values separated by colon
    - Objects can contain various data types
  - If statements
    - Conditionally run a block of code
    - Can check multiple conditions with `else if`
    - If condition/s evaluate to false, the the `else` block of code runs.
  - Functions
    - Reusable blocks of code
    - Mini-program within the program
    - Try to keep functions dynamic by passing in data using arguments and parameters.
    - Can return a value using return statement. Can return a string/array/object literal, variable, function, true/false, etc.
  - Scope
    - Global variables are accessible by all of your code.
    - Functions have their own scope.
    - Functions cannot access variables within scopes that it encloses itself, but can access variables of all parent scopes. AKA can't look down into child scopes, but can look up and see all variables up to the global scope. Cannot access sibling scopes.
  - Let
    - Can create a block-scoped local variable. The variable is scoped to the block, statement, or expression that it is declared in. For loops, if statements, while loops, etc do not get their own scope. Let can be scoped to these code constructs and not just a function scope or the global scope.
  - There are optional repl.it's that you can use to have to students work through practice problems. The links are in the slides
- Work through the mini-project with the students, `JavaScript Problems`
- The afternoon project may have to be completed at home. Sometime before you leave the classroom, you should show the students how to open their afternoon project and get the spec runner opened in their browser. Show them how to use/interact with the spec runner.
  - They can use live-server with the specrunner
  - Do they have live-server installed globally?
    - 5 minutes to set this up.
- Make sure students have access to the Q.
