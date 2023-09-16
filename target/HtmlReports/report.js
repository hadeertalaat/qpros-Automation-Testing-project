$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/EbayUserInterface.feature");
formatter.feature({
  "name": "demo blaze application services",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register and login",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to demo blaze",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.navigateToDemoBlaze()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign up button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the data",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheData()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on sign up button in register screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnSignUpButtonInRegisterScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accept the successful message alert",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.acceptTheAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the login credential",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheLoginCredential()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnLoginButtonInLoginScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user has logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.hasLoggedInSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check the listed Categories has Items",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigates to demo blaze",
  "keyword": "Given "
});
formatter.step({
  "name": "user clicks on log in button",
  "keyword": "And "
});
formatter.step({
  "name": "user fill the username field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.step({
  "name": "user fill the password field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on log in button in login screen",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on \u003ccategory\u003e category",
  "keyword": "And "
});
formatter.step({
  "name": "user can see items for this category",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "category"
      ]
    },
    {
      "cells": [
        "phones"
      ]
    },
    {
      "cells": [
        "laptops"
      ]
    },
    {
      "cells": [
        "monitors"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check the listed Categories has Items",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to demo blaze",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.navigateToDemoBlaze()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the username field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheField(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the password field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheField(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnLoginButtonInLoginScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on phones category",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnCategory(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see items for this category",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.isTheSelectedCategoryHasItems()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check the listed Categories has Items",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to demo blaze",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.navigateToDemoBlaze()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the username field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheField(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the password field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheField(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnLoginButtonInLoginScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on laptops category",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnCategory(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see items for this category",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.isTheSelectedCategoryHasItems()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Check the listed Categories has Items",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to demo blaze",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.navigateToDemoBlaze()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the username field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheField(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the password field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheField(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnLoginButtonInLoginScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on monitors category",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnCategory(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see items for this category",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.isTheSelectedCategoryHasItems()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add random item to the cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to demo blaze",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.navigateToDemoBlaze()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the username field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheField(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the password field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheField(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnLoginButtonInLoginScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the first item",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.selectFirstItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The alert message is displayed with Product added.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.isAlertMessageDisplayedWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accept the successful message alert",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.acceptTheAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on cart link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnLink(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on delete link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnLink(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Remove item from cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to demo blaze",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.navigateToDemoBlaze()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the username field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheField(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the password field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheField(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnLoginButtonInLoginScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the first item",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.selectFirstItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accept the successful message alert",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.acceptTheAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on cart link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnLink(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on delete link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnLink(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the selected item has deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.hasItemDeleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Complete successful checkout with random item",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to demo blaze",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.navigateToDemoBlaze()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the username field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheField(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the password field with \"testhadeer1\" in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheField(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on log in button in login screen",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnLoginButtonInLoginScreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select the first item",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.selectFirstItem()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accept the successful message alert",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.acceptTheAlert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on cart link",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnLink(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on place order button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the name field with \"testhadeer1\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheCechOutFields(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the country field with \"countryTest\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheCechOutFields(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the city field with \"cityTest\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheCechOutFields(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the credit card field with \"creditCardTest\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheCechOutFields(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the month field with \"monthTest\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheCechOutFields(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill the year field with \"yearTest\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.fillTheCechOutFields(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on purchase button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.clickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see the successful message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.isSuccessfulMessageDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see the amount of the selected item",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.isTheAmountOfTheSelectedItemDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see the name of the selected item",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.isTheAmountOfTheSelectedItemDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see the credit card of the selected item",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.DemoBlazeSteps.isTheAmountOfTheSelectedItemDisplayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});