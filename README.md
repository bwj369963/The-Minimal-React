# The Minimal React
Don't be afraid to use Babel and Webpack...

`npm install`
`npm run dev`
`start http://localhost:8080`

## This repository is a result of the following steps

#### Initialize NPM
`npm init`

#### Add the bad guys
`npm i --save-dev webpack babel-loader babel-preset-es2015 babel-preset-react`

#### Add the cool guys
`npm i --save react react-dom`

#### Grab a copy of a [Webpack config file](http://webpack.github.io/docs/tutorials/getting-started/#config-file)
```js
module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  }
};
```
You can change `entry.js` and `bundle.js` to whatever you want.

##### Now add the [Babel loader](https://babeljs.io/docs/setup/#webpack)
```js
module: {
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
  ]
}
```
[@see webpack.config.js](webpack.config.js)

#### Grab a copy of a [Babel config file](https://babeljs.io/docs/usage/babelrc/)
```json
{
  "presets": ["es2015", "react"]
}
```
[@see .babelrc](.babelrc)

**That's it!** Add some ES2015 and React code to your entry point file (`entry.js`).

Run: `./node_modules/.bin/webpack` or `node_modules\.bin\webpack.cmd` if Windows.

And place the bundled (`bundle.js`) result in your HTML.

## But wait!

**I don't want to type `./node_modules/.bin/webpack` every time!**

### [NPM scripts!](https://docs.npmjs.com/misc/scripts)
Just like the `test` property on the `scripts` section of [package.json](package.json).
Add a `build` property with the value `./node_modules/.bin/webpack`. Run with `npm run build`. You can alias whatever command you want.

**I don't want to run `npm run build` every time a make a change on the JavaScript!**

### [Webpack Dev Server!](https://webpack.github.io/docs/webpack-dev-server.html)

- Just install: `npm i --save-dev webpack-dev-server`
- Alias on `scripts` : `"dev": "./node_modules/.bin/webpack-dev-server"`
- Run! `npm run dev`

And be amazed by a webserver right on your local machine, running on port 8080, that auto-magically builds your project whenever you change it:
http://localhost:8080/

**Disclaimer:** Webpack dev server it meant to development purposes only. If in production, just place your `index.html` and `bundle.js` files in a production grade webserver like Apache and Ngix.
