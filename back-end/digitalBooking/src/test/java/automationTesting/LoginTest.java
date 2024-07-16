package automationTesting;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import pages.BasePage;
import pages.LoginPage;

public class LoginTest {
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
    public void testLoginUser() {
        LoginPage loginPage = new LoginPage(chromeDriver);
        loginPage.login("user@example.com", "Password1*");
        chromeDriver.quit();
    }
    @Test
    public void testLoginAdmin() {
        LoginPage loginPage = new LoginPage(chromeDriver);
        loginPage.login("admin4@ejemplo.com", "1Password");
        chromeDriver.quit();
    }

    @Test
    public void testLoginProfileOptions(){
        LoginPage loginPage = new LoginPage(chromeDriver);
        loginPage.login("admin4@ejemplo.com", "1Password");
        loginPage.loginUserProfile();
        chromeDriver.quit();
    }

    @Test
    public void testLogOut(){
        LoginPage loginPage = new LoginPage(chromeDriver);
        loginPage.login("admin4@ejemplo.com", "1Password");
        loginPage.loginUserProfile();
        loginPage.logOutUser();
        chromeDriver.quit();
    }


}