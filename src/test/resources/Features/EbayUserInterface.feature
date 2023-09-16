Feature: demo blaze application services

  Scenario: Register and login
    Given user navigates to demo blaze
    And user clicks on sign up button
    And user fill the data
    And user clicks on sign up button in register screen
    And user accept the successful message alert
    And user clicks on log in button
    And user fill the login credential
    And user clicks on log in button in login screen
    Then user has logged in successfully

  Scenario Outline: Check the listed Categories has Items
    Given user navigates to demo blaze
    And user clicks on log in button
    And user fill the username field with "testhadeer1" in login screen
    And user fill the password field with "testhadeer1" in login screen
    And user clicks on log in button in login screen
    And user clicks on <category> category
    Then user can see items for this category
    Examples:
      | category |
      | phones   |
      | laptops  |
      | monitors |

  Scenario: Add random item to the cart
    Given user navigates to demo blaze
    And user clicks on log in button
    And user fill the username field with "testhadeer1" in login screen
    And user fill the password field with "testhadeer1" in login screen
    And user clicks on log in button in login screen
    And user select the first item
    And user clicks on add to cart button
    Then The alert message is displayed with Product added.
    #delete the added item
    And user accept the successful message alert
    And user clicks on cart link
    And user clicks on delete link

  Scenario: Remove item from cart
    Given user navigates to demo blaze
    And user clicks on log in button
    And user fill the username field with "testhadeer1" in login screen
    And user fill the password field with "testhadeer1" in login screen
    And user clicks on log in button in login screen
    And user select the first item
    And user clicks on add to cart button
    And user accept the successful message alert
    And user clicks on cart link
    And user clicks on delete link
    Then the selected item has deleted

  Scenario: Complete successful checkout with random item
    Given user navigates to demo blaze
    And user clicks on log in button
    And user fill the username field with "testhadeer1" in login screen
    And user fill the password field with "testhadeer1" in login screen
    And user clicks on log in button in login screen
    And user select the first item
    And user clicks on add to cart button
    And user accept the successful message alert
    And user clicks on cart link
    And user clicks on place order button
    And user fill the name field with "testhadeer1"
    And user fill the country field with "countryTest"
    And user fill the city field with "cityTest"
    And user fill the credit card field with "creditCardTest"
    And user fill the month field with "monthTest"
    And user fill the year field with "yearTest"
    And user clicks on purchase button
    Then user can see the successful message
    And user can see the amount of the selected item
    And user can see the name of the selected item
    And user can see the credit card of the selected item
