class LoginPage {
    visit() {
      cy.visit('https://www.automationexercise.com/')
    }
  
    clickSignupLogin() {
      cy.contains('Signup / Login').click()
    }
  
    enterEmail(email) {
      cy.get('input[data-qa="login-email"]').type(email)
    }
  
    enterPassword(password) {
      cy.get('input[data-qa="login-password"]').type(password)
    }
  
    clickLoginButton() {
      cy.get('button[data-qa="login-button"]').click()
    }
  }
  
  export default LoginPage
  