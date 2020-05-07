beforeEach(function(){
    browser.url('/Hidden-Elements/index.html');
})

describe("Test whether hidden elements exist", function () {
    it('Button dispay is set to non display but still exists in html dom and will return true', function (done) {
        var isEnabled = browser.isExisting('#not-displayed');
        console.log(isEnabled);
        expect(isEnabled).to.equal(true);
    });

    it('Button dispay is set to visibility hidden but still exists in html dom and will return true', function (done) {
        var isEnabled = browser.isExisting('#visibility-hidden');
        console.log(isEnabled);
        expect(isEnabled).to.equal(true);
    });

    it('Button dispay is set to zero opacity but still exists in html dom and will return true', function (done) {
        var isEnabled = browser.isExisting('#zero-opacity');
        console.log(isEnabled);
        expect(isEnabled).to.equal(true);
    });

    it('HEader text is visible and exists in html dom and will return true', function (done) {
        var isEnabled = browser.isExisting('h1');
        console.log(isEnabled);
        expect(isEnabled).to.equal(true);
    });

    it('there is no such element with this id within the html dom should will return false', function (done) {
        var isEnabled = browser.isExisting('#no-such-element');
        console.log(isEnabled);
        expect(isEnabled).to.equal(false);
    });
});