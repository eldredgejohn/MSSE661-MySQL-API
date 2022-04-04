/**
 * Tables follow syntax:
 * - CREATE TABLE <table_name>(<column_name> <data_type> <options>, ...)
 *
 * Create a table called `soaps` (case-insensitive), with
 * - id as an integer/number that can't have null values, auto-increment it
 * - name with a max of 255 characters, cannot have null values
 * - created_date set to date and time created
 * - type with a max of 7 characters, has a default of 'custom'
 *
 * NOTE: order is important.
 * - columns can have multiple options attached (take `id` column for example)
 * - id is always first (helps with inserting)
 * - defaults always specifed last (helps with inserting)
 */
exports.CREATE_SOAPS_TABLE = `CREATE TABLE IF NOT EXISTS soaps(
  id int NOT NULL AUTO_INCREMENT,
  soap_id varchar(50) NOT NULL,
  name varchar(255) NOT NULL,
  created_date DATETIME DEFAULT CURRENT_TIMESTAMP(),
  type varchar(7) DEFAULT 'custom',
  PRIMARY KEY (id) 
)`;

// Get every soap
exports.ALL_SOAPS = `SELECT * FROM soaps`;

// Get every custom soap
exports.ALL_CUSTOM_SOAPS = `SELECT * FROM soaps WHERE type = "custom"`;

// Get every premade soap
exports.ALL_PREMADE_SOAPS = `SELECT * FROM soaps WHERE type = "premade"`;

// Get a single soap by id
exports.SINGLE_SOAP = `SELECT * FROM soaps WHERE user_id = ?`;

/**
 * Insert follows syntax:
 * - INSERT INTO <table_name>(<col_name1>, <col_name3>, <col_name3>, ...)
 *    VALUES(<value1>, <value2>, <value3>, ...)
 */
exports.INSERT_NEW_SOAP = `INSERT INTO soaps (soap_id, name, type) VALUES (?, ?, ?)`;

/**
 * Update follows syntax:
 * - UPDATE <table_name> SET <colum_name> = '<new_value>' WHERE <colum_name> = '<old_value>'
 *
 * NOTE: omitting `WHERE` will result in updating every existing entry.
 */
exports.UPDATE_SOAP = `UPDATE soaps SET name = ?, type = ? WHERE id = ?`;

// Delete a soap by id
exports.DELETE_SOAP = `DELETE FROM soaps WHERE id = ?`;
