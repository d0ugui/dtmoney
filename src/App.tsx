import { useState } from 'react';

import Modal from 'react-modal';

import { Header } from './components/Header/index';
import { Dashboard } from './components/Dashboard/index';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionsModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionsModalOpen(false)
  }
 
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
