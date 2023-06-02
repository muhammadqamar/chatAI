import React from 'react';
import { Formik } from 'formik';

interface MyFormValues {
  fiscal_year_start_month: string;
  fiscal_year_start_date: string;
}
interface Errors {
  [key: string]: string;
}

const BerechnenForm = ({ setShowPolicies }: any) => {
  const initialValues: MyFormValues = {
    fiscal_year_start_month: '',
    fiscal_year_start_date: '',
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: Errors = {};
          if (!values.fiscal_year_start_month) {
            errors.fiscal_year_start_month = 'Required';
          }

          if (!values.fiscal_year_start_date) {
            errors.fiscal_year_start_date = 'Required';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form_style">
              <div className="input_wrapper">
                <input
                  type="number"
                  name="fiscal_year_start_month"
                  placeholder="Fiscal Year Start Month"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fiscal_year_start_month}
                />
                <p className="error">
                  {errors.fiscal_year_start_month &&
                    touched.fiscal_year_start_month &&
                    errors.fiscal_year_start_month}
                </p>
              </div>
              <div className="input_wrapper">
                <input
                  type="date"
                  name="fiscal_year_start_date"
                  placeholder="Input Date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.fiscal_year_start_date}
                />
                <p className="error">
                  {errors.fiscal_year_start_date &&
                    touched.fiscal_year_start_date &&
                    errors.fiscal_year_start_date}
                </p>
              </div>
            </div>
            <button
              className="button"
              type="button"
              onClick={() => setShowPolicies(true)}
            >
              <img
                src="https://public-ac-site.netlify.app/images/img/create-item-btn.png"
                alt="add"
              />
              Add Policy
            </button>
            <br />
            <button
              className="button full-width "
              type="submit"
              disabled={isSubmitting}
            >
              Calculate
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BerechnenForm;
