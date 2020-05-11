beforeEach(function(){
    browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
    browser.setViewportSize({
        width: 1200,
        height: 800
    })
    browser.pause(2000);
})

describe("Test Selected Dropdown Menus, Checkboxes & Radio buttons", function () {
    it('Dropdown item Java is selected therefore return true', function (done) {
        var isSelected = browser.isSelected("option[value='java']");
        console.log(isSelected);
        expect(isSelected).to.equal(true);
    });   
    
    it('Dropdown item maven is not selected therefore return false', function (done) {
        var isSelected = browser.isSelected("option[value='maven']");
        console.log(isSelected);
        expect(isSelected).to.equal(false);
    });    

    it('Option 2 is not selected therefore should return false', function (done) {
        var isSelected = browser.isSelected("input[value='option-2']");
        console.log(isSelected);
        expect(isSelected).to.equal(false);
    });    

    it('Option 3 is selected therefore should return true', function (done) {
        var isSelected = browser.isSelected("input[value='option-3']");
        console.log(isSelected);
        expect(isSelected).to.equal(true);
    }); 

    it('Radio button pumpkin is enabled therefore should be true', function (done) {
        var isSelected = browser.isSelected("input[value='pumpkin']");
        console.log(isSelected);
        expect(isSelected).to.equal(true);
    });    
});