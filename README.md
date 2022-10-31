# Create React App Lab

## A. Scenario

When starting to build a new React application, `Create react app` is (at the time of writing this lab) the best way to get started. It bundles an entire tool chain into some handy, preconfigured, scripts that kan be used directly from yarn or npm.

## B. What you will be working on in this lab

In this lab you'll be testing the `create-react-app` library.

## C. Lab instructions

### Create a new SPA

All you have to do to create a new SPA with react is to launch the `create-react-app` script that is available through `npm`.
Since you only have to do this once per project, there is no need to download the script - just run `npx create-react-app my-spa` and you will have a new React project called `my-spa`.

#### Exercise 1

Create a new React application from your current directory using `create-react-app`. Use `yarn` as your package manager.
Open the new project in VS Code and examine what has been created. Look into both the source files and the configuration inside `package.json`.

Run the commands `yarn start`, `yarn test`. What happens at each step?

Then take an extra moment and analyze the output of `yarn build`. What is the purpose of this script and what is the difference from how we run the application with `yarn start?`.

#### Exercise 2

Delete the application you just created and generate a new one, but use `npm` as your package manager this time.

#### Exercise 3

`create-react-app` bundles `eslint` with a very forgiving configuration. _This is clearly not good enough!_

Change the eslint config to use the our configuration:

```json
{
	"extends": ["salt", "salt/react"],
	"rules": {
		"react/jsx-closing-bracket-location": [
			"error",
			{ "selfClosing": "after-props", "nonEmpty": "after-props" }
		],
		"react/jsx-filename-extension": ["error", { "extensions": [".js"] }],
		"react/prop-types": "off"
	}
}
```

Add all the necessary plugins and make sure your editor is picking up the rules, with this command:

```bash
npm i eslint-config-salt -D
```

#### Exercise 4

Run `yarn eject` or `npm run eject` and analyze what happens.
