beforeEach(function(){
    browser.url('/Hidden-Elements/index.html');
})

describe("Test whether specific elements are visible within viewport", function () {
    it('Should resize the current viewport', function (done) {
        browser.setViewportSize({
            width: 1200,
            height: 800
        })
        browser.pause(2000);

        var WindowSize = browser.windowHandleSize();
        console.log(WindowSize.value);
    });
    
    it('Should detect if an element is visible', function (done) {
        var isVisibleWithinViewport = browser.isVisibleWithinViewport('#not-displayed');
        console.log(isVisibleWithinViewport);
        // expect(isVisibleWithinViewport).to.equal(true);

        var isVisibleWithinViewport = browser.isVisibleWithinViewport('#visibility-hidden');
        console.log(isVisibleWithinViewport);
        var isVisibleWithinViewport = browser.isVisibleWithinViewport('#zero-opacity');
        console.log(isVisibleWithinViewport);
        var isVisibleWithinViewport = browser.isVisibleWithinViewport('h1');
        console.log(isVisibleWithinViewport);

        var width = browser.getViewportSize("width");
        console.log(width);
        var height = browser.getViewportSize("height");
        console.log(height);
    });

});