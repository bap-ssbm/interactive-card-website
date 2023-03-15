Front-end mentor challenge interactive card-details form website created with react JS

site url=>> http://bap-ssbm.github.io/interactive-card-details-form-reactjs

What I learned from this project:

1. How do deploy react projects to github pages.
2. styles -> how to style inputs, placeholders, focus effects. When to use absolute positioning vs transform for placement of objects
3. js functions-> replace() with string manipulation scripts .replace(/(.{4})/g, "$1 "); such as this and test() function with strings as well (/[A-Za-z]/.test(item) like so.

This was on the front a simple website, but to build it took alot of effort. and refreshers on how to build reactJS websites. I felt like I learned alot. And there was alot of process of elimination. I had find a solution to one thing, for example. Replacing the card example names, dates etc with the inputs. And to do that i used the useState hook to create and object that has all those variables. But making it just an object that simply, made it pretty much impossible to add the other functionalities such as checking if each individual input's state in regards to if they are empty, or if they had letters when they werent supposed to. And also keeping track of those states to use for later. For when the user submits the form and make sure all the inputs are fine.

There could be a simpler way of doing all this. Since instead of using objects as state hooks i created one for each indivudual input. 
