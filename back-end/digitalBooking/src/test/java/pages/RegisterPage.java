package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

public class RegisterPage extends BasePage {

    public RegisterPage(WebDriver driver) {
        super(driver);
    }
    private By btnRegister = By.xpath("//button[contains(.,'Registrarte')]");
    private By inputName = By.xpath("//input[contains(@placeholder,'Ingrese su nombre')]");
    private By inputLastName = By.xpath("//input[contains(@placeholder,'Ingrese su apellido')]");
    private By inputEmailRegister = By.xpath("//input[contains(@placeholder,'Escribe tu correo')]");
    private By inputPasswordRegister = By.xpath("//input[@name='password']");
    private By inputRepeatPassword = By.xpath("//input[@name='repeatPassword']");
    private By btnRegisterSubmit = By.xpath("//button[@form='register-form']");

    private By inputEmail = By.cssSelector("[name='email']");
    private By inputPassword = By.cssSelector("[name='password']");
    private By btnEnter = By.xpath("//button[@id='btnEnter']");

    public void registerUser(String email, String password, String name, String lastName, String repeatPassword) {
        WebElement loginButton = driver.findElement(btnRegister);
        loginButton.click();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS) ;

        WebElement namee = driver.findElement(inputName);
        namee.sendKeys(name);

        WebElement lastnamee = driver.findElement(inputLastName);
        lastnamee.sendKeys(lastName);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS) ;
        WebElement emaile = driver.findElement(inputEmailRegister);
        emaile.sendKeys(email);

        WebElement passworde = driver.findElement(inputPassword);
        passworde.sendKeys(password);

        WebElement repeatPassworde = driver.findElement(inputRepeatPassword);
        repeatPassworde.sendKeys(password);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS) ;
        WebElement btnRegistere = driver.findElement(btnRegisterSubmit);
        btnRegistere.click();
    }

}
