beforeEach(function(){
    browser.url('/Contact-Us/contactus.html');
})

describe('Test the contact us form', function(){
    beforeEach(function(){
        console.log('inside')
    })

    it('should be able to submit a successful submission via contact us form', function(done){
        browser.setValue("[name='first_name']", 'Joe');
        browser.setValue("[name='last_name']",'Smith');
        browser.setValue("[name='email']",'Joe.smith@test.com');
        browser.setValue("[name='message']",'hello world');
        browser.click("[type='submit']");
    });

    it('should not be able to submit as all fields required - message missing', function(done){
        browser.setValue("[name='first_name']", 'Joe');
        browser.setValue("[name='last_name']",'Smith');
        browser.setValue("[name='email']",'Joe.smith@test.com');
        browser.click("[type='submit']");
        browser.debug();
        //*[text()[contains(.,'Error')]]
        expect(browser.getText).to.equal(" Error: all fields are required")      
    });

    it('should not be able to submit as all fields required - first name missing', function(done){
        browser.setValue("[name='last_name']",'Smith');
        browser.setValue("[name='email']",'Joe.smith@test.com');
        browser.setValue("[name='message']",'hello world');
        browser.click("[type='submit']");
    });

    it('should not be able to submit as all fields required - last name missing', function(done){
        browser.setValue("[name='first_name']", 'Joe');
        browser.setValue("[name='email']",'Joe.smith@test.com');
        browser.setValue("[name='message']",'hello world');
        browser.click("[type='submit']");
    });
    
});
