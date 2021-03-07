import React from "react";
import { Formik, ErrorMessage } from "formik";

export default function SimpleForm() {
  return (
    <div>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 5000);
        }}
        validate={(values) => {
          let errors = {};
          if (!values.name) {
            errors.name = "Please enter a name";
          }
          return errors;
        }}
        render={({
          handleSubmit,
          handleChange,
          values,
          errors,
          handleBlur,
          touched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={values.name}
              type="text"
              name="name"
              placeholder="Enter your name"
              onBlur={handleBlur}
              touched={touched}
            />
            <button disabled={isSubmitting}>Submit</button>
            <ErrorMessage name="name" />
          </form>
        )}
      />
    </div>
  );
}
