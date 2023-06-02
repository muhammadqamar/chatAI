export function PolicyInput2({ index, policy, setPolicy }) {
    if (!policy || !policy.policy) {
        return null;
      }
    return (
      <div>
        <input
          value={policy.policy.id}
          onChange={e =>
            setPolicy(old => ({ ...old, policy: {...old.policy, id: e.target.value} }))
          }
          placeholder="Policy ID"
        />
        <input
          value={policy.policy.name}
          onChange={e =>
            setPolicy(old => ({ ...old, policy: {...old.policy, name: e.target.value} }))
          }
          placeholder="Policy Name"
        />
        <input
          value={policy.policy.accrual_month}
          onChange={e =>
            setPolicy(old => ({ ...old, policy: {...old.policy, accrual_month: parseInt(e.target.value)} }))
          }
          placeholder="Accrual Month"
          type="number"
        />
        <input
          value={policy.policy.policy_amount}
          onChange={e =>
            setPolicy(old => ({ ...old, policy: {...old.policy, policy_amount: parseFloat(e.target.value)} }))
          }
          placeholder="Policy Amount"
          type="number"
        />
        <input
          checked={policy.policy.accrual_cycle}
          onChange={e =>
            setPolicy(old => ({ ...old, policy: {...old.policy, accrual_cycle: e.target.checked} }))
          }
          type="checkbox"
        />
        <label>Accrual Cycle</label>
        <input
          checked={policy.policy.cycle_on_employment_start}
          onChange={e =>
            setPolicy(old => ({ ...old, policy: {...old.policy, cycle_on_employment_start: e.target.checked} }))
          }
          type="checkbox"
        />
        <label>Cycle on Employment Start</label>
        <input
          value={policy.policy.policy_duration || ""}
          onChange={e =>
            setPolicy(old => ({ ...old, policy: {...old.policy, policy_duration: parseInt(e.target.value)} }))
          }
          placeholder="Policy Duration"
          type="number"
        />
        <input
          checked={policy.policy.upfront_allocation}
          onChange={e =>
            setPolicy(old => ({ ...old, policy: {...old.policy, upfront_allocation: e.target.checked} }))
          }
          type="checkbox"
        />
        <label>Upfront Allocation</label>
        <input
          value={policy.policy.allowance_type_id}
          onChange={e =>
            setPolicy(old => ({ ...old, policy: {...old.policy, allowance_type_id: e.target.value} }))
          }
          placeholder="Allowance Type ID"
        />
        <input
          value={policy.policy_start_date}
          onChange={e =>
            setPolicy(old => ({ ...old, policy_start_date: new Date(e.target.value) }))
          }
          type="date"
        />
        <button onClick={() => setPolicy(null)}>Löschen</button>
      </div>
    );
  }