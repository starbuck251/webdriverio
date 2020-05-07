describe("verify if webdriver university links on homepage work correctly", function () {
     it("check that the contact us button opens the contact us page", function () {
        browser.setViewportSize({
            width: 1200,
            height: 800
        })
        browser.url('/');
        var title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');
        console.log('Title is: ' + title);
        
        browser.click("#contact-us");

        var tabIds = browser.getTabIds();
        console.log('TabIds: ' + tabIds);
       // browser.debug();
        browser.switchTab(tabIds[1]);
        var title2 = browser.getTitle();
        expect(title2).to.equal('WebDriver | Contact Us');
        console.log('title2 is: ' + title2)

        var url = browser.getUrl();
        expect(url).to.include('Contact-Us', 'URL Mismatch:');
        browser.close;
    }); 

     it("check that the contact us button opens the login portal page", function () {
        browser.url('/');
        var title = browser.getTitle();
        title.should.equal('WebDriverUniversity.com');
        console.log('Title is: ' + title);
        browser.click('#login-portal');

        var tabIds = browser.getTabIds();
        console.log(tabIds);
        browser.switchTab(tabIds[1]);

        var title2 = browser.getTitle();
        expect(title2).to.equal('WebDriver | Login Portal');

        var url = browser.getUrl();
        expect(url).to.include('Login-Portal1', 'URL Mismatch:');

        browser.close;
    }); 
});