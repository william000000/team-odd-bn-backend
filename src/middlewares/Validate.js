import { check } from 'express-validator';

/**
 * @export
 * @class Validate
 */
class Validate {
  /**
    * Validate input
    * @static
    * @returns {object} errors
    */
  static signupRules() {
    return [
      check('firstName', 'first name should be valid').isAlpha(),
      check('lastName', 'last name should be valid').isAlpha(),
      check('email', 'email should be valid').trim().isEmail(),
      check('password', 'minimum password length is 6').isLength({ min: 6 }),
    ];
  }

  /**
    * Validate input
    * @static
    * @returns {object} errors
    */
  static signinRules() {
    return [
      check('email', 'email should be valid').trim().isEmail(),
      check('password', 'minimum password length is 6').isLength({ min: 6 }),
    ];
  }

  /**
    * Validate input
    * @static
    * @returns {object} errors
  */
  static requestOnewayTripRules() {
    const dates = new Date();
    const year = dates.getFullYear();
    const month = dates.getMonth();
    const day = dates.getDate();
    const startDates = new Date(year - 0, month, day).toDateString();
    return [
      check('city', 'city should be valid').isInt(),
      check('reason', 'reason should be characters').isLength({ min: 2 }),
      check('startDate', 'date should be validate like in this format(YYYY-DD--MM)').isBefore(startDates)
    ];
  }

  /**
  * Validate input
  * @static
  * @returns {object} errors
  */
  static roleRequest() {
    return [
      check('email', 'email should be valid').trim().isEmail(),
      check('id', 'ID should be an integer').isInt(),
    ];
  }
}
export default Validate;