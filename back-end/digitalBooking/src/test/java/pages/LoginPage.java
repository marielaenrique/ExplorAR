package pages;
import org.openqa.selenium.*;

import java.util.concurrent.TimeUnit;

public class LoginPage extends BasePage {
    private By btnLogin = By.xpath("//button[@id='btnLogin']");
    private By inputEmail = By.cssSelector("[name='email']");
    private By inputPassword = By.cssSelector("[name='password']");
    private By btnEnter = By.xpath("//button[@id='btnEnter']");
    private By btnLoggedUser = By.xpath("//h3[@id='loggedUser']");

    private By btnLogOut = By.xpath("//li[contains(.,'Cerrar sesión')]");
    public LoginPage(WebDriver driver) {
        super(driver);
    }

    public void login(String email, String password) {
        WebElement loginButton = driver.findElement(btnLogin);
        loginButton.click();

        WebElement emailField = driver.findElement(inputEmail);
        emailField.sendKeys(email);

        WebElement passwordField = driver.findElement(inputPassword);
        passwordField.sendKeys(password);

        WebElement enterButton = driver.findElement(btnEnter);
        enterButton.click();

        waitForElementClickable(btnLoggedUser);
    }

    public void loginUserProfile() {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS) ;
        WebElement loggedUser = driver.findElement(btnLoggedUser);
        waitForElementClickable(btnLoggedUser);
        loggedUser.click();
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
    }

    public void logOutUser(){
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
        WebElement logOut = driver.findElement(btnLogOut);
        logOut.click();
    }

}