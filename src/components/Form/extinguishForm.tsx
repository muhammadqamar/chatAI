import React from 'react';
import { Formik } from 'formik';

interface MyFormValues {
  policyId: string;
  policyName: string;
  accrualMonth: string;
  policyAmount: string;
  accrual_cycle: string;
  cycle_on_employment_start: string;
  policy_duration: string;
  upfront_allocation: string;
  allowance_type_id: string;
  policy_start_date: string;
}
interface Errors {
  [key: string]: string;
}

const ExtinguishForm = ({
  setShowPolicies,
  allPolices,
  setAllPolices,
}: any) => {
  const initialValues: MyFormValues = {
    policyId: '',
    policyName: '',
    accrualMonth: '',
    policyAmount: '',
    accrual_cycle: '',
    cycle_on_employment_start: '',
    policy_duration: '',
    upfront_allocation: '',
    allowance_type_id: '',
    policy_start_date: '',
  };
  return (
    <div>
      <div className="flex_box">
        <p className="heading">Policy {allPolices.length}</p>
        <button
          className="button cancel-btn"
          type="button"
          onClick={() => setShowPolicies(false)}
          style={{ marginLeft: 'auto' }}
        >
          <img src="/Delete-icon.svg" alt="add" />
        </button>
      </div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors: Errors = {};
          if (!values.policyId) {
            errors.policyId = 'Required';
          }
          if (!values.policyName) {
            errors.policyName = 'Required';
          }
          if (!values.accrualMonth) {
            errors.accrualMonth = 'Required';
          }
          if (!values.policyAmount) {
            errors.policyAmount = 'Required';
          }
          if (!values.policy_duration) {
            errors.policy_duration = 'Required';
          }
          if (!values.allowance_type_id) {
            errors.allowance_type_id = 'Required';
          }
          if (!values.policy_start_date) {
            errors.policy_start_date = 'Required';
          }
          if (!values.accrual_cycle) {
            errors.accrual_cycle = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setAllPolices([
            ...allPolices,
            { ...values, id: new Date()?.toISOString() },
          ]);
          setShowPolicies(false);
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
                  type="text"
                  name="policyId"
                  placeholder="Policy ID"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.policyId}
                />
                <p className="error">
                  {errors.policyId && touched.policyId && errors.policyId}
                </p>
              </div>
              <div className="input_wrapper">
                <input
                  type="text"
                  name="policyName"
                  placeholder="Policy Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.policyName}
                />
                <p className="error">
                  {errors.policyName && touched.policyName && errors.policyName}
                </p>
              </div>
              <div className="input_wrapper">
                <input
                  type="number"
                  name="accrualMonth"
                  placeholder="Accrual Month"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.accrualMonth}
                />
                <p className="error">
                  {errors.accrualMonth &&
                    touched.accrualMonth &&
                    errors.accrualMonth}
                </p>
              </div>
              <div className="input_wrapper">
                <input
                  type="number"
                  name="policyAmount"
                  placeholder="Policy Amount"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.policyAmount}
                />
                <p className="error">
                  {errors.policyAmount &&
                    touched.policyAmount &&
                    errors.policyAmount}
                </p>
              </div>

              <div className="input_wrapper">
                <input
                  type="date"
                  name="accrual_cycle"
                  placeholder="Accrual Cycle"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.accrual_cycle}
                  checked={!!values?.accrual_cycle}
                />

                <p className="error">
                  {errors.accrual_cycle &&
                    touched.accrual_cycle &&
                    errors.accrual_cycle}
                </p>
              </div>

              <div className="">
                <div className="input_checkbox_wrapper">
                  <input
                    type="checkbox"
                    name="cycle_on_employment_start"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.cycle_on_employment_start}
                    checked={!!values?.cycle_on_employment_start}
                  />

                  <p className="">Cycle on Employment Start</p>
                </div>
                <p className="error">
                  {errors.cycle_on_employment_start &&
                    touched.cycle_on_employment_start &&
                    errors.cycle_on_employment_start}
                </p>
              </div>
              <div className="input_wrapper">
                <input
                  type="number"
                  name="policy_duration"
                  placeholder="Policy Duration"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.policy_duration}
                />
                <p className="error">
                  {errors.policy_duration &&
                    touched.policy_duration &&
                    errors.policy_duration}
                </p>
              </div>
              <div className="">
                <div className="input_checkbox_wrapper">
                  <input
                    type="checkbox"
                    name="upfront_allocation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values?.upfront_allocation}
                    checked={!!values?.upfront_allocation}
                  />
                  <p className=""> Upfront Allocation</p>
                </div>
                <p className="error">
                  {errors.upfront_allocation &&
                    touched.upfront_allocation &&
                    errors.upfront_allocation}
                </p>
              </div>
              <div className="input_wrapper">
                <input
                  type="text"
                  name="allowance_type_id"
                  placeholder="Allowance Type ID"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.allowance_type_id}
                />
                <p className="error">
                  {errors.allowance_type_id &&
                    touched.allowance_type_id &&
                    errors.allowance_type_id}
                </p>
              </div>
              <div className="input_wrapper">
                <input
                  type="date"
                  name="policy_start_date"
                  placeholder="Policy Start Date"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.policy_start_date}
                />
                <p className="error">
                  {errors.policy_start_date &&
                    touched.policy_start_date &&
                    errors.policy_start_date}
                </p>
              </div>
            </div>
            <br />
            <button
              className="button full-width"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ExtinguishForm;
