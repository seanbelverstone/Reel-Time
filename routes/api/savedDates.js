// eslint-disable-next-line prettier/prettier

const SavedDatesController = require('../../controllers/SavedDatesController');

export default function (app) {
  app.route('/api/savedDates/')
    .post(SavedDatesController.create);

  app.route('/api/savedDates/:id')
    .get(SavedDatesController.get)
    .delete(SavedDatesController.delete);
}
