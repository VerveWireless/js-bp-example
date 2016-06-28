# babel_bp_example

Sample boilerplate for js libraries

# Setup

Installation instructions can be found in full [here](https://github.com/babel/generator-babel-boilerplate), but to simplify the process just keep reading.

###  Quick setup

Install `yo` and the default boilerplate generator

`npm i -g yo generator-babel-boilerplate`

Create the directory you wish to use for your project and cd into that directory

`mkdir <project name> | cd <project name>`

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

# Usage

Project code should be written within the `src` directory. Babel will stream files from here during the build and test process. This project is not intended to support images and css assets but if the are needed see [Loading Additional Assets](#loading_addition_assets). Here are some useful commands that can be used for different purposes.

## Development

`npm run watch`
`npm run lint`
`npm run coverage`

## Build

`npm run build`

## Testing

`npm test` - Performs headless testing
`npm run test-browser` Open `test/runner.html` for browser testing. This command works like the watch command, changes to the source files will cause the runner to reload.

# Release & Project Versioning

`TODO`




[![Travis build status](http://img.shields.io/travis/dsgn1graphics/babel_bp_example.svg?style=flat)](https://travis-ci.org/dsgn1graphics/babel_bp_example)
[![Code Climate](https://codeclimate.com/github/dsgn1graphics/babel_bp_example/badges/gpa.svg)](https://codeclimate.com/github/dsgn1graphics/babel_bp_example)
[![Test Coverage](https://codeclimate.com/github/dsgn1graphics/babel_bp_example/badges/coverage.svg)](https://codeclimate.com/github/dsgn1graphics/babel_bp_example)
[![Dependency Status](https://david-dm.org/dsgn1graphics/babel_bp_example.svg)](https://david-dm.org/dsgn1graphics/babel_bp_example)
[![devDependency Status](https://david-dm.org/dsgn1graphics/babel_bp_example/dev-status.svg)](https://david-dm.org/dsgn1graphics/babel_bp_example#info=devDependencies)
