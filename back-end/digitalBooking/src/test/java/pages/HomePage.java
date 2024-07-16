package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;

public class HomePage extends BasePage{
    private By btnExperience = By.xpath("//h1[contains(.,'Gastronomia')]");
    private By btnLogo = By.xpath("//img[@src='/src/imgs/NavbarLogo.png']");
    private By btnproduct = By.xpath("(//button[contains(.,'Ver detalle')])[1]");
    private By divCalendar = By.xpath("//div[contains(@id,'calendar-container')]");
    private By btnLoggedUser = By.xpath("//h3[@id='loggedUser']");
    public HomePage(WebDriver driver) {
        super(driver);
    }

    public void LogoHome() {
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
        WebElement experience = driver.findElement(btnExperience);
        scrollDown();
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
        experience.click();
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
        WebElement logo = driver.findElement(btnLogo);
        logo.click();
    }

    public void productDetail() {
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
        WebElement product = driver.findElement(btnproduct);
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView();", product);
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
        product.click();
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS) ;
        WebElement calendar = driver.findElement(divCalendar);
        //logo.click();
    }
}
