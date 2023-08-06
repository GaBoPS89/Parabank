Feature: Test
    Como usario de Parabank
    Quiero ingresar al sitio web
    Para ver registrarme como usuario, consultar mis cuentas, retirar dinero y realizar tranferencias .


    Scenario: Registro Usuario Exitoso
        Given que visito el "<sitio>" Parabank
        And  doy click en Register
        When ingreso un "<firstName>","<lastName>","<street>","<city>","<state>","<zipCode>","<phoneNumber>","<ssn>","<username>" y "<password>"
        Then valido mi registro exitoso

        Examples:
            | sitio                                             | firstName | lastName | street   | city     | state    | zipCode | phoneNumber | ssn     | username | password |
            | https://parabank.parasoft.com/parabank/index.htm' | Gabriel   | Peralta  | Parabank | Parabank | Parabank | 9876    | 12345689    | para123 | user     | user123  |



    Scenario: Login Exitoso
        Given que visito el "<sitio>" Parabank
        When ingreso "<username>" y "<password>"
        Then valido mi cuentas bancarias

        Examples:
            | sitio                                             | username | password |
            | https://parabank.parasoft.com/parabank/index.htm' | user     | user123  |



    Scenario: Retiro de Dinero Exitoso
        Given que visito el "<url>" Parabank
        When ingreso a una API "withdraw" con un request tipo "post"
        And  los datos "<accountId>" y "<amount>"
        Then un estado con resultado 200

        Examples:
            | sitio                                             | accountId | amount |
            | https://parabank.parasoft.com/parabank/index.htm' | 13566     | 50.00  |



    Scenario: Traferencia Exitosa
        Given que visito el "<sitio>" Parabank
        And  doy click en Transfer Funds
        When ingreso "<monto>", "<cuentaOrigen>" y "<cuentaDestino>"
        Then valido la transferncias exitosa

        Examples:
            | sitio                                             | username | password |
            | https://parabank.parasoft.com/parabank/index.htm' | user     | user123  |