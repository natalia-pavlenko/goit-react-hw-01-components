import PropTypes from 'prop-types';
import {
  TransactionTable,
  TransactionHead,
  TableHead,
  TransactionRow, 
  TransactionTableBody,
  TableData,
  TableRow,
} from './TransactionHistory.styled';
const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionHead>
        <TransactionRow>
          <TableHead>type</TableHead>
          <TableHead>amount</TableHead>
          <TableHead>currency</TableHead>
        </TransactionRow>
      </TransactionHead>

      <TransactionTableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRow>
          );
        })}
      </TransactionTableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
