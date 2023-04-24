Feature:Validation & Verficication for Checkout Process of The Souled Store
    Background: The Souled Store
        Given Openbrowser & Visit to The Souled Store


    Scenario: TSc-07 & TC-087_to_TC-091: Add the product to the cart
        When Go to Product page
        And TC-087 Select a Product size
        And TC-088 Verify Add product to Cart button
        And TC-089 Add product to Cart
        And #Extra Adding One more product to Cart
        And TC-090 Verify Go to cart Button
        Then TC-091 Verify Count on Cart Icon

    Scenario: TSc-08 & TC-092_to_TC-108: Go to cart and verify the product
        When TSc-08 & TC-092 'Go to cart'
        # And TC-092 "Go to Cart"
        And TC-093 Verify the Product List
        And TC-094 Check the Product
        And TC-095 Check the Product details
        And TC-096 Check Price Section
        And TC-097 Check the Total Price
        And TC-098 Remove Product from Cart
        And TC-099 Verify Product is Removed from Cart
        And TC-100 Check Price after Remove a product from Cart
        And TC-101 Place Order
        And TC-102 Add Address
        And TC-103 Visible new Added Address
        And TC-104 Proceed to Payment
        And TC-105 Check are we Proceed for Payment
        And TC-106 Product removed Pop-up
        And TC-107 Empty Cart
        Then TC-108 Empty Cart Message

    Scenario: TSc-09 & TC-109_to_TC-112: Go to Home,Clear(empty) the cart and logout
        When TSc-09 & TC-109 Go to Home and logout
        And TC-110 Go to Profile
        And TC-111 User Details in Profile
        Then TC-112 Logout
