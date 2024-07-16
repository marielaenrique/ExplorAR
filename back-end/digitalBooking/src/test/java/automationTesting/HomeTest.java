package automationTesting;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import pages.LoginPage;
import pages.HomePage;

import java.util.concurrent.TimeUnit;

public class HomeTest {
    WebDriver chromeDriver;
    String PATH_DRIVER_CHROME="./src/test/resources/drivers/chromedriver.exe";
    String TYPE_DRIVER_CHROME="webdriver.chrome.driver";
    @Before
    public void abrirDriver() {
        System.setProperty(TYPE_DRIVER_CHROME, PATH_DRIVER_CHROME);
        ChromeOptions options = new ChromeOptions();
        options.addArguments("remote-allow-origins=*");
        chromeDriver = new ChromeDriver(options);
        chromeDriver.manage().window().maximize();
        chromeDriver.get("http://127.0.0.1:5173/home");
    }

    @Test
    public void LogoHome() {
        HomePage homePage = new HomePage(chromeDriver);
        homePage.LogoHome();
    }

    @Test
    public void productDetail() {
        HomePage homePage = new HomePage(chromeDriver);
        homePage.productDetail();
    }
}
