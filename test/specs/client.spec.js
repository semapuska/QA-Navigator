const loginPage = require("../pageobjects/LoginPage")
const clientPage= require("../pageobjects/ClientPage")
describe("Add client", ()=>{
    it("Success login", async ()=>{
        await loginPage.open()
        await loginPage.doLogin("Admin","Admin@Navi")
    })

    xit("Add client", async ()=> {
        await clientPage.openForm()
        await clientPage.setSurname("Birdekebekov")
        await clientPage.setName("Palanchi")
        await clientPage.setEmail("blackjackhookbak@gmail.com")
        await clientPage.setPhone("996120978122")
        await clientPage.setGender()
        await clientPage.setBirthday("01.01.2001")
        await clientPage.save()
        await browser.acceptAlert()
        await browser.pause(5000)

    })

    it("Detailed client view",async ()=>{
        await clientPage.openDetailedView()
    /*    await clientPage.editPhysicalCard(93900393);
        await clientPage.dialogSave(true);
        await clientPage.editDiscountCard(93900393)
        await clientPage.dialogSave(true)
        await clientPage.editName("NewName")
        await clientPage.editSurname("NewSurname");*/
        await clientPage.editContacts("996120978122","nlkjlkj@gmail.com")
        await clientPage.dialogSave(true)
        await clientPage.chooseJob()
        await clientPage.reviewOptions()
        await browser.pause(2000)

    })
})
