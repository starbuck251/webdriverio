var request = require('sync-request');

beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
})

describe('Test the contact us form', function () {
    var res = request('GET', 'https://jsonplaceholder.typicode.com/comments'); //this is an api call

    var contactUsDetails = JSON.parse(res.getBody().toString('utf8'));

    // ---- start of creation of page object model params----
    var firstnameSelector = "[name='first_name']";
    var lastNameSelector = "[name='last_name']";
    var emailAddressSelector = "[name='email']";
    var commentsSelector = "[name='message']";
    var submitButton = "[type='submit']";
    var successfulSubmissionText = '#contact_reply h1';
    var failedText = 'body';

    function setFirstName(firstName) { return browser.setValue(firstnameSelector, firstName); }
    function setLastName(lastName) { return browser.setValue(lastNameSelector, lastName); }
    function setEmailAddress(emailAddress) { return browser.setValue(emailAddressSelector, emailAddress); }
    function setComments(comments) { return browser.setValue(commentsSelector, comments); }
    function clickSubmitButton() { return browser.click(submitButton); }
    function confirmSuccess() {
        var validateSubmissionHeader = browser.waitUntil(function () {
            return browser.getText(successfulSubmissionText) == 'Thank You for your Message!'
        }, 3000)
        expect(validateSubmissionHeader, 'Successful submissin message does not exist').to.be.true;
    }
    function confirmFail() {
        var validateSubmissionHeader = browser.waitUntil(function () {
            return browser.getText(failedText) == 'Error: all fields are required'
        }, 3000)
        expect(browser.getText(failedText)).to.include('Error: all fields are required')
    }

    //  -------------- tests-------------------

    for(let i = 0; i < 5; i++){
        it('should be able to submit a successful submission via contact us form', function (done) {
            // setFirstName('Joe');
            // setLastName('Bloggs');
            // setEmailAddress('Joe.smith@test.com');
            // setComments('hello world');
            // clickSubmitButton();
            // confirmSuccess();

            browser.setValue("[name='first_name']", 'Joe');
            browser.setValue("[name='last_name']", 'Smith');
            browser.setValue("[name='email']", contactUsDetails[i].email);
            browser.setValue("[name='message']", contactUsDetails[i].body);
            browser.click("[type='submit']");
            var successfulConfirmation = browser.isExisting('#contact_reply h1');
            expect(successfulConfirmation, 'Successful submiossion text does not exist').to.be.true;
            var successfulSubmission = browser.getText('#contact_reply h1');
            expect(successfulSubmission).to.equal('Thank You for your Message!');
        });
    };

    it('should not be able to submit as all fields required - message missing', function (done) {
        setFirstName('Joe');
        setLastName('Bloggs');
        setEmailAddress('Joe.smith@test.com');
        clickSubmitButton();
        confirmFail();

        // browser.setValue("[name='first_name']", 'Joe');
        // browser.setValue("[name='last_name']", 'Smith');
        // browser.setValue("[name='email']", 'Joe.smith@test.com');
        // browser.click("[type='submit']");
        // //*[text()[contains(.,'Error')]]
        // expect(browser.getText).to.equal(" Error: all fields are required")
        var successfulConfirmation = browser.isExisting('#contact_reply h1');
        expect(successfulConfirmation, 'Successful submiossion text does not exist').to.be.false;

    });

    it('should not be able to submit as all fields required - first name missing', function (done) {

        setLastName('Bloggs');
        setEmailAddress('Joe.smith@test.com');
        setComments('hello world');
        clickSubmitButton();
        confirmFail();

        // browser.setValue("[name='last_name']", 'Smith');
        // browser.setValue("[name='email']", 'Joe.smith@test.com');
        // browser.setValue("[name='message']", 'hello world');
        // browser.click("[type='submit']");
        var successfulConfirmation = browser.isExisting('#contact_reply h1');
        expect(successfulConfirmation, 'Successful submiossion text does not exist').to.be.false;
    });

    it('should not be able to submit as all fields required - last name missing', function (done) {
        setFirstName('Joe');
        setEmailAddress('Joe.smith@test.com');
        setComments('hello world');
        clickSubmitButton();
        confirmFail();

        // browser.setValue("[name='first_name']", 'Joe');
        // browser.setValue("[name='email']", 'Joe.smith@test.com');
        // browser.setValue("[name='message']", 'hello world');
        // browser.click("[type='submit']");
        var errorText = browser.getText('body');
        expect(errorText).to.include('Error');

        var errorText = browser.isVisible('body');
        expect(errorText, 'Error Message is not visible').to.be.true;
    });

});
