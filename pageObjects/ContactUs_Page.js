class ContactUs_Page {
    // ---- start of creation of page object model params----
    //Page elements
    get firstName() { return $("[name='first_name']"); }
    get lastName() { return $("[name='last_name']"); }
    get emailAddress() { return $("[name='email']"); }
    get comments() { return $("[name='message']"); }
    get submitButton() { return $("[type='submit']"); }
    get successfulSubmissionText() { return $("#contact_reply h1"); }
    get failedText() { return $("body"); }

    // functions
    setFirstName(firstName) {
        return this.firstName.setValue(firstName);
    }

    setLastName(lastName) {
        return this.lastName.setValue(lastName);
    }

    setEmailAddress(emailAddress) {
        return this.emailAddress.setValue(emailAddress);
    }

    setLMessage(message) {
        return this.message.setValue(message);
    }

    clickSubmitButton() {
        return this.submitButton.click();
    };

    //new way of dealing with this where it is nested and out of scope of the above page object
    confirmSuccessfulSubmission() {
        const validateSubmissionHeader = browser.waitUntil(() => {
            return this.successfulSubmissionText.getText() == 'Thank You for your Message!'
        }, 3000);
        expect(validateSubmissionHeader, 'Successful submission message does not exist!').to.be.true;
    };

    confirmFailingSubmission() {
        const validateSubmissionHeader = browser.waitUntil(() => {
            return this.failedText.getText() == 'Error: all fields are required'
    }, 3000);
        expect(this.failedText.getText()).to.include('Error: all fields are required');
    };

    submitAllInformationViaContactUsForm(firstName, lastName, emailAddress, comments) {
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
    };

}

module.exports = new ContactUs_Page();