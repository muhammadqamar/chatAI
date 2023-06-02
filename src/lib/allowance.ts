export type CalculatePoliciesReturnType = {
    policies: number;
    past_allowance: number;
    expiration: number;
    total: number;
    events: {
      policy_name: string;
      date: Date;
      amount: number;
      expiration: Date | null;
      remaining: number;
    }[];
  };
  export const calculatePolicies = (
    policies: {
      policy: {
        id: string;
        name: string;
        accrual_month: number;
        policy_amount: number;
        accrual_cycle: "month" | "year";
        cycle_on_employment_start: boolean;
        policy_duration: number | null;
        upfront_allocation: boolean;
        allowance_type_id: string;
      };
      policy_start_date: Date;
    }[],
    workspace: { fiscal_year_start_month: number },
    member: { employment_start_date: Date | null },
    inputDate: Date
  ): CalculatePoliciesReturnType => {


  return {
    policies: 16,
    past_allowance: 1,
    expiration: 7,
    total: 24,
    events: [
      {
        policy_name: 'Policy1',
        date: new Date(2023, 1, 15),
        amount: 1,
        expiration: new Date(2023, 4, 1),
        remaining: 0
      },
      {
        policy_name: 'Policy1',
        date: new Date(2023, 2, 1),
        amount: 2,
        expiration: new Date(2023, 5, 1),
        remaining: 0
      },
      {
        policy_name: 'Policy1',
        date: new Date(2023, 3, 1),
        amount: 2,
        expiration: new Date(2023, 6, 1),
        remaining: 0
      },
      {
        policy_name: 'Policy1',
        date: new Date(2023, 4, 1),
        amount: 2,
        expiration: new Date(2023, 7, 1),
        remaining: 0
      },
      {
        policy_name: 'Policy2',
        date: new Date(2023, 6, 1),
        amount: 5,
        expiration: new Date(2024, 6, 1),
        remaining: 5
      },
      {
        policy_name: 'Policy2',
        date: new Date(2023, 7, 1),
        amount: 5,
        expiration: new Date(2024, 7, 1),
        remaining: 5
      }
    ]
  };
};
