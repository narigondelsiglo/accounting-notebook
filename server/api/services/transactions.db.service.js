import { v4 as uuid } from 'uuid';

class TransactionsDatabase {
  constructor() {
    this._data = {};
    this._balance = 0;
    // Unnecesary lock
    this._lock = false;
  }

  getBalance() {
    return Promise.resolve(this._balance);
  }

  all() {
    return Promise.resolve(Object.values(this._data));
  }

  byId(id) {
    return Promise.resolve(this._data[id]);
  }

  insert(data) {
    this._lock = true;

    if (!data || !data.type || !['debit', 'credit'].includes(data.type)) {
      return Promise.reject(Error('400'));
    }
    if (data.type === 'debit' && this._balance - data.amount < 0) {
      return Promise.reject(Error('403'));
    }
    const transaction = {
      id: uuid(),
      ...data,
      effectiveDate: new Date().toISOString(),
    };

    this._balance = data.type === 'credit'
      ? this._balance + data.amount
      : this._balance - data.amount;
    this._data[transaction.id] = transaction;
    this._lock = false;
    return Promise.resolve(transaction);
  }
}

export default new TransactionsDatabase();
