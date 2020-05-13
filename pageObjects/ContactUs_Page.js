class ContactUs_Page {
    // ---- start of creation of page object model params----
    //Page elements
    get firstName() { return $("[name='first_name']"); }
    get lastName() {return $("[name='last_name']");}
    get emailAddress() {return $("[name='email']");}
    get comments() {return $("[name='message']");}
    get submitButton() {return $("[type='submit']");}
    get successfulSubmissionText() {return $("#contact_reply h1");}
    get failedText() {return $("body");}
}

// functions
clickSubmitButton() {
    return this.submitButton.click();
}

submitAllInformationViaContactUsForm(firstName, lastName, emailAddress, comments){
    if (firstName) {
        this.firstName.setValue(firstName);
    }
    if (lastName) {
        this.lastName.setValue(lastName);
    }
    if (emailAddress) {
        this.emailAddress.setValue(emailAddress);
    }
    if (comments) {
        this.comments.setValue(comments);
    }
}

confirmSuccessfulSubmission() {
    var validateSubmissionHeader = browser.waitUntil(function () {
        return this.successfulSubmissionText.getText() == 'Thank You for your Message!'
        console.log('8');
    }, 3000)
    console.log('9');
    expect(validateSubmissionHeader, 'Successful submission message does not exist!').to.be.true;
}

 confirmFailingSubmission() {
    var validateSubmissionHeader = browser.waitUntil(function () {
        return this.failedText.getText() == 'Error: all fields are required'
    }, 3000)
    expect(this.failedText.getText()).to.include('Error: all fields are required')
}


module.exports = new ContactUs_Page();