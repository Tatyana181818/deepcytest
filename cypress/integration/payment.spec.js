describe('Оплата', ()=>{
    
    it('Успешная оплата годового тарифа при использовании валидных данных', () =>{
        cy.registration_ui()
        cy.contains("Бесплатный тариф").click()
        

    })
    it('Возможность изменить имя', () =>{
        cy.login_ui(userDetails.email_profile_check, userDetails.password_profile_check)
        cy.visit('https://stage.deepskills.ru/my')
        cy.contains('Test').click()


    })

    it('Отображение на странице личного кабинета общего количества опыта, количество пройденных курсов, выполненнных упражнений, потраченных часов', ()=>{
        cy.login_ui(userDetails.email_profile_check, userDetails.password_profile_check)
        cy.visit('https://stage.deepskills.ru/my')
        
    })
    it('Отображение на странице информации (E-mail, телефон, дата регистрации, окончание подписки)', () =>{
        cy.login_ui(userDetails.email_profile_check, userDetails.password_profile_check)
        cy.visit('https://stage.deepskills.ru/my')
        cy.contains('E-mail')
        cy.contains('Телефон')
        cy.contains('Дата регистрации')
        cy.contains('Бесплатный тариф ')

    })
    it('Возможность изменить телефон', ()=>{
        cy.login_ui(userDetails.email_profile_check, userDetails.password_profile_check)
        cy.visit('https://stage.deepskills.ru/my')
        cy.contains('Телефон').click()
})
    
    
    it('Отображение начатых курсов', ()=>{
        cy.login_ui(userDetails.email_profile_check, userDetails.password_profile_check) 
        cy.visit('https://stage.deepskills.ru/my')
        cy.contains('Начатые курсы')
        cy.get('.class="vbPBSjIm"').type('Python для начинающих')

        
    })
    it('Отображение завершенных курсов', ()=>{
        cy.login_ui(userDetails.email_profile_check, userDetails.password_profile_check) 
        cy.visit('https://stage.deepskills.ru/my')
        cy.get('."jttMzOad TotCBPns"').should('Завершенные курсы')
        

    } )
    it('Возможность отменить подписку', ()=>{
        cy.login_ui(userDetails.email_profile_check, userDetails.password_profile_check) 
        cy.visit('https://stage.deepskills.ru/my')

    })
    it('Возможность переходить на другие вкладки', ()=>{
        cy.login_ui(userDetails.email_profile_check, userDetails.password_profile_check) 
        cy.visit('https://stage.deepskills.ru/my')


    })
    it('При обновлении страницы не происходит log out',()=>{
        cy.login_ui(userDetails.email_profile_check, userDetails.password_profile_check) 
        cy.visit('https://stage.deepskills.ru/my')

    })


})