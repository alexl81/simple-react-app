import s from './FormsControls.module.css';
import {Field} from "redux-form";
import React from "react";


const FormControl = ({meta: {touched, error}, children}) => {
        const hasError = touched && error;
        return (
            <div className={s.formControl + " " + (hasError ? s.error : "")}>
                <div>
                    {children}
                </div>
                {hasError && <span>{error}</span>}
            </div>
        )
    }

    export const Textarea = (props) => {
       const {input, meta, child, ...restProps} = props;
        return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
    }

    export const Input = (props) => {
        const {input, meta, child, ...restProps} = props;
        return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
    }

    export const createField = (placeholder, name, component, validators, props = {}, text = "") => (
        <div>
            <Field placeholder={placeholder}
                   name={name}
                   component={component}
                   validate={validators}
                   {...props}
            /> {text}
        </div>
    )
