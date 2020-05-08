import TransactionsService from '../../services/transactions.service';

export class Controller {
  all(req, res) {
    TransactionsService.all()
      .then(r => res.json(r));
  }

  byId(req, res) {
    TransactionsService
      .byId(req.params.id)
      .then(r => {
        if (r) res.json(r);
        else res.status(404).send('Transaction not found');
      });
  }

  create(req, res) {
    TransactionsService
      .create(req.body)
      .then(r => res
        .status(201)
        .location(`/api/v1/transactions/${r.id}`)
        .json(r))
      .catch(e => (e.message === '403'
        ? res.status(403).send('Operation forbidden: Not enough funds')
        : res.status(400).send('Bad request')));
  }
}
export default new Controller();
