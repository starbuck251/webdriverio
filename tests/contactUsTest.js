var request = require('sync-request');

beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
})

describe('Test the contact us form', function () {
    var res = request('GET', 'https://jsonplaceholder.typicode.com/comments'); //this is an api call
    var contactUsDetails = JSON.parse(res.getBody().toString('utf8'));

    // ---- start of creation of page object model params----
    //SELECTORS
    var firstnameSelector = "[name='first_name']";
    var lastNameSelector = "[name='last_name']";
    var emailAddressSelector = "[name='email']";
    var commentsSelector = "[name='message']";
    var successfulSubmissionText = '#contact_reply h1';
    var failedText = 'body';
    var submitButton = "[type='submit']";

    //SETTING VALUES INTO EACH INPUT BOX OF CONTACT US PAGE
    function setFirstName(firstName) { return browser.setValue(firstnameSelector, firstName); }
    function setLastName(lastName) { return browser.setValue(lastNameSelector, lastName); }
    function setEmailAddress(emailAddress) { return browser.setValue(emailAddressSelector, emailAddress); }
    function setComments(comments) { return browser.setValue(commentsSelector, comments); }
    function clickSubmitButton() { return browser.click(submitButton); }

    function confirmSuccessfulSubmission() {
        var validateSubmissionHeader = browser.waitUntil(function () {
            return browser.getText(successfulSubmissionText) == 'Thank You for your Message!'
        }, 3000)
        expect(validateSubmissionHeader, 'Successful submission message does not exist!').to.be.true;
    }

    function confirmFailingSubmission() {
        var validateSubmissionHeader = browser.waitUntil(function () {
            return browser.getText(failedText) == 'Error: all fields are required'
        }, 3000)
        expect(browser.getText(failedText)).to.include('Error: all fields are required')
    }

    //  -------------- tests-------------------

    for(let i = 0; i < 5; i++){
        it('should be able to submit a successful submission via contact us form', function (done) {
            setFirstName('Joe');
            setLastName('Bloggs');
            setEmailAddress(contactUsDetails[i].email);
            setComments( contactUsDetails[i].body);
            clickSubmitButton();
            confirmSuccessfulSubmission();
        });
    };

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
