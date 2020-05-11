beforeEach(function () {
    browser.url('/Accordion/index.html');
})

describe('verify that the correct text appears on the accordian page ', function () {
    it('verify that the correct text appear on the accordian page', function (done) {
       this.timeout(20000); //increaes the timeout on the config page

       elem = $('#hidden-text');
       console.log("Current Text " + elem.getText());
       elem.waitForText(1000)
       
       while(elem.getText() != 'LOADING COMPLETE.'){
           browser.pause(1000);
       }
       console.log(elem.getText());
    });

});
