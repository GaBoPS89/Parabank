
let fixture = 'parabank'

describe("Login", () => {
    it.only("Login Exitoso", () => {
        cy
            .fixture(fixture)
            .then(res => {
                cy
                    .sitioWeb()
                    .loginGeneral({ user: res.login.user, pass: res.login.pass })
                    .get('.title').should('have.text', 'Accounts Overview')
            })
    })
});
