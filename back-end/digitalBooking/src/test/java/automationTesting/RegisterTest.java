package automationTesting;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import pages.BasePage;
import pages.LoginPage;
import pages.RegisterPage;

import java.util.concurrent.TimeUnit;

public class RegisterTest {
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
    public void testRegisterUser() {
        RegisterPage registerPage = new RegisterPage(chromeDriver);
        registerPage.registerUser("test@test.com", "Password1*","NombreTest","ApellidoTest","Password1*");
        chromeDriver.quit();


    }

}
