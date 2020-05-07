beforeEach(function(){
    browser.url('/Hidden-Elements/index.html');
})

describe("Test whether hidden elements exist", function () {
    it('Button dispay is set to non display so should return false', function (done) {
        var isVisible = browser.isVisible('#not-displayed');
        console.log(isVisible);
        expect(isVisible).to.equal(false);
    });

    it('Button dispay is set to visibility hidden so should return false', function (done) {
        var isVisible = browser.isVisible('#visibility-hidden');
        console.log(isVisible);
        expect(isVisible).to.equal(false);
    });

    it('Button dispay is set to zero opacity so should return false', function (done) {
        var isVisible = browser.isVisible('#zero-opacity');
        console.log(isVisible);
        expect(isVisible).to.equal(false);
    });

    it('Header text is visible and exists in html dom and will return true', function (done) {
        var isVisible = browser.isVisible('h1');
        console.log(isVisible);
        expect(isVisible).to.equal(true);
    });
});