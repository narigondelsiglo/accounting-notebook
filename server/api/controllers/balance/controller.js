import TransactionsService from '../../services/transactions.service';

export class Controller {
  getBalance(req, res) {
    TransactionsService.getBalance()
      .then(r => res.json(r));
  }
}
export default new Controller();
