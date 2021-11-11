describe('I visit site', ()=> {
    it('I visit site',()=>{
        cy.visit('http://localhost:4200')
    })
    it('I click ctest1', () => {
        cy.get('#email').type("nikhel@gmail.com")
        cy.wait(1000)
        cy.get('#password').type("nikhelbisht")
        cy.wait(1000)
        cy.get('.button-report').click()
    })
    it('I click ctest2', () => {
        cy.get('mat-select[formControlName=website]').click().get('mat-option').contains('delhi').click()
        cy.wait(1000)
        cy.get('#Submit').click()
    })
    it('I got city', () => {
        cy.get('#city').type('dehradun')
        cy.wait(1000)
        cy.intercept('GET','http://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=45f4dd45e0f724512ba044c5a2caf4bc&units=imperial')
        cy.get('#onSubmit').click()
        // cy.wait('@u').then(({ request }) =>{
        //     //assertion
        //         cy.log('response: '+ response)
        //     //    expect(request.body).to.have.property('name', 'User')
        //     })
    })
    // it('Logout app', () => {
    //     cy.wait(1000)
    //     cy.contains('Logout').click()
    // })
})