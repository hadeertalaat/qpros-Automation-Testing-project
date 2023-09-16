package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class DemoBlazePage extends PageObject {

    String demoBlazeWebsite = "https://www.DemoBlaze.com/";
    By cartLink = By.id("cartur");
    By nameCheckOut = By.id("name");
    By countryCheckOut = By.id("country");
    By cityCheckOut = By.id("city");
    By cardCheckOut = By.id("card");
    By monthCheckOut = By.id("month");
    By yearCheckOut = By.id("year");
    By searchButton = By.id("gh-btn");
    By searchResultElements = By.xpath("//*[@id='srp-river-results']//*[@class='s-item__link' ]");
    By signUpButton = By.xpath("//*[@id='signin2']");
    By logInButton = By.xpath("//*[@id='login2']");
    By usernameButtonSignUp = By.xpath("//*[@id='sign-username']");
    By passwordButtonSignUp = By.xpath("//*[@id='sign-password']");
    By signupButtonInRegisterScreen = By.xpath("//button[@class='btn btn-primary' and text()='Sign up']");
    By usernameButtonLogin = By.xpath("//*[@id='loginusername']");
    By passwordButtonLogin = By.xpath("//*[@id='loginpassword']");
    By loginButtonInLoginScreen = By.xpath("//button[@class='btn btn-primary' and text()='Log in']");
    By categoriesButtons = By.xpath("//*[@id='itemc']");
    By categoryResultElement = By.xpath("//*[@id='tbodyid']//div[@class='col-lg-4 col-md-6 mb-4']");

    By addToCartButton = By.xpath("//*[@class='btn btn-success btn-lg' and text()='Add to cart']");
    By deleteLink = By.xpath("//*[@class='table table-bordered table-hover table-striped']//tr//td[4]//a");
    By deletedItem = By.xpath("//*[@class='table table-bordered table-hover table-striped']//tr/td");
    By placeOrderButton = By.xpath("//button[text()='Place Order']");
    By purchaseButton = By.xpath("//button[text()='Purchase']");
    By purchaseMessage = By.xpath("//*[contains(@class,'showSweetAlert visible')]//h2[text()='Thank you for your purchase!']");
    By logoutLink = By.xpath("//*[text()='Log out']");
    By priceOfTheFirstItem = By.xpath("(//*[@id='tbodyid']//div[@class='col-lg-4 col-md-6 mb-4'])[1]//h5");
    By purchaseDetails = By.xpath("//*[@class='lead text-muted ']");


    public DemoBlazePage(WebDriver driver) {
        super(driver);
    }

    public void openDemoBlazeWebsite() {
        openWebsite(demoBlazeWebsite);
    }

    public void clicksOn(String button) throws InterruptedException {
        By by = null;
        switch (button) {
            case "sign up":
                by = signUpButton;
                break;
            case "log in":
                by = logInButton;
                break;
            case "sign up in register screen":
                by = signupButtonInRegisterScreen;
                break;
            case "login in login screen":
                by = loginButtonInLoginScreen;
                break;
            case "add to cart":
                by = addToCartButton;
                break;
            case "cart":
                by = cartLink;
                break;
            case "delete":
                by = deleteLink;
                break;
            case "place order":
                by = placeOrderButton;
                break;
            case "purchase":
                by = purchaseButton;
                break;
        }
        clickOnButton(by);
        Thread.sleep(3000);
    }

    public void fillTheField(String text, String field) {
        By by = null;
        switch (field) {
            case "username in register screen":
                by = usernameButtonSignUp;
                break;
            case "password in register screen":
                by = passwordButtonSignUp;
                break;
            case "username in login screen":
                by = usernameButtonLogin;
                break;
            case "password in login screen":
                by = passwordButtonLogin;
                break;
            case "name":
                by = nameCheckOut;
                break;
            case "country":
                by = countryCheckOut;
                break;
            case "city":
                by = cityCheckOut;
                break;
            case "credit card":
                by = cardCheckOut;
                break;
            case "month":
                by = monthCheckOut;
                break;
            case "year":
                by = yearCheckOut;
                break;
        }
        sendTextToElement(text, by);
    }

    public void selectCetegory(String category) throws InterruptedException {
        Thread.sleep(2000);
        int index = -1;
        switch (category) {
            case "phones":
                return;
            case "laptops":
                index = 1;
                break;
            case "monitors":
                index = 2;
                break;
        }
        clickOnWebElement(getElementsByLocator(categoriesButtons).get(index));
    }

    public boolean isTheCategoryHasResult() throws InterruptedException {
        Thread.sleep(3000);
        return getElementsByLocator(categoryResultElement).size() > 0;
    }

    public void selectFirstItem() throws InterruptedException {
        Thread.sleep(5000);
        getElementsByLocator(categoryResultElement).get(0).click();
    }

    public boolean hasItemDeleted() {
        try {
            driver.findElement(deletedItem).isDisplayed();
            return false;
        } catch (Exception e) {
            return true;
        }
    }

    public boolean isSuccessfulMessageDisplayed() {
        return isElementDisplayed(purchaseMessage);
    }

    public void acceptTheAlert() throws InterruptedException {
        Thread.sleep(5000);
        driver.switchTo().alert().accept();
    }

    public boolean hasUserLoggedIn() throws InterruptedException {
        Thread.sleep(5000);
        return isElementDisplayed(logoutLink);
    }

    public String getTheTextOfAler() throws InterruptedException {
        Thread.sleep(5000);
        return driver.switchTo().alert().getText();
    }

    public String getPriceOfTheFirstItem() throws InterruptedException {
        Thread.sleep(5000);
        return getElementText(priceOfTheFirstItem);
    }

    public String getTheDisplayedAmount() {
        return getElementText(purchaseDetails);
    }
}
