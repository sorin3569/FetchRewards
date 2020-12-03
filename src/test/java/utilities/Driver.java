package utilities;

import org.openqa.selenium.WebDriver;

public class Driver {
    private Driver(){

    }
    private static WebDriver driver;


    /**
     * getDriver method will initialize the WebDriver by using singleton design pattern
     * will return driver
     * @return
     */
    public static WebDriver getDriver(){
        if(driver==null){
            switch (ConfigReader.getProperty("browser").toLowerCase()){
                case "firefox":
                    driver= FireFoxWebDriver.loadFirefoxDriver(Boolean.parseBoolean(ConfigReader.getProperty("headless")));
                    break;
                case "chrome":
                default:
                    driver = ChromeWebDriver.loadChromeDriver((Boolean.parseBoolean(ConfigReader.getProperty("headless"))));
                    break;
            }
        }
        return driver;
    }

    /**
     * closeDriver method will close the driver
     * @param
     */
    public static void closeDriver() {
        if (driver == null) return;
        try {
            driver.close();
            driver.quit();
            driver = null;
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
