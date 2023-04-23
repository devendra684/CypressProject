Feature:Validation & Verficication for Checkout Process of The Souled Store
    Background: The Souled Store
        Given Openbrowser & Visit to website


    Scenario: TSc-07_Add the product to the cart
        When Go to Product page
        And TC-001 Select a Product size
        And TC-002 Verify Add product to Cart button
        And TC-003 Add product to Cart
        And TC-004 Verify Go to cart Button
        Then TC-005 Verify Count on Cart Icon

    Scenario: TSc-08_Go to cart and verify the product
        When TSc-08 & TC-006 'Go to cart'
        # And TC-006 "Go to Cart"
        And TC-007 Verify the Product List
        And TC-008 Check the Product
        And TC-009 Check the Product details
        And TC-010 Check Price Section
        And TC-011 Check the Total Price
        And TC-012 Remove Product from Cart
        And TC-013 Verify Product is Removed from Cart
        And TC-014 Check Price after Remove a product from Cart
        And TC-015 Place Order
        And TC-016 Add Address
        And TC-017 Visible new Added Address
        And TC-018 Proceed to Payment
        And TC-019 Check are we Proceed for Payment
        And TC-020 Product removed Pop-up
        And TC-021 Empty Cart
        Then TC-022 Empty Cart Message

    Scenario: TSc-09 & TC-023-Go to Home,Clear(empty) the cart and logout
        When TSc-09 & TC-023-Go to Home and logout
        And TC-024 Go to Profile
        And TC-025 User Details in Profile
        Then TC-026 Logout
