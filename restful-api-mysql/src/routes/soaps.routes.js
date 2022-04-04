const express = require('express');
const controllers = require('../controllers/soaps.controller');

const soapsRoutes = express.Router();
/**
 * Express routes for Soaps.
 *
 * RESTful endpoints make for easily adding to existing API features.
 */

/**
 * Routes for all soaps. Evaluates to `/soaps/`.
 */
soapsRoutes.get('/custom', controllers.getAllCustomSoaps)
           .get('/premade', controllers.getAllPremadeSoaps)
           .get('/', controllers.getAllSoaps)
           .post('/', controllers.createSoap);

/**
 * Routes for a task by id. Evalutes to `/tasks/:taskId`.
 */
soapsRoutes
  .get('/:soapId', controllers.getSoap) // GET http://locahost:3000/soaps/1
  .put('/:soapId', controllers.updateSoap)
  .delete('/:soapId', controllers.deleteSoap);

module.exports = soapsRoutes;
