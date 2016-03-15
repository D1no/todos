### File Convention Fork: A screen based component schema
Please look into the `imports/` directory. The relevant directory in a Meteor 1.3 app (new module-feature).

This is a fork of the official Meteor 1.3 todos-react example. It has the same functionality, but the folder & file structure has been adapted. This repo is generally more flat in its folder hierarchy illustrates a **screen based**  structure in which react components are split into
* Containers & Components that form a (part of) screen into the `imports/_screens` folder and
* Containers & Components that can be generically used (i.e. UI elements and extensions) into the `imports/#components` folder
 
The folder structure of `_screens` follows the apps router URL. So for example, all the files for the `http://localhost:3000/lists/6rHuQrCyMig7DToAw` screen are found under `imports/_screens/lists/...`

This schema allows to easily identify locations of relevant files based of a particular URL. This **facilitates debugging** but also provides a clean **separation of workspace** (minimizing merge conflicts) to other developers within a large codebase.

### File & Variable Naming Conventions
* Each react component file is
 * **U**pperCase if it exports a `Class`
 * **l**owerCase if it exports a `const` or a `function`
* A `screen` component is **prefixed** with an `_` underscore, if it is a **partial screen element** that either belongs to 
the next non-`_` upper-level screen component or is shared among various, down level screens (like a _layout variant) 
inside a `_shared/` folder
* Variables have to be declared, default exported and imported as the file name.

For example, you now easily understand the role and location of various components
```jsx
      <div className="page lists-show">
        <_Header list={list}/>
        <div className="content-scrollable list-items">
          {loading ? <message title="Loading tasks..."/> : Todos}
        </div>
      </div>
```

**Note:** This structure paradigm resulted out of a recent, large, assisted Meteor 1.3 restructure. This example illustrates the main points for discussion and further adaption. The `_` and `#` proof helpful to quickly spot relevant components in long import trees and enforce a semantic order.

-------

[![Circle CI](https://circleci.com/gh/meteor/todos.svg?style=svg)](https://circleci.com/gh/meteor/todos)

This is a Todos example app built on the principles described in the Meteor Guide. This app uses the module functionality from the upcoming Meteor 1.3, but everything else should be applicable to Meteor 1.2 as well.

This branch (`react`) implements the UI in [React](https://facebook.github.io/react/index.html). You can read more about using React in Meteor in the [Meteor guide article on the subject](http://guide.meteor.com/v1.3/react.html).

### Installing the beta

In order to run properly, please make sure you've installed the 1.3 beta.

```bash
meteor update --release 1.3-beta.16
```

### Running the app

```bash
npm install
meteor
```

### Scripts

To lint:

```bash
npm run lint
```
