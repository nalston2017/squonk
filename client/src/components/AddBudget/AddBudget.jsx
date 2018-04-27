import React from 'react';
import BudgetSubmitButton from '../BudgetSubmitButton'

const AddBudget = props => (
  <div className="row">
    <div className="col-md-2">
      <input
        className="form-control text-center"
        type="text"
        name="budgetName"
        onChange={props.handleChange}
        value={props.value.budgetName}
        placeholder="Budget Name"
      />
    </div>
    <div className="col-md-3">
      <input
        className="form-control text-center"
        type="number"
        name="budgetPlannedAmount"
        onChange={props.handleChange}
        value={props.value.budgetPlannedAmount}
        placeholder=" Planned Amount $25, $100, $1000"
      />
    </div>
    <BudgetSubmitButton onClick={props.handleClick} />
  </div>
);

export default AddBudget;