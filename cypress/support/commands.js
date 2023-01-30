// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('normal_exercise_check', (exercise_title) => {
    cy.get('[data-qa="exercise-title"]').should('eq', exercise_title)
    //cy.get('[@data-qa="exercise-content"]').should('eq', exercise_content)
    //cy.get('[data-qa="exercise-instructions"]').should('eq', exercise_instructions)
    cy.get('[@data-qa="exercise-use_hint"]').click()
    //cy.get('[@data-qa="exercise-use_hint"]').should('eq', exercise_hint)
    cy.get('[data-qa="exercise-show_answer"]').click()
    cy.get('[@data-qa="exercise-python-compile"]').click()
    cy.get('[@data-qa="exercise-answer"]').click()
    cy.contains('Отлично! Вы выполнили задание!').should('be.visible')
})


Cypress.Commands.add('courses_api_check', (course_slug) => {
    cy.fixture('introduction-to-python').then((json) => {
        cy.request('api/v1/courses/' + course_slug).as('course')
        cy.get('@course').then((response) => {
            expect(response.body).deep.eq(json)
      })
          })
      })



Cypress.Commands.add("login_api", () => {
  cy.request({
    method: 'POST',
    url: 'https://stage.deepskills.ru/auth/sign_in',
    headers: {
      'access-token': 'S_k8v3afQoj7Vhqr9a84hw',  
      'client': 'WJs14KyqS4oPrXTtz-yWdg',       
      'expiry': '1675802276',
      'uid': 'cm@ck.ru'
    },
    body: {       
        "email":"cm@ck.ru",
        "password":"Johny#97"
    }
  })

})
 
    
Cypress.Commands.add('login_ui', (username, password) => {
    cy.session([username, password], () => {
        cy.visit("my-way?action=sign-in")
        cy.get('[data-qa="auth-email_input"]').type(username)
        cy.get('[data-qa="auth-password_input"]').type(password)
        cy.get('[data-qa="auth-submit_button"]').click()
        cy.url().should('eq', 'https://stage.deepskills.ru/courses')
        cy.get('h1').should('have.text', 'Курсы')
    })
  })
      

  


