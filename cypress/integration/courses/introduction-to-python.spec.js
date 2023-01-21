describe("Введение в питон", ()=> {
    it('Тестирование главной страницы курса', ()=> {

        cy.visit("https://stage.deepskills.ru/courses/introduction-to-python")
        cy.get('h1').should('eq', 'Python для начинающих')
        ////cy.contains(' В курсе вы узнаете о мощных способах хранения и управления данными, а также о полезных инструментах для обработки данных, которые помогут вам самостоятельно проводить анализ.')
        
    })

    it('introduction-to-python/exercises/161', ()=> {
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/161')
    })

    it('introduction-to-python/exercises/162', ()=> {
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/162')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Интерфейс Python')
        //cy.get('[data-qa="exercise-content"]') - нужно придумать как проверить контент
        //cy.get('[data-qa="exercise-instructions"]') - нужно придумать как проверить инструкции
        //cy.get('[data-qa="exercise-hint_content"]') - нужно придумать как проверить подсказку
        
    })

    
})