$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Fb_Login_Process.feature");
formatter.feature({
  "line": 2,
  "name": "LoginProcess",
  "description": "",
  "id": "loginprocess",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 193889,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Login with email",
  "description": "",
  "id": "loginprocess;login-with-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on the Facebook homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters email and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user should be on profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user inputs \"Fetch Rewards\" in search field and press enter",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user should see Fetch Rewards profile page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user goes to Fetch Rewards page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user clicks like button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "like button should change to liked",
  "keyword": "Then "
});
formatter.match({
  "location": "Fb_Login_Steps.user_is_on_the_Facebook_homepage()"
});
formatter.result({
  "duration": 13296910956,
  "status": "passed"
});
formatter.match({
  "location": "Fb_Login_Steps.user_enters_email_and_password()"
});
formatter.result({
  "duration": 896308555,
  "status": "passed"
});
formatter.match({
  "location": "Fb_Login_Steps.user_clicks_login_button()"
});
formatter.result({
  "duration": 166427644,
  "status": "passed"
});
formatter.match({
  "location": "Fb_Login_Steps.user_should_be_on_profile_page()"
});
formatter.result({
  "duration": 74053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fetch Rewards",
      "offset": 13
    }
  ],
  "location": "Fb_Login_Steps.user_inputs_in_search_field_and_press_enter(String)"
});
formatter.result({
  "duration": 6713385651,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput dir\u003d\"ltr\" aria-autocomplete\u003d\"list\" aria-expanded\u003d\"false\" aria-label\u003d\"\" role\u003d\"combobox\" placeholder\u003d\"Search Facebook\" autocomplete\u003d\"off\" spellcheck\u003d\"false\" class\u003d\"oajrlxb2 rq0escxv f1sip0of hidtqoto lzcic4wl hzawbc8m ijkhr0an nlq1og4t sgqwj88q b3i9ofy5 oo9gr5id b1f16np4 hdh3q7d8 dwo3fsh8 qu0x051f esr5mh6w e9989ue4 r7d6kgcz br7hx15l h2jyy9rg n3ddgdk9 owxd89k7 ihxqhq3m jq4qci2q k4urcfbm iu8raji3 qypqp5cg l60d2q6s hv4rvrfc hwnh5xvq dati1w0a o1lsuvei o6r2urh6 rmlgq0sb aj8hi1zk r4fl40cc kd8v7px7 m07ooulj mzan44vs\" type\u003d\"search\" value\u003d\"\"\u003e is not clickable at point (184, 28). Other element would receive the click: \u003cdiv class\u003d\"iqfcb0g7 tojvnm2t a6sixzi8 k5wvi7nf q3lfd5jv pk4s997a bipmatt0 cebpdrjk qowsmv63 owwhemhu dp1hu0rb dhp61c6y l9j0dhe7 iyyx5f41 a8s20v7p\" tabindex\u003d\"-1\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d87.0.4280.67)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027iulia-dragomirs-iMac.local\u0027, ip: \u002710.0.0.8\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.67, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: /var/folders/c1/7j2v2w_555v...}, goog:chromeOptions: {debuggerAddress: localhost:54474}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ed4907486f8ba9e7c9ac4eb5ba5a0f1b\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat steps.Fb_Login_Steps.user_inputs_in_search_field_and_press_enter(Fb_Login_Steps.java:44)\n\tat ✽.When user inputs \"Fetch Rewards\" in search field and press enter(features/Fb_Login_Process.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "Fb_Login_Steps.user_should_see_Fetch_Rewards_profile_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Fb_Login_Steps.user_presses_like_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Fb_Login_Steps.userGoesToFetchRewardsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Fb_Login_Steps.like_button_should_change_to_liked()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 985232595,
  "status": "passed"
});
});