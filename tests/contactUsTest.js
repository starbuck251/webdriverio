var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
})

describe('Test the contact us form', function () {
    
    //  -------------- tests-------------------
    it('should be able to submit a successful submission via contact us form', function (done) {
        setFirstName('Joe');
        setLastName('Bloggs');
        setEmailAddress('Joe.smith@test.com');
        setComments('message');
        clickSubmitButton();
        confirmSuccessfulSubmission();
    });


    it('should not be able to submit as all fields required - message missing', function (done) {
        setFirstName('Joe');
        setLastName('Bloggs');
        setEmailAddress('Joe.smith@test.com');
        clickSubmitButton();
        confirmFailingSubmission();
    });

    it('should not be able to submit as all fields required - first name missing', function (done) {
        setLastName('Bloggs');
        setEmailAddress('Joe.smith@test.com');
        setComments('hello world');
        clickSubmitButton();
        confirmFailingSubmission();
    });

    it('should not be able to submit as all fields required - last name missing', function (done) {
        setFirstName('Joe');
        setEmailAddress('Joe.smith@test.com');
        setComments('hello world');
        clickSubmitButton();
        confirmFailingSubmission();
    });

});
