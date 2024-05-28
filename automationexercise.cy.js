///<reference types="cypress"/>

describe('Automation Exercise', () => {
    afterEach('indicate test completion', () =>{
        cy.log('Test completed')
    })

    it('visit and login to website', () => {
        //  Go to the website and Sign-In
        cy.visit('https://www.automationexercise.com/');
        cy.contains('Signup / Login').click();
        cy.get('input[data-qa="login-email"]').type('qat@mailinator.com');
        cy.get('input[data-qa="login-password"]').type('123456');
        cy.get('button[data-qa="login-button"]').click();
      

    //it("fetch labels and prices of featured items and sort them by price (Low to High)", () => {
            let items = [];

        // cy.get('.features_items').scrollIntoView({force:true})
             cy.get(".features_items .productinfo")
               .each(($el) => {
                 const priceText = $el.find("h2").text();
                 const label = $el.find("p").text();
                 const price = Number(priceText .replace(/[^0-9-]+/g, ""))
                 items.push({ label, price });
               })
               .then(() => {
                 items.sort((a, b) => a.price - b.price);
         
                 cy.log("Sorted Items by Price (Low to High):");
                 items.forEach((item) => {
                   cy.log(`${item.label}: Rs.${item.price}`);
                 });
               });
               cy.wait(3000);

    //  Add the specified item to the cart
        cy.contains('Women').click();
        cy.contains('Dress').click();
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        
        cy.get('.modal-content')
            .should('be.visible')    
            .get('.modal-footer > .btn')
            .click()

    // view cart and proceed to check out 
        cy.contains('Cart').click()
        cy.get('.col-sm-6 > .btn').click()
        cy.get('.form-control').type("order placed")
        cy.get(':nth-child(7) > .btn').click()
        cy.get('[data-qa="name-on-card"]').type("test card")
        cy.get('[data-qa="card-number"]').type("4100 0000 0000")
        cy.get('[data-qa="cvc"]').type ("123")
        cy.get('[data-qa="expiry-month"]').type('01')
        cy.get('[data-qa="expiry-year"]').type('1900')
        cy.get('[data-qa="pay-button"]').click()

    // assertion for successful placement 
        cy.contains('Order Placed!').should('be.visible')

    });
});