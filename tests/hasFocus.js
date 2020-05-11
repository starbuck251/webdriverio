beforeEach(function(){
    browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
})

describe("Test Radio button elements", function () {
    it('Should be able to focus on checkbox element', function (done) {
        browser.setViewportSize({
            width: 1200,
            height: 800
        })
        browser.pause(2000);
        browser.click ("#checkboxes label:nth-of-type(1) [type]");
        var checkboxButtonOne = browser.hasFocus('#checkboxes label:nth-of-type(1) [type]');
        console.log('Checkbox button has value of: '+ checkboxButtonOne);
        expect(checkboxButtonOne, 'The chcekbox 1 should have focus').to.be.true;

        var checkboxButtonTwo = browser.hasFocus('#checkboxes label:nth-of-type(3) [type]');
        console.log('checkbox butotn 2 has a value of: ' + checkboxButtonTwo);
        expect(checkboxButtonTwo, 'The checbox 2 should have focus').to.be.false;
    });    
});