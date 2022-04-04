const con = require('../db-config');
const queries = require('../queries/soaps.queries');

/**
 * CRUD - Create, Read, Update, Delete
 * GET - Read
 * POST - Create
 * PUT - Update
 * DELETE - Delete
 */

exports.getAllSoaps = function(req, res) {
  con.query(queries.ALL_SOAPS, function(err, result, fields) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

exports.getAllCustomSoaps = function(req, res) {
  con.query(queries.ALL_CUSTOM_SOAPS, function(err, result, fields) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

exports.getAllPremadeSoaps = function(req, res) {
  con.query(queries.ALL_PREMADE_SOAPS, function(err, result, fields) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

// http://localhost:3000/soaps/1
exports.getSoap = function(req, res) {
  con.query(queries.SINGLE_SOAP, [req.params.taskId], function(err, result) {
    if (err) {
      res.send(err);
    }
    res.json(result);
  });
};

// http://localhost:3000/soaps
/**
 * POST request -
 * {
 *  name: 'A soap name'
 * }
 */
exports.createSoap = function(req, res) {
  con.query(queries.INSERT_NEW_SOAP, 
    [req.body.soap_id, req.body.name, req.body.type], 
    function(err, result) {
    if (err) {
      res.send(err);
    }
    console.log(result);
    res.json({ message: 'Number of records inserted: ' + result.affectedRows });
  });
};

// http://localhost:3000/soaps/1
/**
 * PUT request -
 * {
 *  name: 'A soap name',
 *  state: 'completed'
 * }
 */
exports.updateSoap = function(req, res) {
  con.query(
    queries.UPDATE_SOAP,
    [req.body.name, req.body.status, req.params.taskId],
    function(err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
    }
  );
};

// http://localhost:3000/soaps/1
exports.deleteSoap = function(req, res) {
  con.query(queries.DELETE_SOAP, [req.params.taskId], function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Deleted successfully.' });
  });
};
