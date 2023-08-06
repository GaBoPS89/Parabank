
let fixture = 'parabank'
let data
describe("Testing API ", () => {

    function generalRetiro(url, data) {
        cy
            .request({
                method: 'POST',
                headers: {
                    'soapAction': "",
                    "Content-Type": "application/xml"
                },
                url: url,
                body: data
            })
            .then((response) => {
                expect(response.status).to.eq(200);
                cy.log(response.body);
            })
    }



    it("Retiro de Dinero Exitoso", () => {
        let url = 'https://parabank.parasoft.com/parabank/services/ParaBank'
        cy.fixture('parabank').then((res) => {
            data = `<?xml version="1.0" encoding="utf-8"?>
                        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                        <soap:Body>
                            <withdraw xmlns="http://service.parabank.parasoft.com/">
                                <accountId>`+ res.retiro.accountId + `</accountId>
                                <amount>`+ res.retiro.amount + `</amount>
                            </withdraw>
                        </soap:Body>
                        </soap:Envelope>`
            generalRetiro(url, data)
        })
    })


})