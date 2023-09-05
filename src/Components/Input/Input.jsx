import React from "react";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useField } from 'formik';




const Input = ( {label, id, type = "text", ...rest}) => {
    const [champ, meta] = useField(id);
    const isError = meta.touched && meta.error;

    return (
        <Form.FormGroup>
             {label && <Form.Label htmlFor={id}></Form.Label>}
            <Form.FormControl
             isInvalid={isError}

                 type={type}
                         {...champ}
                             {...rest}/> 
                             
            {isError && (
            
                <Form.Control.Feedback>
                    {meta.error}
                </Form.Control.Feedback>
       
        )}
        </Form.FormGroup>
    );
};

export default Input;

