describe("Введение в питон", ()=> { 

    beforeEach(() => {
        cy.login_ui('cm@ck.ru', 'Johny#97')
      })
    

    
    it('Тестирование соответсвия стабильного json курса с текущим', ()=> {
        cy.courses_api_check('introduction-to-python')

    })
    it('Тестирование главной страницы курса', ()=> {

        cy.visit("https://stage.deepskills.ru/courses/introduction-to-python")
        cy.get('h1').should('have.text', 'Python для начинающих')
        ////cy.contains(' В курсе вы узнаете о мощных способах хранения и управления данными, а также о полезных инструментах для обработки данных, которые помогут вам самостоятельно проводить анализ.')
        
    })

    it('introduction-to-python/exercises/162', ()=> {
        cy.request('POST', 'auth/sign_in', {"email":"cm@ck.ru","password":"Johny#97"})
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/162')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Интерфейс Python')
        cy.get('[data-qa="exercise-content"]')// локатор показывает описание  
        cy.get('[data-qa="exercise-instructions"]')//локатор показывает упражнение 
        cy.get('[data-qa="exercise-use_hint"]').click()
        cy.get('[data-qa="exercise-hint_content"]') 
        cy.get('[data-qa="exercise-show_answer"]').click()
        cy.get('[data-qa="exercise-answer"]').click()

        

        
    })

    it('ntroduction-to-python/exercises/160', ()=> {
        cy.login()
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/160')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Когда применять Python?')
        cy.get('').click()
        cy.get('[data-qa="exercise-answer"]').click()
        
    })


    it('introduction-to-python/exercises/286', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/286')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Комментируем код')
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

    it('introduction-to-python/exercises/2695', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2695')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Работа с элементами списка')


    }) 


    it('introduction-to-python/exercises/2696', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2696')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Срезы')

    })

     it('introduction-to-python/exercises/2697', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2697')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Срезы (2)')

    })

    it('introduction-to-python/exercises/2698', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2698')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Выборка в списке списков')

    })

    it('introduction-to-python/exercises/2699', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2699')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Изменение списков')

    })

    it('introduction-to-python/exercises/2700', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2700')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Замена элемента списка')

    })

    it('introduction-to-python/exercises/2701', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2701')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Расширение списка')

    })

    it('introduction-to-python/exercises/2702', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2702')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Удаление элемента списка')

    })

    it('introduction-to-python/exercises/2703', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2703')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Механизм работы списков')

    })

    it('introduction-to-python/exercises/2704', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2704')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Функции')

    })

    it('introduction-to-python/exercises/2705', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2705')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Знакомые функции')

    })

    it('introduction-to-python/exercises/2706', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2706')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Помогите!')

    })

    it('introduction-to-python/exercises/2707', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2707')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Несколько аргументов')

    })

    it('introduction-to-python/exercises/2708', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2708')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Методы')

    })

    it('introduction-to-python/exercises/2709', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2709')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Методы строк')

    })

    it('introduction-to-python/exercises/2710', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2710')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Методы списка')

    })

    it('introduction-to-python/exercises/2711', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2711')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Методы списка (2)')

    })

    it('introduction-to-python/exercises/2712', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2712')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Пакеты')

    })

    it('introduction-to-python/exercises/2713', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2713')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Импорт пакетов')

    })

    it('introduction-to-python/exercises/2714', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2714')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Частичный импорт')
        

    })

    it('introduction-to-python/exercises/2715', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2715')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Различные способы импорта')
        

    })

    it('introduction-to-python/exercises/2716', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2716')
        cy.get('[data-qa="exercise-title"]').should('eq', 'NumPy')
        

    })

    it('introduction-to-python/exercises/271', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/271')
        cy.get('[data-qa="exercise-title"]').should('eq', '')
        

    })

    it('introduction-to-python/exercises/271', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2716')
        cy.get('[data-qa="exercise-title"]').should('eq', 'NumPy')
        

    })

    it('introduction-to-python/exercises/2717', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2717')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Ваш первый массив NumPy')
        

    })

    it('introduction-to-python/exercises/2718', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2718')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Рост футболистов')
        

    })

    it('introduction-to-python/exercises/2719', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2719')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Индекс массы тела футболистов')
        

    })

    it('introduction-to-python/exercises/2720', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2720')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Определяем самого легкого футболиста')
        

    })

    it('introduction-to-python/exercises/2721', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2721')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Особенности NumPy')
        

    })

    it('introduction-to-python/exercises/2722', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2722')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Выборка массивов NumPy')
        

    })

    it('introduction-to-python/exercises/2723', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2723')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Двумерные массивы NumPy')
        

    })

    it('introduction-to-python/exercises/2724', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2724')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Ваш первый двумерный массив NumPy')
        

    })

    it('introduction-to-python/exercises/2725', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2725')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Данные о футболистах в двумерном массиве')
        

    })

    it('introduction-to-python/exercises/2726', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2726')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Выборка в двухмерном массиве NumPy')
        

    })

    it('introduction-to-python/exercises/2727', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2727')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Векторные вычисления')
        

    })

    it('introduction-to-python/exercises/2728', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2728')
        cy.get('[data-qa="exercise-title"]').should('eq', 'NumPy: Статистика данных')
        

    })

    it('introduction-to-python/exercises/2729', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2729')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Среднее значение в сравнении с медианным')
        

    })

    it('introduction-to-python/exercises/2730', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2730')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Изучаем данные о футболистах дальше')
        

    })

    it('introduction-to-python/exercises/2731', ()=>{
        cy.visit('https://stage.deepskills.ru/courses/introduction-to-python/exercises/2731')
        cy.get('[data-qa="exercise-title"]').should('eq', 'Объединяем все данные')
        

    })
})

