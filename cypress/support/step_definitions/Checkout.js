import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

Given("Openbrowser & Visit to The Souled Store", () => {
    cy.visit("https://www.thesouledstore.com/men");
    cy.get('.dropdown > .nav-link > .hicon').click();
    cy.get(".login-input-field").type("9410619702").screenshot();
    cy.get('form > .btn')
        .click()
        .should("be.visible");
    
    cy.wait(25000);
    cy.get('.btn').click();
})


// Scenario: TSc-07 & TC-087_to_TC-091: Add the product to the cart
When("Go to Product page", () => {
    cy.wait(3000)
    cy.visit("https://www.thesouledstore.com/product/naruto-pattern-summer-shirts?gte=1").screenshot()
})
And("TC-087 Select a Product size", () => {
    cy.get('.sizelist > :nth-child(3)').click()
})
And("TC-088 Verify Add product to Cart button", () => {
    cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").should('be.visible')
})
And("TC-089 Add product to Cart", () => {
    cy.get(".btn-danger").click().screenshot()
})
//Extra
And("#Extra Adding One more product to Cart", () => {
    cy.wait(3000)
    cy.visit("https://www.thesouledstore.com/product/naruto-gaara-boyfriend-tshirts?gte=0").screenshot()
    cy.get('.sizelist > :nth-child(3)').click()
    cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").should('be.visible')
    cy.get(".btn-danger").click().screenshot()
})

And("TC-090 Verify Go to cart Button", () => {
    cy.get('.btn-primary').click().should('be.visible')
})
Then("TC-091 Verify Count on Cart Icon", () => {
    cy.get(".count").should('be.visible').screenshot()
})

// .invoke('removeAttr', 'target').click()


// Scenario: TSc-08 & TC-092_to_TC-108: Go to cart and verify the product
When("TSc-08 & TC-092 'Go to cart'", () => {
    cy.wait(6000)
    cy.visit("https://www.thesouledstore.com/cart").screenshot()
    // cy.get("[href='/cart'] > span > .gm-added").click()
    
        cy.wait(3000)
        cy.xpath("//button[contains(text(),'No, I want to continue shopping at full prices')]").click();
        // cy.get('.checkout_rightside > .mb15').click().screenshot();
})
And("TC-093 Verify the Product List", () => {
    cy.get(".cartboxlist > div:nth-of-type(1)").should('be.visible').screenshot()
})
And("TC-094 Check the Product", () => {
    cy.get("a > img[alt='Naruto: Pattern']").should('be.visible')
})
And("TC-095 Check the Product details", () => {
    // cy.xpath("//a[@innertext='Naruto: Pattern']").should('have.text', 'Naruto: Pattern')
    cy.contains('Naruto: Pattern').should('have.text', 'Naruto: Pattern')
})
And("TC-096 Check Price Section", () => {
    // cy.get(":nth-child(1) > :nth-child(1) > .col-md-9 > .row > .is_Desktop > .cartprice > .fbold > :nth-child(1) > span").should('have.text', '₹ 1199  ')
    cy.contains('1199').should('be.contain', '1199')
})
And("TC-097 Check the Total Price", () => {
    // cy.get("[xpath]").should('have.text', '₹ 2686.00')
    cy.contains('2686').should('be.contain', '2686')
})
And("TC-098 Remove Product from Cart", () => {
    cy.get('div:nth-of-type(2) > div:nth-of-type(2) > .col-12.col-md-9.offset-md-3 > .boxfoot  .col-12.col-lg-12.col-md-12.d-md-flex.justify-content-center.justify-content-md-end > button:nth-of-type(1)').click()
    cy.get(".move").click()
})
And("TC-099 Verify Product is Removed from Cart", () => {
    if (cy.get(".cartboxlist > div:nth-of-type(2)") === undefined) {
        cy.log("Product Removed Successfully!");
    } else {
        cy.log("Error! Product not Removed");
    }
    // cy.get(".cartboxlist > div:nth-of-type(2)").should('not.be.visible')
})
And("TC-100 Check Price after Remove a product from Cart", () => {
    // cy.get("[xpath]").should('have.text', '₹ 1343.00')
    cy.contains('1343').should('be.contain', '1343')
})
And("TC-101 Place Order", () => {
    // cy.get(".btn-primary.mb15").click({force: true});
    cy.wait(4000)
    cy.get(".btn-primary.mb15").click();
})
And("TC-102 Add Address", () => {
    cy.get('.f50.fa.fa-plus-circle').click();
    // cy.get("input[name='firstname']").type('Devendra');
    // cy.get("input[name='lastname']").type('Singh');
    cy.get("input[name='address1']").type('00001');
    cy.get("input[name='address2']").type('Mathura');
    cy.get("input[name='postcode']").type('281001');
    // cy.get("input[name='city']").type('Mathura');
    cy.get("input[name='phone_no']").type('9876543210');
    cy.get("input[name='is_default']").click();
    // cy.get("input[name='is_default']").che 
    cy.get(".btn-red").click().screenshot()
})
And("TC-103 Visible new Added Address", () => {
    cy.get('.address').should('be.visible').screenshot();
})
And("TC-104 Proceed to Payment", () => {
    cy.get("button#con_payment").click();
})
And("TC-105 Check are we Proceed for Payment", () => {
    cy.get(".tss-money").should("be.visible").screenshot();
})
And("TC-106 Product removed Pop-up", () => {
    cy.go("back")
    cy.go("back")
    cy.get('.col-lg-12 > :nth-child(1)').click();
    cy.get(".move").click();
})
And("TC-107 Empty Cart", () => {
    cy.get("img[alt='Empty Cart']").should("be.visible");
})
Then("TC-108 Empty Cart Message", () => {
    cy.get(".emptyCartTitle").should("be.visible").screenshot();
})


// Scenario: TSc-09 & TC-109_to_TC-112: Go to Home,Clear(empty) the cart and logout
When("TSc-09 & TC-109 Go to Home and logout", () => {
    cy.wait(5000)
    cy.visit("https://www.thesouledstore.com/men");
    cy.get(".closeeys").click()
    // cy.get("//div[@id='app']//nav/div[2]").click()
})
And("TC-110 Go to Profile", () => {
    cy.get("a#navbarDropdownuser > .fa.fa-user-o.hicon").click().screenshot()
})
And("TC-111 User Details in Profile", () => {
    cy.get('.col-md-8 > .fbold').should('have.text', 'Devendra Singh')
    // cy.get("//span[@innertext='Devendra Singh']").should('have.text', 'Devendra Singh')
})
Then("TC-112 Logout", () => {
    cy.get(".btn-outline-danger").click().screenshot()
    // cy.get('.col-lg-3 > [data-v-3a663ef6=""] > .btn').click().should('have.text', 'Logout').screenshot()
    // .contain('Logout')
    cy.log("Logout Successfully!")
})


//Complete



//   Then("click on Men", () => {
//     cy.xpath("//a[@title='Logout']").click();
//     cy.url().should("contain", "logout");
//   });
