import { Summary } from '../Summary/index';
import { TransactionsTable } from '../TransactionsTable/index';

import { Container } from './style';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  )
}