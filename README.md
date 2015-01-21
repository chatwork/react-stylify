# react-stylify

[js-next/react-style](https://github.com/js-next/react-style) [browserify](http://browserify.org/) plugin

## Installation

    $ npm install --save-dev git://github.com/chatwork/react-stylify.git

## Usage

### CLI

    $ browserify script.jsx -t react-stylify --outfile bundle.jsx

### package.json

      "browserify": {
        "transform": [
          "react-stylify"
        ]
      },

## Attention

Please do not use ```{ harmony: true }``` option for react.

    gulp.task('react', function () {
        var react = require('gulp-react');
        return gulp.src(['src/**/*.jsx'])
            .pipe(react({ harmony: true })) // Do not use this option.
            .pipe(gulp.dest('dist/'))
        ;
    });

Use the [6to5/6to5ify](https://github.com/6to5/6to5ify) instead.

      "browserify": {
        "transform": [
          "react-stylify",
          "6to5ify"
        ]
      },

## License

MIT

