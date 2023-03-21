const loginPage = require("../pageobjects/LoginPage")
describe("Login to Navigator", () => {
    it("Success login", async () => {
       await loginPage.open()
       await loginPage.doLogin("Admin","Admin@Navi")
    })
})