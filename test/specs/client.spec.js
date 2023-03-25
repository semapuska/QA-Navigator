const loginPage = require("../pageobjects/LoginPage")
const clientPage = require("../pageobjects/ClientPage")
describe("Add client", () => {
    it("Success login", async () => {
        await loginPage.open()
        await loginPage.doLogin("Admin", "Admin@Navi")
    })

    xit("Add client", async () => {
        await clientPage.openForm()
        await clientPage.setSurname("Rainbekov")
        await clientPage.setName("Zala")
        await clientPage.setMiddleName("Belekovich")
        await clientPage.setEmail("odysomebodysomebody@gmail.com")
        await clientPage.setPhone("996098678040")
        await browser.pause(2000)
        await clientPage.setProfession()
        await clientPage.setGender()
        await clientPage.setBirthday("01.01.2001")
        await clientPage.save()
        await browser.pause(3000)
        await browser.acceptAlert()
        await browser.pause(5000)

    })

    it("Edit Client", async () => {
        await clientPage.openDetailedView()
        await browser.pause(2000)
        await clientPage.editPhysicalCard(93900393);
        await browser.pause(2000)
        await clientPage.dialogSave(true);
        await browser.pause(2000)
        await clientPage.editDiscountCard(93900393)
        await browser.pause(2000)
        await clientPage.dialogSave(true)
        await clientPage.editName("NewName")
        await clientPage.editSurname("NewSurname");
        await clientPage.editPatronymic("New Patronymic")
        await clientPage.editBirthday("01.01.2001")
        await browser.pause(2000)
        await clientPage.editContacts("996120978122", "updated@gmail.com")
        await browser.pause(3000)
        await clientPage.dialogSave(true)
        await browser.pause(2000)
        await clientPage.chooseJob()
        await clientPage.reviewOptions()
        await browser.pause(2000)
        await clientPage.save()
        await browser.pause(5000)
    })
    xit("Drop filter", async () => {
       /* // await clientPage.chooseChildren()
        await clientPage.pressSearchFilter()
        await browser.pause(2000)
        await clientPage.chooseJobFilter()
        await browser.pause(3000)
        await clientPage.blackListFieldClick()
        await browser.pause(3000)
        await clientPage.clickOnTotalCheck()
        await browser.pause(3000)*/
    })
})
