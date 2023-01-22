describe("Введение в питон", ()=> {
    it('Тестирование главной страницы курса', ()=> {

        cy.visit("https://stage.deepskills.ru/courses/introduction-to-python")
        cy.get('h1').should('eq', 'Python для начинающих')
        ////cy.contains(' В курсе вы узнаете о мощных способах хранения и управления данными, а также о полезных инструментах для обработки данных, которые помогут вам самостоятельно проводить анализ.')
        
    })

    it('introduction-to-python/exercises/161', ()=> {
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/161')
    })



    it('introduction-to-python/exercises/164', ()=> {
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/162')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Интерфейс Python')
        //cy.get('[data-qa="exercise-content"]') - нужно придумать как проверить контент
        //cy.get('[data-qa="exercise-instructions"]') - нужно придумать как проверить инструкции
        //cy.get('[data-qa="exercise-hint_content"]') - нужно придумать как проверить подсказку
        
    })

    it('introduction-to-python/exercises/163', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/286')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Комментируем код')
        cy.get('')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint]').clck()
        cy.get('[data-qa="exercise-show_answer"]').click()
    })

    it('introduction-to-python/exercises/164', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/429')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Арифметические операции')

        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click()

    })

    it('introduction-to-python/exercises/165', ()=>{
       cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/893') 
       cy.get('[data-qa="exercise-title"]').should('eq', 'Переменные и типы данных')
       //нужно подумать как протестировать кномпу показатьстенограмму
       //нужно подумать как протестировать кномпу ролдолжитьобучение
    })
    
    it('introduction-to-python/exercises/166', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2732')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Присваиваем значение переменных')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click()


    })

    it('introduction-to-python/exercises/166', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2682')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Вычисления с переменными')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click()

    })

    it('introduction-to-python/exercises/167', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2683')
        

    })

    
})