package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import pages.LoginPage;
import utilities.ConfigReader;
import utilities.Driver;

public class Fb_Login_Steps {

    LoginPage login = new LoginPage();

    @Given("^user is on the Facebook homepage$")
    public void user_is_on_the_Facebook_homepage() throws Throwable {
        Driver.getDriver().get(ConfigReader.getProperty("baseUrl"));
    }

    @When("^user enters email and password$")
    public void user_enters_email_and_password() throws Throwable {
        login.emailOrPhoneNumberInputField.click();
        login.emailOrPhoneNumberInputField.sendKeys(ConfigReader.getProperty("email"));
        login.passwordInputField.sendKeys(ConfigReader.getProperty("password"));
    }

    @When("^user clicks login button$")
    public void user_clicks_login_button() throws Throwable {
        login.logInButton.click();
    }

    @When("^user inputs \"([^\"]*)\" in search field and press enter$")
    public void user_inputs_in_search_field_and_press_enter(String fetchRewards) throws Throwable {
        WebElement searchField = Driver.getDriver().findElement(By.xpath("//input[@type='search']"));
        searchField.click();
        Thread.sleep(5000);
        searchField.sendKeys(fetchRewards + Keys.ENTER);
    }

    @Then("^user should see Fetch Rewards profile page$")
    public void user_should_see_Fetch_Rewards_profile_page() throws Throwable {
        Assert.assertTrue(Driver.getDriver().getPageSource().contains("Fetch Rewards"));
    }

    @When("^user goes to Fetch Rewards page$")
    public void user_presses_like_button() throws Throwable {
        WebElement element= Driver.getDriver().findElement(By.xpath("(//span[@class='b3onmgus'])[1]"));
        JavascriptExecutor js= (JavascriptExecutor)Driver.getDriver();
        js.executeScript("arguments[0].click();",element);
    }

    @When("^user clicks like button$")
    public void userGoesToFetchRewardsPage() throws InterruptedException {
        Driver.getDriver().findElement(By.xpath("//span[text()='Like']")).click();

    }

    @Then("^like button should change to liked$")
    public void like_button_should_change_to_liked() throws Throwable {
        Assert.assertTrue(Driver.getDriver().findElement(By.xpath("//span[text()='Liked']")).getText().contains("Liked"));
    }


}
