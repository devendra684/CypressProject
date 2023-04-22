import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
///<reference types="cypress"/>
///<reference types="@cypress/xpath"/>

Given("Openbrowser & Visit to website", () => {
    cy.visit("https://www.thesouledstore.com/men");
    cy.get('.dropdown > .nav-link > .hicon').click();
    cy.get(".login-input-field").type("9410619702").screenshot();
    cy.get('form > .btn')
        .click()
        .should("be.visible");
    
    cy.wait(20000);
    cy.get('.btn').click();
})

When("Go to Product page", () => {
    cy.wait(3000)
    cy.visit("https://www.thesouledstore.com/product/naruto-pattern-summer-shirts?gte=1").screenshot()
})

And("TC-001 Select a Product size", () => {
    cy.get('.sizelist > :nth-child(3)').click()
})
And("TC-002 Verify Add product to Cart button", () => {
    cy.get("button[class='btn btn-danger btnWidth btn-lg btn-block pointer']").should('be.visible')
})
And("TC-003 Add product to Cart", () => {
    cy.get(".btn-danger").click().screenshot()
})
And("TC-004 Verify Go to cart Button", () => {
    cy.get('.btn-primary').click().should('be.visible')
})
Then("TC-005 Verify Count on Cart Icon", () => {
    cy.get("a#navbarDropdownuser > .count").should('be.visible').screenshot()
})

// .invoke('removeAttr', 'target').click()
When("TSc-08 & TC-006 'Go to cart'", () => {
    cy.wait(6000)
    cy.get("[href='/cart'] > span > .gm-added").click()
    
        cy.wait(8000)
        cy.xpath("//button[contains(text(),'No, I want to continue shopping at full prices')]").click();
        cy.get('.checkout_rightside > .mb15').click().screenshot();
})

And("TC-007 Verify the Product List", () => {
    cy.get(".cartboxlist > div:nth-of-type(1)").should('be.visible').screenshot()
})
// And("TC-008 Check the Product", () => {
//     cy.get("a > img[alt='Naruto: Pattern']']").should('be.visible')
// })
And("TC-009 Check the Product details", () => {
    cy.get("//a[@innertext='Naruto: Pattern']").should('have.text', 'Naruto: Pattern')
})
And("TC-010 Check Price Section", () => {
    cy.get("cy.get(':nth-child(1) > :nth-child(1) > .col-md-9 > .row > .is_Desktop > .cartprice > .fbold > :nth-child(1) > span')").should('have.text', '₹ 1199  ')
})
And("TC-011 Check the Total Price", () => {
    cy.get("[xpath]").should('have.text', '₹ 2686.00')
})
And("TC-012 Remove Product from Cart", () => {
    cy.get('div:nth-of-type(2) > div:nth-of-type(2) > .col-12.col-md-9.offset-md-3 > .boxfoot  .col-12.col-lg-12.col-md-12.d-md-flex.justify-content-center.justify-content-md-end > button:nth-of-type(1)').click()
})
And("TC-013 Verify Product is Removed from Cart", () => {
    cy.get(".cartboxlist > div:nth-of-type(2)").should("expect(value).to.be.false")
})
And("TC-014 Check Price after Remove a product from Cart", () => {
    cy.get("[xpath]").should('have.text', '₹ 1343.00')
})
And("TC-015 Place Order", () => {
    cy.get("cy.get('.mbstickyfooter > .btn')").should('have.text', '₹ 6211.00')
})
And("TC-016 Add Address", () => {
    cy.get('.f50.fa.fa-plus-circle').click();
    cy.get("input[name='firstname']").type('Devendra');
    cy.get("input[name='lastname']").type('Singh');
    cy.get("input[name='address1']").type('00001');
    cy.get("input[name='address2']").type('abc');
    cy.get("input[name='postcode']").type('281001');
    // cy.get("input[name='city']").type('Mathura');
    cy.get("input[name='phone_no']").type('1234567890');
    cy.get("input[name='is_default']").click();
    // cy.get("input[name='is_default']").che 
    cy.get(".btn-red").click().screenshot()
})
And("TC-017 Visible new Added Address", () => {
    cy.get("#c3971028").should('be.visible').screenshot();
})
And("TC-018 Proceed to Payment", () => {
    cy.get("button#con_payment").click();
})
And("TC-019 Proceed to Payment", () => {
    cy.get(".tss-money").should("be.visible").screenshot();
})
And("TC-020 Product removed Pop-up", () => {
    cy.go("back")
    cy.get(".move").click();
})
And("TC-021 Empty Cart", () => {
    cy.get("img[alt='Empty Cart']").should("be.visible");
})
Then("TC-022 Empty Cart Message", () => {
    cy.get(".emptyCartTitle").should("be.visible").screenshot();
})


When("TSc-09 & TC-023-Go to Home and logout", () => {
    cy.wait(5000)
    cy.get(".navbar-brand").click()
})
And("TC-024 Go to Profile", () => {
    cy.get("a#navbarDropdownuser > .fa.fa-user-o.hicon").click().screenshot()
})
And("TC-025 User Details in Profile", () => {
    cy.get("///span[@innertext='Devendra Singh']").should('have.text', 'Devendra Singh')
})
Then("TC-026 Logout", () => {
    cy.get("//button[contains(text(),'Logout')]").click().should('have.value', 'Logout').screenshot()

})





// When("Verify the elements on the top menu bar", () => {
//     cy.xpath("//a[@href='/']//img").should("be.visible");
//     cy.xpath("//a[@title='WOMEN']").should("be.visible");
//     cy.xpath("//a[@title='INDIE']").should("be.visible");
//     cy.xpath("//a[@title='KIDS']").should("contain", "KIDS");
//     cy.xpath("//input[@placeholder='Search AJIO']").should("be.visible");
//     cy.xpath("//img[@alt='wishlistIcon']").should("be.visible");
//     cy.xpath("//div[@class='ic-cart ']").should("be.visible");
//   });
//   And("Verify Men in menu", () => {
//     cy.xpath("//a[@title='MEN']").should("contain", "MEN");
//   });
//   Then("click on Men", () => {
//     cy.xpath("//a[@title='MEN']").click();
//     cy.url().should("contain", "men");
//   });
  

// When("click on men", () => {
//     cy.xpath("//a[@title='MEN']").click();
//     cy.url().should("contain", "men");
//   });