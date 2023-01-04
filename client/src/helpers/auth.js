export const getErrorMessage = (code) => {
  switch (code) {
    case 'auth/wrong-password':
      return 'Incorrect Password.'
    case 'auth/user-not-found':
      return 'User not found.'
    default:
      return 'Something went wrong. Please contact admin.'
  }
}
