'use client';
import React from 'react';

import {
  CalculatePoliciesReturnType,
  calculatePolicies,
} from '../lib/allowance';
import { PolicyInput2 } from './PolicyInput';
import ExtinguishForm from './Form/extinguishForm';
import BerechnenForm from './Form/berechnenForm';

export default function () {
  const [policies, setPolicies] = React.useState([]);
  const [workspace, setWorkspace] = React.useState({
    fiscal_year_start_month: 0,
  });
  const [showPolicies, setShowPolicies] = React.useState(false);
  const [inputDate, setInputDate] = React.useState(new Date());

  const [result, setResult] =
    React.useState<CalculatePoliciesReturnType | null>(null);

  const handleSubmit = () => {
    const result = calculatePolicies(policies, workspace, inputDate);
    setResult(result);
  };
  // const addPolicy = () => (

  //   setPolicies((old) => [
  //     ...old,
  //     {
  //       policy: {
  //         id: '',
  //         name: '',
  //         accrual_month: 0,
  //         policy_amount: 0,
  //         accrual_cycle: false,
  //         cycle_on_employment_start: false,
  //         policy_duration: null,
  //         upfront_allocation: false,
  //         allowance_type_id: '',
  //       },
  //       policy_start_date: new Date(),
  //     },
  //   ])

  return (
    <div>
      <h2 className="heading">Eingabeformular</h2>
      {/* <form onSubmit={handleSubmit}>
        {policies.map((policy, i) => (
          <PolicyInput2
            key={i}
            index={i}
            policy={policy}
            setPolicy={(newPolicy: any) => {
              setPolicies((old: any) =>
                old.map(({ p, j }: any) => (i === j ? newPolicy : p))
              );
            }}
          />
        ))}
        <button type="button" onClick={addPolicy}>
          Add Policy
        </button>
        <input
          type="number"
          onChange={(e) =>
            setWorkspace({ fiscal_year_start_month: parseInt(e.target.value) })
          }
          placeholder="Fiscal Year Start Month"
        />
        <input
          type="date"
          onChange={(e) => setInputDate(new Date(e.target.value))}
          placeholder="Input Date"
        />
        <button type="submit">Berechnen</button>
      </form> */}

      <div className="forms_section">
        <div className="">
          <BerechnenForm setShowPolicies={setShowPolicies} />
        </div>
        {showPolicies && <ExtinguishForm setShowPolicies={setShowPolicies} />}
      </div>
      {/* {result && (
        <div>
          <h2>Ergebnis</h2>
          <p>Policies: {result.policies}</p>
          <p>Past Allowance: {result.past_allowance}</p>
          <p>Expiration: {result.expiration}</p>
         
          {result.events.map(
            (
              event: {
                policy_name:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined;
                date: {
                  toString: () =>
                    | string
                    | number
                    | boolean
                    | ReactElement<any, string | JSXElementConstructor<any>>
                    | ReactFragment
                    | ReactPortal
                    | PromiseLikeOfReactNode
                    | null
                    | undefined;
                };
                amount:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined;
                expiration: { toString: () => any };
                remaining:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | ReactFragment
                  | ReactPortal
                  | PromiseLikeOfReactNode
                  | null
                  | undefined;
              },
              index: Key | null | undefined
            ) => (
              <div key={index}>
                <p>Policy Name: {event.policy_name}</p>
                <p>Date: {event.date.toString()}</p>
                <p>Amount: {event.amount}</p>
                <p>Expiration: {event.expiration?.toString() || 'None'}</p>
                <p>Remaining: {event.remaining}</p>
              </div>
            )
          )}
        </div>
      )} */}
    </div>
  );
}
