describe('Авторизация', () => {
    it('Успешная авторизация, используя валидный логин и пароль', ()=> {
        cy.visit("https://stage.deepskills.ru/my-way?action=sign-in")
        cy.get('[data-qa="auth-email_input"]').type("cm@ck.ru")
        cy.get('[data-qa="auth-password_input"]').type("Johny#97")
        cy.get('[data-qa="auth-submit_button"]').click()
        cy.url().should('eq', 'https://stage.deepskills.ru/courses')
        cy.get('h1').should('eq', 'Курсы')
    })
})