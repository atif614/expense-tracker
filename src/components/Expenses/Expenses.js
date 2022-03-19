import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            {
                props.item.map(
                    expense => (
                        <ExpenseItem expense={expense} onDelete={props.onDelete} />
                    )
                )
            }
        </Card>
    )
}
export default Expenses;