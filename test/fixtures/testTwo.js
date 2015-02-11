cases = [
    { "a": 0 },
    { "a": 1 }
];
/* jshint loopfunc:true */
for(var i=0; i<cases.length; i++) {
    (function (data) {
        PFT.tester.run("Test Two - A", function (page, assert) {
            assert.isTrue(data.a === 0 || data.a === 1, "Expected data.a to be either 0 or 1 but was: " + data.a);
            assert.done();
        });
    })(cases[i]);
}

PFT.tester.run("Test Two - B", function (page, assert) {
    setTimeout(function () {
        assert.pass();
    }, 1000);
});
