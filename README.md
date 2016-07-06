
[![Code Climate](https://codeclimate.com/github/VerveWireless/js-bp-example/badges/gpa.svg)](https://codeclimate.com/github/VerveWireless/js-bp-example)

# Sample boilerplate for js libraries

Example setup of [generator-babel-boilerplate](https://github.com/babel/generator-babel-boilerplate)

Pros:
- Server and browser support with Babel
- Compile time managed via Webpack
- Project structure easy to follow
- Easy github integration for third party triggers
-

## Setup

Installation instructions can be found in full [here](https://github.com/babel/generator-babel-boilerplate), but to simplify the process just keep reading.

###  Quick setup

Install `yo` and the default boilerplate generator

`npm i -g yo generator-babel-boilerplate`

Create the directory you wish to use for your project and cd into that directory

`mkdir <project name>; cd <project name>`

Build the new project and fill in the onscreen options when prompted.

`yo babel-boilerplate`

Open the `gulpfile.js` and make the following changes to `function build()`. These changes will insure that webpack doesn't compile the jQuery library with our code if it is used in your project. It also adds the `json-loader` to the stream process if your project requires loading any json data files.

```
externals: {
  jquery: 'var jQuery'
},
module: {
  noParse: [
    /\.min\.(js)$/
  ],
  loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    { test: /\.json$/, loader: 'json-loader' }
  ]
},
```

#### Config

Init new repo with `git init` and update the `.gitignore` file. The `.gitignore` at the root of this repository can be used as a starting place.

This repo is setup to complie es6 and babel by default. Configure eslint to use es6 and babel by adding the following lines to the `.eslintrc` file.

```
{
  ...,
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "plugins": [
    "babel"
  ]
}
```

Eslint rules may be different per project so I'm not including all of rules in this documentation. A complete sample set of rules are located within the `.eslintrc` file at the root of this repository. Take a look at them and copy all that may be required. This list consist of the present set of rules that are used in other js environments within the Verve software suite.

## Usage

Project code should be written within the `src` directory. Babel will stream files from here during the build and test process. This project is not intended to support images and css assets but if the are needed see [Loading Additional Assets](#loading-addition-assets). Here are some useful commands that can be used for different purposes.

### Development

`npm run watch`
`npm run lint`
`npm run coverage`

### Build

`npm run build` - Creates a dist directory if one does not exist, build .js, .min.js and source map files for each

### Testing

`npm test` - Performs headless testing
`npm run test-browser` Open `test/runner.html` for browser testing. This command works like the watch command, changes to the source files will cause the runner to reload.

## Releases & Project Versioning

`TODO`

## Loading Additional Assets

If you find yourself writing libraries that need to handle asset management, add the following changes to the `gulpfile.js` within `function build()`. This snippet uses [SASS](http://sass-lang.com/), but can be easily modified to use [LESS](http://lesscss.org/) or another precompiled scripting language.

```
resolve: {
  extensions: ['', '.js', '.json', '.css', '.scss'],
},

module: {
  ...,
  loaders: [
    ...,
    {test: /\.(scss|css)$/, loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader?outputStyle=expanded'},
    {test: /\.(png|jpg|jpeg|gif|svg|otf|eot|ttf|woff|woff2)?$/, loader: 'url-loader!limit=10000'},
  ]
}
```

Run the following command to install the necessary packages

`npm i --save-dev style-loader css-loader autoprefixer-loader sass-loader url-loader`


