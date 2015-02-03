/*global require */
"use strict";
var path = require('path');

module.exports = function (grunt) {
    grunt.registerMultiTask('pft', 'Phantom Functional Test runner', function () {
        var done = this.async(),
            options = this.options(),
            inFiles = this.filesSrc,
            outFile = this.files.map(function (f) { return f.dest; })[0], // only care about first dest file
            pftBin = path.resolve(__dirname, '..', 'node_modules', 'pft', 'bin', 'pft'),
            parallel = '',
            debug = '',
            output = '';

        var args = inFiles;
        if (options.parallel) {
            var num = options.parallel;
            if (!isNaN(num)) {
                args.unshift('--parallel=' + num);
            }
        }
        if (options.debug) {
            args.unshift('--debug');
        }
        args.unshift(pftBin);
        grunt.verbose.writeln('spawning: "node ' + args.join(' ') + '"');
        grunt.verbose.writeln('output to: ' + ((outFile && outFile !== '') ? outFile : 'console'));

        var child = grunt.util.spawn({
            cmd  : 'node',
            args : args
        }, function (errorObj, result, code) {
            if (outFile && outFile !== '' && outFile !== 'src') {
                grunt.file.write(outFile, output);
            }
            if (code > 0) {
                done(false);
            } else {
                done();
            }
        });
        child.stdout.on('data', function(buf) {
            var message = String(buf);
            output += message;
            grunt.log.write(message);
        });
    }, function(err) {
        grunt.log.error(err);
    });
};
