import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../../selectors/expensify/expenses';
import selectExpensesTotal from '../../selectors/expensify/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'gasto' : 'gastos' ;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Amor llevaremos el control de nuestro gastos</h1>
        <h1 className="page-header__title">Viendo <span>{expenseCount}</span> {expenseWord} de un total de <span>{formattedExpensesTotal}</span></h1>
        <div className="page-header__action" >
          <Link className="button" to="/create">Agregar Gasto</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
