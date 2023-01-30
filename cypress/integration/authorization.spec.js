describe('Авторизация', () => {
    let userDetails;

    beforeEach(() => {
        cy.fixture("auth").then(user => {
        userDetails = user;
        });
    });
   
    it('Успешная авторизация, используя валидный логин и пароль', ()=> {
        cy.visit("my-way?action=sign-in")
        cy.get('[data-qa="auth-email_input"]').type(userDetails.valid_email)
        cy.get('[data-qa="auth-password_input"]').type(userDetails.valid_password)
        cy.get('[data-qa="auth-submit_button"]').click()
        cy.url().should('eq', 'https://stage.deepskills.ru/courses')
        cy.get('h1').should('have.text', 'Курсы')
    })

    it('Не успешная авторизация, используя невалидный логин и валидный пароль', ()=>{
    	cy.visit("my-way?action=sign-in")
        cy.get('[data-qa="auth-email_input"]').type(userDetails.invalid_email)
        cy.get('[data-qa="auth-password_input"]').type(userDetails.valid_password)
        cy.get('[data-qa="auth-submit_button"]').click()
        cy.contains('Пользователь с такими данными не найден').should('be.visible')
    })

    it('Не успешная авторизация, используя валидный логин и невалидный пароль', ()=>{
        cy.visit("my-way?action=sign-in")
        cy.get('[data-qa="auth-email_input"]').type(userDetails.valid_email)
        cy.get('[data-qa="auth-password_input"]').type(userDetails.invalid_password)
        cy.contains('Длина пароля не может быть меньше 6-и').should('be.visible')
     })
})


