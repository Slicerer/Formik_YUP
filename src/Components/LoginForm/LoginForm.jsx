import React from "react";
import BsForm from "react-bootstrap/Form";
import Input from "../Input/Input";
import { Formik, Form } from "formik";
import Button from "react-bootstrap/Button"; 

const initialValues = { email: "", password: "" };

const LoginForm = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validateOnChange>
      <Form as={BsForm} noValidate>
        <Input id="email" label="Email" type="email" />
        <Input id="password" label="Password" type="password" />
        <Button type="submit">Connexion</Button> {/* Utilisation du composant Button */}
      </Form>
    </Formik>
  );
};

export default LoginForm;
