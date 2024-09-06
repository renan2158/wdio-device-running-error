import { driver } from "@wdio/globals";

class HomeScreen {
  async clickLoginButton() {
    const botaoAbrirModalDeLogin = driver.$(
      "//android.view.ViewGroup[ends-with(@resource-id, 'action_user')]"
    );

    await botaoAbrirModalDeLogin.click();
  }
}

export default HomeScreen;