const loginPage = require("../pageobjects/LoginPage")
const clientPage = require("../pageobjects/ClientPage")
describe("Add client", () => {
    it("Success login", async () => {
        await loginPage.open()
        await loginPage.doLogin("Admin", "Admin@Navi")
    })

    xit("Add client", async () => {
            await clientPage.openForm()
            await clientPage.setSurname("Syimyk")
            await clientPage.setName("Abduvaliev")
            await clientPage.setMiddleName("Abduvalievich")
            await clientPage.setEmail("syimykemailnewemail@gmail.com")
            await clientPage.setPhone("996786780103")
            await browser.pause(2000)
            await clientPage.setProfession()
            await clientPage.setGender()
            await clientPage.setBirthday("01.01.2001")
            await clientPage.save()
            await browser.pause(3000)
            await browser.acceptAlert()
            await browser.pause(5000)

    })

    xit("Edit Client", async () => {
        await browser.pause(2000)
        await clientPage.openDetailedView()
        await browser.pause(2000)
        await clientPage.editPhysicalCard(93900393);
        await browser.pause(2000)
        await clientPage.dialogSave(true);
        await browser.pause(2000)
        await clientPage.editDiscountCard(93900393)
        await browser.pause(4000)
        await clientPage.dialogSave(true)
        await clientPage.editName("NewName")
        await browser.pause(2000)
        await clientPage.editSurname("NewSurname");
        await browser.pause(2000)
        await clientPage.editPatronymic("New Father's name")
        await browser.pause(2000)
        await clientPage.editBirthday("01.01.2002")
        await browser.pause(2000)
        await clientPage.editContacts("996567894122", "newGmaIl@gmail.com")
        await browser.pause(3000)
        await clientPage.dialogSave(true)
        await browser.pause(2000)
        await clientPage.chooseJob()
        await clientPage.reviewOptions()
        await browser.pause(2000)
        await clientPage.save()
        await browser.pause(5000)
    })

    it("Export to Cv", async () => {
        await browser.pause(5000)
        await clientPage.openExportToCvForm()
        await browser.pause(2000)
        await clientPage.exportToCv()
        await browser.pause(5000)

    })


})
