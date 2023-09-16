package StepDefinitions;

import Pages.DemoBlazePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import net.datafaker.Faker;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import java.util.HashMap;
import java.util.Map;


public class DemoBlazeSteps {
    WebDriver driver = null;
    private Map<String, Object> scenarioContext;

    @Before
    public void setup() {
        if (this.driver == null) {
            this.driver = BrowserConfig.getIEWebDriver();
            scenarioContext = new HashMap<>();
        }
    }

    @After
    public void cleanUp() {
        BrowserConfig.releaseResources(driver);
    }

    @Given("^user navigates to demo blaze$")
    public void navigateToDemoBlaze() {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        demoBlazePage.openDemoBlazeWebsite();
    }

    @And("^user clicks on (sign up|log in|add to cart|place order|purchase) button$")
    public void clickOnButton(String button) throws InterruptedException {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        demoBlazePage.clicksOn(button);
    }

    @And("^user can see the successful message$")
    public void isSuccessfulMessageDisplayed() {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        Assert.assertTrue(demoBlazePage.isSuccessfulMessageDisplayed());
    }

    @And("^user clicks on (cart|delete) link$")
    public void clickOnLink(String link) throws InterruptedException {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        demoBlazePage.clicksOn(link);
    }

    @And("^user clicks on sign up button in register screen$")
    public void clickOnSignUpButtonInRegisterScreen() throws InterruptedException {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        demoBlazePage.clicksOn("sign up in register screen");
    }

    @And("^user clicks on log in button in login screen$")
    public void clickOnLoginButtonInLoginScreen() throws InterruptedException {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        demoBlazePage.clicksOn("login in login screen");
    }

    @And("^user fill the (username|password) field with \"([^\"]*)\" in login screen$")
    public void fillTheField(String field, String text) {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        demoBlazePage.fillTheField(text, field + " in login screen");
    }

    @And("^user fill the (name|country|city|credit card|month|year) field with \"([^\"]*)\"$")
    public void fillTheCechOutFields(String field, String text) {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        scenarioContext.put(field, text);
        demoBlazePage.fillTheField(text, field);
    }

    @And("^user fill the data$")
    public void fillTheData() {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        Faker faker = new Faker();
        String username = faker.name().username();
        scenarioContext.put("username", username);
        demoBlazePage.fillTheField(username, "username in register screen");
        demoBlazePage.fillTheField(username, "password in register screen");
    }

    @And("^user fill the login credential$")
    public void fillTheLoginCredential() {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        String username = scenarioContext.get("username").toString();
        demoBlazePage.fillTheField(username, "username in login screen");
        demoBlazePage.fillTheField(username, "password in login screen");
    }

    @And("^user clicks on (phones|laptops|monitors) category$")
    public void clickOnCategory(String category) throws InterruptedException {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        demoBlazePage.selectCetegory(category);
    }

    @And("^user can see items for this category$")
    public void isTheSelectedCategoryHasItems() throws InterruptedException {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        Assert.assertTrue(demoBlazePage.isTheCategoryHasResult());
    }

    @And("^user select the first item$")
    public void selectFirstItem() throws InterruptedException {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        scenarioContext.put("price", demoBlazePage.getPriceOfTheFirstItem());
        demoBlazePage.selectFirstItem();
    }

    @Then("^the selected item has deleted$")
    public void hasItemDeleted() {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        Assert.assertTrue(demoBlazePage.hasItemDeleted());
    }

    @And("^user accept the successful message alert$")
    public void acceptTheAlert() throws InterruptedException {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        demoBlazePage.acceptTheAlert();
    }

    @Then("^user has logged in successfully$")
    public void hasLoggedInSuccessfully() throws InterruptedException {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        Assert.assertTrue(demoBlazePage.hasUserLoggedIn());
    }

    @Then("^The alert message is displayed with (.*)$")
    public void isAlertMessageDisplayedWith(String message) throws InterruptedException {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        Assert.assertEquals(message, demoBlazePage.getTheTextOfAler());
    }

    @And("^user can see the (amount|name|credit card) of the selected item$")
    public void isTheAmountOfTheSelectedItemDisplayed(String field) {
        DemoBlazePage demoBlazePage = new DemoBlazePage(driver);
        switch (field) {
            case "amount":
                String price = (String) scenarioContext.get("price");
                Assert.assertTrue(demoBlazePage.getTheDisplayedAmount().contains("Amount: " + price.substring(1) + " USD"));
                break;
            case "name":
                Assert.assertTrue(demoBlazePage.getTheDisplayedAmount().contains("Name: " + ((String) scenarioContext.get("name"))));
                break;
            case "credit card":
                Assert.assertTrue(demoBlazePage.getTheDisplayedAmount().contains("Card Number: " + ((String) scenarioContext.get("credit card"))));
                break;
        }
    }
}
