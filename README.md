# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

// import './App.css';
// import Animaux from './Components/prooter/Destruct';
// import Input from './Components/prooter/Destruct';

// import React, { useState } from "react";

// const LoginForm = () => {
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

// const handleEmailChange = (value) => {
// setEmail(value);
// };

// const handlePasswordChange = (value) => {
// setPassword(value);
// };

// const handleSubmit = () => {
// // Logique pour soumettre le formulaire avec les valeurs d'e-mail et de mot de passe
// console.log("Email:", email);
// console.log("Password:", password);
// };

// return (
// <form>
// <Input
// type="email"
// value={email}
// onChange={handleEmailChange}
// placeholder="Adresse e-mail"
// />

// <Input
// type="password"
// value={password}
// onChange={handlePasswordChange}
// placeholder="Mot de passe"
// />

// <button type="button" onClick={handleSubmit}>
// Se connecter
// </button>
// </form>
// );
// };

// export default LoginForm;

// import React from "react"

// const Animaux = ({
// felin,
// reptil,
// oiseau,
// amphibien
// }) => {
// return(
// <div>
// <h2>{felin}</h2>
// <h2>{reptil}</h2>
// <h2>{oiseau}</h2>
// <h2>{amphibien}</h2>
// </div>
// );
// };
// export default Animaux;

// -----------------------------------------------

// import React from "react";
// import BsInput from "react-bootstrap/FormControl";

// const Input = ({ value, onChange, id, type = "text", ...rest }) =>

// {
// const handleChange = (event) => {
// const value = event.target.value;
// onChange(value, id);
// };
// return (
// <BsInput
// type={type}
// value={value}
// onChange={handleChange}
// {...rest} />
// );
// };

// export default Input;
