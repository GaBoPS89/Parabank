
let fixture = 'parabank'
describe("Registro", () => {
    it.only("Registro Usuario Exitoso", () => {
        cy
            .sitioWeb()
            .get('#loginPanel > :nth-child(3) > a').click()
            .reload()
            .fixture(fixture)
            .then(res => {
                cy
                    .get('[id="customer.firstName"]').type(res.registro.firstName)
                    .get('[id="customer.lastName"]').type(res.registro.lastName)
                    .get('[id="customer.address.street"]').type(res.registro.street)
                    .get('[id="customer.address.city"]').type(res.registro.city)
                    .get('[id="customer.address.state"]').type(res.registro.state)
                    .get('[id="customer.address.zipCode"]').type(res.registro.zipCode)
                    .get('[id="customer.phoneNumber"]').type(res.registro.phoneNumber)
                    .get('[id="customer.ssn"]').type(res.registro.ssn)

                    .get('[id="customer.username"]').type(res.registro.user)
                    .get('[id="customer.password"]').type(res.registro.pass)
                    .get('[id="repeatedPassword"]').type(res.registro.pass)

                    .get('[colspan="2"] > .button').click()

                    .get('.title').should('have.text', 'Welcome ' + res.registro.user)
            })

    })
});