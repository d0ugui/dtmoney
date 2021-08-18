import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model} from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model, 
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Salário',
          type: 'deposit',
          category: 'Developer',
          amount: 2500,
          createdAt: new Date('2021-08-17 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-08-17 11:00:00'),
        },
        {
          id: 3,
          title: 'Streaming',
          type: 'withdraw',
          category: 'Lazer',
          amount: 250,
          createdAt: new Date('2021-08-17 12:00:00'),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


