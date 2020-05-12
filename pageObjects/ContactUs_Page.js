class ContactUs_Page {
    // ---- start of creation of page object model params----
    //Page elements
    get firstName() {
        return $("[name='first_name']");
    }

    get lastName() {
        return $("[name='last_name']");
    }

    get emailAddress() {
        return $("[name='email']");
    }

    get comments() {
        return $("[name='message']");
    }

    get submitButton() {
        return $("[type='submit']");
    }

    get successfulSubmissionText() {
        return $("#contact_reply h1");
    }

    get failedText() {
        return $("body");
    }

}
module.exports = new ContactUs_Page();