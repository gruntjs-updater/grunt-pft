PFT.tester.run("Test One - A", function (page, assert) {
    assert.isTrue(true);
    setTimeout(function () {
        assert.pass();
    }, 1000);
});

PFT.tester.run("Test One - B", function (page, assert) {
    assert.pass();
});
