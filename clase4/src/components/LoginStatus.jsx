function LoginStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Bienvenido</p>;
  } else {
    return <p>Debes iniciar sesión</p>;
  }
}

export default LoginStatus;
