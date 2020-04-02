const state = {
  text: [
    { phonenumber: 'PHONE NUMBER' },
    { fullname: 'FULL NAME' },
    { email: 'EMAIL (OPTIONAL)' },
    { pwa: 'PASSWORD' },
    { confirmpwa: 'CONFIRM PASSWORD' },
    { verifycode: 'ENTER CODE HERE' },
    { resendcode: 'RESEND CODE' },
    { enterverificationcode: 'PLEASE ENTER VERIFICATION CODE' },
    { verifiynumber: 'VERIFIY CODE NUMBER' },
    { back: 'BACK' },
    { welcome: 'WELCOME' },
    { forgotpass: 'FORGOT PASSWORD' },
    { changepass: 'CHANGE PASSWORD' },
    { newpwa: 'Plese enter a new password' },
    { btn1: 'LOG IN' },
    { btn2: 'SIGN PU' },
    { btn3: 'CONTINUE' },
    { btn4: 'DISMISS' },
    { btn5: 'VERIFY' }
  ]
}
const getters = {
  text: state => state.text.map(res => res)
}
export default {
  namespace: true,
  state,
  getters
}
