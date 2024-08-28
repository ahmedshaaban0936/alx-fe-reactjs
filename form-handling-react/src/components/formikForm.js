import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required('Username is required'), // Ensures the username field is a string and is required
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'), // Ensures the email field is a string and is required
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'), // Ensures the password field is a string and is required
      })}
      onSubmit={(values) => {
        console.log('Form Submitted:', values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            name="username"
            placeholder="Enter your username"
          />
          <ErrorMessage name="username" component="p" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="p" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="p" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
