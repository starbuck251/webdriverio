var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
})

describe('Test the contact us form', function () {
    
    //  -------------- tests-------------------
    it('should be able to submit a successful submission via contact us form', function (done) {
        ContactUs_Page.submitAllInformationViaContactUsForm('Joe', 'Bloggs', 'Joe.smith@test.com', 'message');
        ContactUs_Page.clickSubmitButton();
        ContactUs_Page.confirmSuccessfulSubmission();
    });


    it('should not be able to submit as all fields required - message missing', function (done) {
        ContactUs_Page.submitAllInformationViaContactUsForm('Joe', 'Bloggs', 'Joe.smith@test.com', null);
        ContactUs_Page.clickSubmitButton();
        ContactUs_Page.confirmFailingSubmission();
    });

    it('should not be able to submit as all fields required - first name missing', function (done) {
        ContactUs_Page.submitAllInformationViaContactUsForm(null, 'Bloggs', 'Joe.smith@test.com', 'message');
        ContactUs_Page.clickSubmitButton();
        ContactUs_Page.confirmFailingSubmission();
    });

    it('should not be able to submit as all fields required - last name missing', function (done) {
        ContactUs_Page.submitAllInformationViaContactUsForm('Joe', null, 'Joe.smith@test.com', 'message');
        ContactUs_Page.clickSubmitButton();
        ContactUs_Page.confirmFailingSubmission();
    });

});
