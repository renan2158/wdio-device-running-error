import { driver } from "@wdio/globals";

class HomeScreen {
  async clickLoginButton() {
    const loginButton = driver.$(
      "//android.view.ViewGroup[ends-with(@resource-id, 'login')]"
    );

    await loginButton.click();
  }
}

export default HomeScreen;
