import React from 'react';
import {connect} from 'react-redux';
import Expenseform from './ExpenseForm';
import { startAddExpense } from '../../actions/expensify/expenses'

export class AddExpensePage extends React.Component {
    onSubmit = (expense) =>{
        this.props.startAddExpense(expense);
        this.props.history.push('/expensify');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="pahe-header__title">Add Expense</h1>
                    </div>
                </div>
                
                <div className="content-container">
                    <Expenseform 
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);