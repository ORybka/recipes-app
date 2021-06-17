# Recipes App :spaghetti:

This React App was created as a part of FE JS framework development section from [Kottans frontend course](https://github.com/kottans/frontend/blob/master/README.md) using [TheMealDB](https://www.themealdb.com/api.php) API. _The main goal_ was to create an application using public API and pure Javascript and to improve it consistently while writing own framework ending up with a React App.

This application will let you search for the best recipes all over the world.
You will be able to find different recipes by dish names (and by ingredients, countries etc. in the next edition).

[Demo website](https://orybka.github.io/recipes-app/)

## :candy: Main features:

1. Search recipes by dish names
2. Get random recipe
3. Mark recipes that you like

## :star2: Additional features:

1. Tags or categories for the better search
2. Add video of how to cook the dish
3. Possibility of adding ingredients to the shopping list

## Development

`npm install` to install dependencies.

`npm start` to launch dev server, app would be served at http://localhost:1234/

`npm run lint` to lint and prettify your code

The project implements a pre-commit hook that launches staged files linting.
If your IDE reports a commit failure then run `npm run lint` and/or `npm run lint:staged`
and fix reported issues. Note that [`.eslintrc.js`](./.eslintrc.js) allows
`console.error` and `console.warn`.

`npm run build` to build production distribution package

`npm run deploy` to publish built app
