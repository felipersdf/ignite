import { useState, useEffect } from 'react';
import { Container } from './styles';

import { api } from '../../services/api';

export function TransactionsTable() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    api.get('transactions').then((response) => setTransactions(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Salário</td>
            <td className="deposit">R$10000</td>
            <td>Salário</td>
            <td>20/11/2010</td>
          </tr>
          <tr>
            <td>Ifood</td>
            <td className="withdraw">-R$100</td>
            <td>Alimentação</td>
            <td>20/11/2010</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
