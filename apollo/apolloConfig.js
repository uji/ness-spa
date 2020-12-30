export default () => {
  return {
    httpEndpoint: 'http://localhost:3000/query',
    getAuth: () => {
      const idToken = localStorage.getItem("idToken")
      return idToken ? 'Bearer ' + idToken : ''
    }
  }
}
