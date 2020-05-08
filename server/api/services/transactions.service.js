import l from '../../common/logger';
import db from './transactions.db.service';

class TransactionsService {
  getBalance() {
    l.info(`${this.constructor.name}.getBalance()`);
    return db.getBalance();
  }

  all() {
    l.info(`${this.constructor.name}.all()`);
    return db.all();
  }

  byId(id) {
    l.info(`${this.constructor.name}.byId(${id})`);
    return db.byId(id);
  }

  create(name) {
    return db.insert(name);
  }
}

export default new TransactionsService();
