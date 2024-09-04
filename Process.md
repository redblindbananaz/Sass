<!---
You are required to submit a supporting document, which may take the form of a blog or a ‘how- to’.
The supporting document should include your decision-making and specify the problems, and their solutions, that have been encountered while completing this assessment. Highlight important aspects of the project by using screenshots and annotations.
--->

# Process Documentation:

## Basic Folder Structure and Setup:

---

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

---

## Basic Styling with mixins, partials and variables:

---

> _"Sass keeps the CSS code DRY (Don't Repeat Yourself). One way to write DRY code is to keep related code in separate files."_

## Responsiveness and Breakpoints:

---

## Animation and advanced styling:

---
