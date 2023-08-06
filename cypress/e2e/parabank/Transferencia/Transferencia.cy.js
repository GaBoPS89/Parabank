let fixture = 'parabank'

describe("Traferencia", () => {
    it.only("Traferencia Exitosa", () => {
        cy
            .fixture(fixture)
            .then(res => {
                cy
                    .sitioWeb()
                    .loginGeneral({ user: res.transferencia.user, pass: res.transferencia.pass })

                    .get('#leftPanel > ul > :nth-child(3) > a').click()

                    .wait(200)
                    .get('#amount').type(res.transferencia.monto)

                    .get('#fromAccountId').select(res.transferencia.cuentaOrigen).should('have.value', res.transferencia.cuentaOrigen)

                    .get('#toAccountId').select(res.transferencia.cuentaDestino).should('have.value', res.transferencia.cuentaDestino)

                    .get(':nth-child(4) > .button').click()

                    .get('.title').should('have.text', 'Transfer Complete!')
            })
    })
});
