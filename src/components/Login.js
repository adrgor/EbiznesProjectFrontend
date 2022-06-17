import React from 'react'

const Login = () => {
    // const GOOGLE_URL = "https://ebiznesbackend.azurewebsites.net/oauth2/authorize/google?redirect_uri=https%3A%2F%2Febiznesfrontend.azurewebsites.net%2F/"
    // const GITHUB_URL = "https://ebiznesbackend.azurewebsites.net/oauth2/authorize/github?redirect_uri=https%3A%2F%2Febiznesfrontend.azurewebsites.net%2F/"
    const GOOGLE_URL = "https://ebiznesbackend.azurewebsites.net/oauth2/authorize/google?redirect_uri=http%3A%2F%2Flocalhost%3A3000/"
    const GITHUB_URL = "https://ebiznesbackend.azurewebsites.net/oauth2/authorize/github?redirect_uri=http%3A%2F%2Flocalhost%3A3000/"
    

  return (
    <div className="login-form">
        <h2>Log in with:</h2>
        <a href={GOOGLE_URL}>Google</a>
        <a href={GITHUB_URL}>GitHub</a>
    </div>
  )
}

export default Login