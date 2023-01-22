describe("Введение в питон", ()=> {
    it('Тестирование главной страницы курса', ()=> {

        cy.visit("https://stage.deepskills.ru/courses/introduction-to-python")
        cy.get('h1').should('eq', 'Python для начинающих')
        ////cy.contains(' В курсе вы узнаете о мощных способах хранения и управления данными, а также о полезных инструментах для обработки данных, которые помогут вам самостоятельно проводить анализ.')
        
    })

    it('introduction-to-python/exercises/162', ()=> {
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/162')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Интерфейс Python')
        //cy.get('[data-qa="exercise-content"]') - нужно придумать как проверить контент
        //cy.get('[data-qa="exercise-instructions"]') - нужно придумать как проверить инструкции
        //cy.get('[data-qa="exercise-hint_content"]') - нужно придумать как проверить подсказку
        
    })

    it('ntroduction-to-python/exercises/160', ()=> {
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/160')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Когда применять Python?')

    })


    it('introduction-to-python/exercises/286', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/286')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Комментируем код')
        cy.get('')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint]').clck()
        cy.get('[data-qa="exercise-show_answer"]').click()
    })

    it('introduction-to-python/exercises/429', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/429')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Арифметические операции')

        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click()

    })

    it('introduction-to-python/exercises/893', ()=>{
       cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/893') 
       cy.get('[data-qa="exercise-title"]').should('eq', 'Переменные и типы данных')
       //нужно подумать как протестировать кномпу показатьстенограмму
       //нужно подумать как протестировать кномпу ролдолжитьобучение
    })
    
    it('introduction-to-python/exercises/2732', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2732')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Присваиваем значение переменных')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click()


    })

    it('introduction-to-python/exercises/2862', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2682')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Вычисления с переменными')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click()

    })

    it('introduction-to-python/exercises/2863', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2683')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Другие типы данных')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click()
    })

    it('introduction-to-python/exercises/2684', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2684')
         cy.get('[data-qa="exercise-title"]').should('eq', 'Угадайте тип данных')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click()
    })

    it('introduction-to-python/exercises/2865', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2685')
         cy.get('[data-qa="exercise-title"]').should('eq', 'Операции с различными типами данных')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click() 
    })

    it('introduction-to-python/exercises/2686', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2686')
         cy.get('[data-qa="exercise-title"]').should('eq', 'Преобразование типов данных')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click() 
    })

    it('introduction-to-python/exercises/2687', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2687')
         cy.get('[data-qa="exercise-title"]').should('eq', 'Все ли может Python?')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click() 
    })

    it('introduction-to-python/exercises/2688', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2688')
         cy.get('[data-qa="exercise-title"]').should('eq', 'Списки Python')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click() 
    })

    it('introduction-to-python/exercises/2689', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2689')
         cy.get('[data-qa="exercise-title"]').should('eq', 'Создание списка')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click() 
    })

    it('introduction-to-python/exercises/2690', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2690')
         cy.get('[data-qa="exercise-title"]').should('eq', 'Создание списка с различными типами данных')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click() 
    })

    it('introduction-to-python/exercises/2691', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2691')
         cy.get('[data-qa="exercise-title"]').should('eq', 'Выберите действительный список')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click() 
    })

    it('introduction-to-python/exercises/2692', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2692')
         cy.get('[data-qa="exercise-title"]').should('eq', 'Список списков')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click() 
    })


    it('introduction-to-python/exercises/2693', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2693')
         cy.get('[data-qa="exercise-title"]').should('eq', 'Выборка списков')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click() 
    })

     it('introduction-to-python/exercises/2694', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2694')
         cy.get('[data-qa="exercise-title"]').should('eq', 'Выборка с использованием отрицательных индексов')
        cy.get('[data-qa="exercise-instructions"]')
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-show_answer"]').click() 
    })

     




    
})

