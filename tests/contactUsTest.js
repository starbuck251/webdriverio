var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
})

describe('Test the contact us form', function () {


    //SETTING VALUES INTO EACH INPUT BOX OF CONTACT US PAGE
    function setFirstName(firstName) {
        return ContactUs_Page.firstName.setValue(firstName);
    }
    function setLastName(lastName) {
        return ContactUs_Page.lastName.setValue(lastName);
    }
    function setEmailAddress(emailAddress) {
        return ContactUs_Page.emailAddress.setValue(emailAddress);
    }
    function setComments(comments) {
        return ContactUs_Page.comments.setValue(comments);
    }
    function clickSubmitButton() {
        return ContactUs_Page.submitButton.click();
    }

    function confirmSuccessfulSubmission() {
        var validateSubmissionHeader = browser.waitUntil(function () {
            console.log('7');
            return ContactUs_Page.successfulSubmissionText.getText == 'Thank You for your Message!'
            console.log('8');
        }, 3000)
        console.log('9');
        expect(validateSubmissionHeader, 'Successful submission message does not exist!').to.be.true;
    }

    function confirmFailingSubmission() {
        var validateSubmissionHeader = browser.waitUntil(function () {
            return ContactUs_Page.failedText.getText == 'Error: all fields are required'
        }, 3000)
        expect(ContactUs_Page.failedText.getText).to.include('Error: all fields are required')
    }

    //  -------------- tests-------------------
    it('should be able to submit a successful submission via contact us form', function (done) {
        setFirstName('Joe');
        console.log('1');
            setLastName('Bloggs');
        console.log('2');
            setEmailAddress('Joe.smith@test.com');
        console.log('3');
            setComments('message');
        console.log('4');
            clickSubmitButton();
        console.log('5');
            confirmSuccessfulSubmission();
        console.log('6');
    });


    // it('should not be able to submit as all fields required - message missing', function (done) {
    //     setFirstName('Joe');
    //     setLastName('Bloggs');
    //     setEmailAddress('Joe.smith@test.com');
    //     clickSubmitButton();
    //     confirmFailingSubmission();
    // });

    // it('should not be able to submit as all fields required - first name missing', function (done) {
    //     setLastName('Bloggs');
    //     setEmailAddress('Joe.smith@test.com');
    //     setComments('hello world');
    //     clickSubmitButton();
    //     confirmFailingSubmission();
    // });

    // it('should not be able to submit as all fields required - last name missing', function (done) {
    //     setFirstName('Joe');
    //     setEmailAddress('Joe.smith@test.com');
    //     setComments('hello world');
    //     clickSubmitButton();
    //     confirmFailingSubmission();
    // });

});
