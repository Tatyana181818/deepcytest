describe('Профиль', ()=>{
    it('Корректное отображение имени', () =>{
        cy.visit('https://stage.deepskills.ru/my')
        cy.get('.class="css-g1zw9s"Галина')



    } )
    it('Возможность изменить имя', () =>{
        cy.visit('https://stage.deepskills.ru/my')
        cy.get('.class="css-tfym0v" value="Анна"')

    })

    it('Отображение на странице личного кабинета общего количества опыта, количество пройденных курсов, выполненнных упражнений, потраченных часов', ()=>{
        cy.visit('https://stage.deepskills.ru/my')
        cy.get('.class="__5gjLU3_V"')
        cy.get('.class="nnwuIR8t"').type('опыта набрано')
        cy.get('.class="nnwuIR8t"').type('курсов пройдено')
        cy.get('.class="nnwuIR8t"').type('упражнений выполнено')
        cy.get('.class="nnwuIR8t"').type('Потраченных часов')
    })
    it('Отображение на странице информации (E-mail, телефон, дата регистрации, окончание подписки)', () =>{
        cy.visit('https://stage.deepskills.ru/my')
        cy.get('.class="GJyHLJUQ NJh8GC_7"')
        cy.get('')
    })

})