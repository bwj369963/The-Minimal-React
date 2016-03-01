# The Minimal React
Don't be afraid to use Babel and Webpack...

## How this?

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

Run: `.\node_modules\.bin\webpack` or `node_modules\.bin\webpack.cmd` if Windows.

And place the bundled (`bundle.js`) result in your HTML.
