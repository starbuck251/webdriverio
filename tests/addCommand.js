var request = require('sync-request');

browser.addCommand("submitDataViaContactUsForm", function (firstName, lastName, emailAddress, comments){
    if(firstName){
        browser.setValue("[name='first_name']", firstName);
    }
    if(lastName){
        browser.setValue("[name='last_name']", lastName);
    }
    if(emailAddress){
        browser.setValue("[name='email']", emailAddress);
    }
    if(comments){
        browser.setValue("[name='message']", comments);
    }
    browser.click("[type='submit']");
})

beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
})

describe('Test the contact us form', function () {
    var res = request('GET', 'https://jsonplaceholder.typicode.com/comments'); //this is an api call
    var contactUsDetails = JSON.parse(res.getBody().toString('utf8'));


    //  -------------- tests-------------------

    for(let i = 0; i < 5; i++){
        it('should be able to submit a successful submission via contact us form', function (done) {
            //use the add command
            browser.submitDataViaContactUsForm('joe', 'Bloggs', contactUsDetails[i].email, contactUsDetails[i].body)
        
            var successfulConfirmation = browser.isExisting('#contact_reply h1');
            expect(successfulConfirmation, 'Successful submiossion text does not exist').to.be.true;
            var successfulSubmission = browser.getText('#contact_reply h1');
            expect(successfulSubmission).to.equal('Thank You for your Message!');
        });
    };

    it('should not be able to submit as all fields required - message missing', function (done) { 
        browser.submitDataViaContactUsForm('Maggie', 'Smith', 'Joe.smith@test.com', null);
       
        var successfulConfirmation = browser.isExisting('#contact_reply h1');
        expect(successfulConfirmation, 'Successful submiossion text does not exist').to.be.false;

    });

    it('should not be able to submit as all fields required - first name missing', function (done) {
        browser.submitDataViaContactUsForm(null, 'Smith', 'Joe.smith@test.com', 'hello world');
       
        var successfulConfirmation = browser.isExisting('#contact_reply h1');
        expect(successfulConfirmation, 'Successful submiossion text does not exist').to.be.false;
    });

    it('should not be able to submit as all fields required - last name missing', function (done) {
        browser.submitDataViaContactUsForm('Joe', null, 'Joe.smith@test.com', 'hello world');
        
        var errorText = browser.getText('body');
        expect(errorText).to.include('Error');

        var errorText = browser.isVisible('body');
        expect(errorText, 'Error Message is not visible').to.be.true;
    });

});
