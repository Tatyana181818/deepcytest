describe('Регистрация', ()=> {

    it('Успешная регистрация при вводе валидных данных', ()=> {
        cy.visit("https://stage.deepskills.ru/my-way?action=sign-up")
        
        const rnd = Math.round(Math.random() * 8999) + 1000;
        const username = 'user_' + rnd;
        const email = username + '@gmail.com';

        cy.get('[data-qa="auth-name_input"]').type(username)
        cy.get('[data-qa="auth-email_input"]').type(email)
        cy.get('[data-qa="auth-phone_input"]').type('+7 000 000 00 00')
        cy.get('[data-qa="auth-next_button"]').click()
        cy.get('[data-qa="auth-password_input"]').type("Password")
        cy.get('[data-qa="auth-password_confirmation_input"]').type("Password")
        cy.get('[data-qa="auth-submit_button"]').click()
        cy.contains('Начать обучение!').click()
        cy.url().should('eq', 'https://stage.deepskills.ru/courses')
        cy.get('h1').should('have.text', 'Курсы')
    })

    it("Не успешная регистрация, используя ввод email без @", ()=> {
        cy.visit("https://stage.deepskills.ru/my-way?action=sign-up")
        
        const rnd = Math.round(Math.random() * 8999) + 1000;
        const username = 'user_' + rnd;
        const email = username + 'gmail.com';

        cy.get('[data-qa="auth-name_input"]').type(username)
        cy.get('[data-qa="auth-email_input"]').type(email)
        cy.get('[data-qa="auth-phone_input"]').type('+7 000 000 00 00')
        //добавить проверку disabled кнопки
        cy.contains('Введите настоящий email').should('be.visible') //be.visible - должен быть виден   
    })
    it('Не успешная регистрация, используя валидный логин и невалидный пароль', ()=>{ 
        cy.visit('https://stage.deepskills.ru/my-way?action=sign-up') 
 
        const rnd = Math.round(Math.random() * 8999) + 1000; 
        const username = 'user_' + rnd; 
        const email = username + '@gmail.com'; 
 
        cy.get('[data-qa="auth-name_input"]').type(username) 
        cy.get('[data-qa="auth-email_input"]').type(email) 
        cy.get('[data-qa="auth-phone_input"]').type('+7 000 000 00 00') 
        cy.get('[data-qa="auth-next_button"]').click()
        cy.get('[data-qa="auth-password_input"]').type("Passw") 
        cy.contains('Длина пароля не может быть меньше 6-и').should('be.visible') 

     }) 
 
    it('Не успешная регистрация, используя ввод пустых полей', ()=>{ 
        cy.visit('https://stage.deepskills.ru/my-way?action=sign-up')
        cy.get('[data-qa="auth-name_input"]').clear()
        cy.get('[data-qa="auth-email_input"]').clear()
        cy.get('[data-qa="auth-phone_input"]').clear()
        cy.contains('Введите имя').should('be.visible')
        cy.contains('Введите настоящий email').should('be.visible')
        cy.contains('Введите номер телефона').should('be.visible')
     }) 
 
 
})

