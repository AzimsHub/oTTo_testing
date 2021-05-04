import { Given, When, Then } from "cucumber";
//import { expect } from 'chai';
import homePage from "../pageObjects/homePage.js";
import CookieFrame from  "../pageObjects/cookieFrame.js";

When(/^the user has accessed the Google homepage$/, () => {
    homePage.open();
    console.log(browser.getUrl());
}
)

When(/^the user accepts cookies$/, () => {
    browser.switchToFrame(0);
    expect(CookieFrame.cookieAgree.isExisting()).to.equals(true);
    CookieFrame.cookieAgree.click(); 
    browser.switchToParentFrame();
    expect(CookieFrame.cookieAgree.isExisting()).to.equals(false);
  });

Then(/^the user is taken to the Google homepage$/, () => {
    expect(homePage.logo.isDisplayed()).to.equals(true);
    expect(browser.getUrl()).to.includes("www.google.co.uk/");
    console.log(browser.getUrl());
});

Then(/^the user can see the Search bar$/, () => {
    console.log(homePage.searchBar.isDisplayed());
    browser.pause(5000);
    expect(homePage.searchBar.isDisplayed()).to.equals(true);
});

Then(/^the user can see and click the voice button on Google search bar$/, () => {
    console.log(homePage.voiceIcon.isDisplayed());
    expect(homePage.voiceIcon.isDisplayed()).to.equals(true);
    let clickable = homePage.voiceIcon.isClickable();
});

Then(/^the user can see and click the search icon button on Google search bar$/, () => {
    console.log(homePage.searchIcon.isDisplayed());
    expect(homePage.searchIcon.isDisplayed()).to.equals(true);
    let clickable2 = homePage.searchIcon.isClickable();
    console.log(clickable2);
});

Then(/^the user can click and type on the search bar$/, () => {
    //homePage.searchBar.click();
    //homePage.searchBar.setValue('Testing');
    browser.pause(3000);
    //homePage.searchBar.addValue('test');
    // browser.setValue('.input', 'test123');
});


Then(/^a check to verify all links work will occur$/, () => {
    // const expect = require('chai').expect;
    // const fetch = require('node-fetch');
    
    // describe('broken link test', function() {
    //     it('should check the page for broken links', async function () {
    //         browser.url('/status_codes/200');
    
    //         // get all the links on the page
    //         const links = $$('a');
    
    //         const urls = links.map(link => link.getAttribute('href'));
    
    //         const requests = urls.map(url => fetch(url));
    
    //         const responses = await Promise.all(requests);
    
    //         const statusCodes = responses.map(response => response.status);
    
    //         statusCodes.forEach(statusCode => {
    //             expect(statusCode).to.be.below(400);
    //         })
    //     });
    // });
});

  
  