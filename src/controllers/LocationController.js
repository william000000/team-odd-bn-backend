import dotenv from 'dotenv';
import Customize from '../helpers/Customize';
import { cities } from '../database/models';

dotenv.config();
/**
 * @export
 * @class LocationController
 */
class LocationController {
  /**
   * An admin should be able to add locations
   * @static
   * @param {object} req request object
   * @param {object} res response object
   * @memberof LocationController
   * @returns {object} data
   */
  static async saveLocation(req, res) {
    try {
      const { name } = req.body;

      const newLocation = await cities.create({
        city: name
      });


      return Customize.successMessage(req, res, 'Location posted successfully', newLocation, 201);
    } catch (err) {
      return Customize.errorMessage(req, res, err.message, 500);
    }
  }
}
export default LocationController;