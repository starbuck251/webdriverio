beforeEach(function () {
    browser.url('/Accordion/index.html');
})

describe('Validate that the loading functionality works correctly ', function () {
    it('verify relevant text LOADING COMPLETE appears after a period of time', function (done) {
       this.timeout(20000); //increaes the timeout on the config page

       browser.waitUntil(function(){
            return browser.getText('#hidden-text') === 'LOADING COMPLETE.';
       }, 12000, 'expected text to be different!');
       console.log(browser.getText('#hidden-text'));
    });
});
