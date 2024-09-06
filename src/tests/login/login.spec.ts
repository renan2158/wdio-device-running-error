import HomeScreen from "../../pages/home/home-screen";

describe("Login test", () => {
  it("Login with valid credentials", async () => {
    const homeScreen: HomeScreen = new HomeScreen();
    homeScreen.clickLoginButton();
  });
});
