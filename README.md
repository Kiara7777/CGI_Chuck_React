# Domání úloha pro společnost CGI

Stránky společnosti [CGI](https://www.cgi.com/ceska-republika/cs)

## Zadání

Získat ze [API serveru](https://api.chucknorris.io/) požadovaná data (vtipy Chucka Norrise) a zobrazit je.

## Uživatelské požadavky
- Zobrazovat po příchodu na stránku pouze jeden vtip Chucka Norrise
- Nově získaný vtip přepisuje předcházející
- Dle zadaného řetězce vyhledat náhodný vtip Chucka Norrise, který tento řetězec obsahuje
- Informovat uživatele pokud takový vtip neexistuje
- Získat a zobrazit náhodný vtip dle zvolené kategorie (kategorie lze získat z API serveru)
- Zobrazovat v jaké kategorii se vtip nachází

## Technické požadavky
- K řešení využit React, Redux a MaterialUI knihovny, (další knihovny dle vlastního uvážení)
- Předvést schopnost otestovat zvolenou část kódu/funkcionality
- Použít funkční komponenty a a použití ES6 syntaxe
- Bundler: Webpack
- Packet manager: Yarn

## Použité knihovny
- Redux, Redux-Saga, axios, MaterialUI
- K testování: React testing library, Jest, Redux saga test plan

## Převzaté zdroje
Obrázky z public/images jsou převzaty z [API serveru](https://api.chucknorris.io/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
