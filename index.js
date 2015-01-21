var reactStyleSyntax = require('react-style-syntax'),
    through2 = require('through2');

function reactStylify(options) {

    options = options || {};
    var filter = options.filter;

    return function(file, opts) {
        if (filter && !filter.test(file)) return through2();
        return through2({objectMode: true}, function(chunk, encoding, callback) {
            return callback(null, reactStyleSyntax.transformString(chunk.toString()));
        });
    }
}

exports = module.exports = reactStylify();
exports.configure = reactStylify;