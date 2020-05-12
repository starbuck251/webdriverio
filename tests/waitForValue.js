beforeEach(function () {
    browser.url('/Accordion/index.html');
})

describe('Validate text is present ', function () {
    it('verify text exists within the loading div container', function (done) {
       this.timeout(20000); //increases the timeout on the config page to 20sec
        var text = browser.waitForValue('#hidden-text', 2000); //false waits for text to be visible
        console.log(text);
       
    });
});
