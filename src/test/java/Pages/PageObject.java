package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class PageObject {
    WebDriver driver = null;
    public PageObject(WebDriver driver) {
        this.driver = driver;
    }
    public void openWebsite(String url) {
        driver.navigate().to(url);
    }
    public boolean isElementDisplayed(By element) {
        return driver.findElement(element).isDisplayed();
    }
    public void clickOnButton(By button){
        driver.findElement(button).click();
    }
    public void clickOnWebElement(WebElement button){
        button.click();
    }
    public void sendTextToElement(String text, By element) {
        driver.findElement(element).sendKeys(text);
    }

    public String getElementText(By element) {
        return driver.findElement(element).getText();
    }

    public List<WebElement> getElementsByLocator(By by){
        return driver.findElements(by);
    }
}
