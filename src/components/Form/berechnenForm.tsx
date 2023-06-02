import React from 'react';
import { Formik } from 'formik';
import { Accordion } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import {
  CalculatePoliciesReturnType,
  calculatePolicies,
} from '../../lib/allowance';
interface MyFormValues {
  fiscal_year_start_month: string;
  fiscal_year_start_date: string;
  allPolices: [];
}
interface Errors {
  [key: string]: string;
}

const BerechnenForm = ({ setShowPolicies, setAllPolices, allPolices }: any) => {
  const initialValues: MyFormValues = {
    fiscal_year_start_month: '',
    fiscal_year_start_date: '',
    allPolices: allPolices,
  };

  const [result, setResult] =
  React.useState<CalculatePoliciesReturnType | null>(null);
  return (
    <div>
      <br />
      <h2 className="heading">All Polices</h2>
      <Accordion defaultActiveKey="0">
        {allPolices?.map((data: any, counter: number) => {
          return (
            data.policyName && (
              <Accordion.Item key={counter} eventKey={String(counter)}>
                <Accordion.Header>{data.policyName}</Accordion.Header>
                <Accordion.Body>
                  <DataTable
                    columns={[
                      {
                        name: 'policy Id',
                        selector: (row: any) => row.policyId,
                      },
                      {
                        name: 'policy Name',
                        selector: (row: any) => row.policyName,
                      },
                      {
                        name: 'accrual Month',
                        selector: (row: any) => row.accrualMonth,
                      },

                      {
                        name: 'policyAmount',
                        selector: (row: any) => row.policyAmount,
                      },
                      {
                        name: 'accrual cycle',
                        selector: (row: any) => row.cycle_on_employment_start ? 'true' : 'false',
                      },
                      {
                        name: 'cycle employment start',
                        selector: (row: any) => row.cycle_on_employment_start ? 'true' : 'false',
                      },

                      {
                        name: 'policy duration',
                        selector: (row: any) => row.policy_duration,
                      },
                      {
                        name: 'upfront allocation',
                        selector: (row: any) => row.upfront_allocation ? 'true' : 'false',
                      },
                      {
                        name: 'allowance type id',
                        selector: (row: any) => row.allowance_type_id,
                      },
                      {
                        name: 'policy start date',
                        selector: (row: any) => row.policy_start_date,
                      },
                      {
                        name: 'Actions',
                        selector: (row: any) =><div onClick={()=>{
                          setAllPolices(allPolices?.filter((pol:any)=>pol.id!==row.id))
                        }}> <img src="/Delete-icon.svg" alt="add" /></div>
                      },
                    ]}
                    data={[data]}
                  />
                </Accordion.Body>
              </Accordion.Item>
            )
          );
        })}
      </Accordion>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validate={(values) => {
          const errors: Errors = {};
          if (!values.fiscal_year_start_month) {
            errors.fiscal_year_start_month = 'Required';
          }

          if (!values.fiscal_year_start_date) {
            errors.fiscal_year_start_date = 'Required';
          }

          if (allPolices.length === 0) {
            errors.allPolices = 'Required';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setShowPolicies(false)
         const result = calculatePolicies(allPolices.filter((data:any)=>data.id),{fiscal_year_start_month:parseInt(values?.fiscal_year_start_month)},  {employment_start_date: new Date()}, new Date());
         console.log(result)
         setResult(result)

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
            <br />
            <button
              className="button"
              type="button"
              onClick={() => {
                setAllPolices([
                  ...allPolices,
                  {
                    policyId: '',
                    policyName: '',
                    accrualMonth: '',
                    policyAmount: '',
                    accrual_cycle: false,
                    cycle_on_employment_start: false,
                    policy_duration: '',
                    upfront_allocation: false,
                    allowance_type_id: '',
                    policy_start_date: '',
                  },
                ]);
                setShowPolicies(true);
              }}
            >

              <img
                src="https://public-ac-site.netlify.app/images/img/create-item-btn.png"
                alt="add"
              />
              Add Policy
            </button>
            <br />
            <p className="error">
              {errors.allPolices && touched.allPolices && errors.allPolices}
            </p>
            <br />
            <button
              className="button full-width "
              type="submit"
             // disabled={isSubmitting}
            >
              Calculate
            </button>
          </form>
        )}
      </Formik>
      <br />
      {result && <>
        <h2 className="heading">Result</h2>
        <DataTable
                    columns={[
                      {
                        name: 'policy name',
                        selector: (row: any) => row.policy_name,
                      },
                      {
                        name: 'amount',
                        selector: (row: any) => row.amount,
                      },
                      {
                        name: 'remaining',
                        selector: (row: any) => row.remaining,
                      },
                      {
                        name: 'date',
                        selector: (row: any) => row.date?.toISOString(),
                      },
                      {
                        name: 'expiration',
                        selector: (row: any) => row.expiration?.toISOString(),
                      },
                      {
                        name: 'past allowance',
                        selector: (row: any) => result.past_allowance,
                      },
                      {
                        name: 'expiration',
                        selector: (row: any) => result.expiration,
                      },
                      {
                        name: 'policies',
                        selector: (row: any) => result.policies,
                      },
                      {
                        name: 'total',
                        selector: (row: any) => result.total,
                      },


                    ]}
                    data={result?.events  || []}
                  />
      </>}
    </div>
  );
};

export default BerechnenForm;
