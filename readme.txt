Install npm for package dependencies (like Maven) - look for wdio items
Install NodeJS 8.12.0 https://nodejs.org/dist/v8.12.0/ from  .msi
package.json will handle dependencies
install webdriverio -  npm install -save-dev webdriverio@4.13.2
install mocha -npm install -save-dev mocha@5.2.0 (this can be replaced by cucumberhttps://github.com/webdriverio/cucumber-boilerplate)
install java jdk - https://www.oracle.com/java/technologies/javase-jdk8-downloads.html
install selenium dependencies - npm install -save-dev selenium-standalone@6.15.3
install selenium - ./node_modules/.bin/selenium-standalone install



Resources
https://testautomationu.applitools.com/webdriverio-tutorial/

any issues- delete the node_modules folder and then run 
'npm install' 
./node_modules/.bin/selenium-standalone install
./node_modules/.bin/selenium-standalone start
./node_modules/.bin/wdio
