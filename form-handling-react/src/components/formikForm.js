import React from 'react';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
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
          .required('Username is required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Password is required'),
      })}
      onSubmit={(values) => {
        console.log('Form Submitted:', values);
      }}
    >
      <Form>
        <div>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="p" />
        </div>

        <div>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" />
        </div>

        <div>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="p" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
