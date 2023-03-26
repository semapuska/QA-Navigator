const loginPage = require("../pageobjects/LoginPage")
const clientPage = require("../pageobjects/ClientPage")
describe("Add client", () => {
    it("Success login", async () => {
        await loginPage.open()
        await loginPage.doLogin("Admin", "Admin@Navi")
    })

    it("Add client", async () => {
            await clientPage.openForm()
            await clientPage.setSurname("LastOF ")
            await clientPage.setName("Test")
            await clientPage.setMiddleName("Testovich")
            await clientPage.setEmail("sysomebodysomebody@gmail.com")
            await clientPage.setPhone("996786780301")
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
        await clientPage.editPatronymic("New Patronymic")
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
    it("Save filter", async () => {
        await clientPage.pressSearchFilter()
        await browser.pause(3000)
        await clientPage.openTemplateFilterToSave()
        await browser.pause(2000)
        await clientPage.setNameFilterTemplate("Template name")
        await clientPage.saveInsertedTemplate()
        await browser.pause(5000)
    })
    it("Delete filter", async () => {
        await clientPage.moreInfoTemplate()
        await browser.pause(3000)
        await clientPage.deleteTemplate()
        await browser.pause(3000)
        await clientPage.pressYesToDelete();
        await browser.pause(4000)


    })

})
