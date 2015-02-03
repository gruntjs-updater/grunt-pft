'use strict';

var grunt = require('grunt');

exports.pft = {
    testOutput: function(test) {
        test.expect(5);

        var actual = grunt.file.read('tmp/output');
        test.ok(actual.indexOf('TEST: Starting: \'Test One - A\'') > -1, 'expected output file not generated: ' + actual);
        test.ok(actual.indexOf('TEST: Completed: \'Test One - A\'') > -1, 'expected output file not generated: ' + actual);
        test.ok(actual.indexOf('TEST: Starting: \'Test One - B\'') > -1, 'expected output file not generated: ' + actual);
        test.ok(actual.indexOf('TEST: Completed: \'Test One - B\'') > -1, 'expected output file not generated: ' + actual);
        test.ok(actual.indexOf('TEST: Completed \'5\' tests in') > -1, 'expected output file not generated: ' + actual);

        test.done();
    },
    testNoOutput: function(test) {
        test.expect(1);

        var actual = grunt.file.exists('src');
        test.ok(!actual, 'expected no "src" file to be written but was');

        test.done();
    },
};
