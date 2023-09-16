package StepDefinitions;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.time.Duration;

public class BrowserConfig {
    public static final String BASE_URL = "https://www.demoblaze.com/";

    public static WebDriver getIEWebDriver() {
        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(40));
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(40));
        driver.manage().window().maximize();
        driver.navigate().to(BASE_URL);
        return driver;
    }

    public static void releaseResources(WebDriver driver) {
        if (null != driver) {
            driver.quit();
        }
    }
}
