import Customize from '../helpers/Customize';
import { users, roles } from '../database/models';

const verifyInputRoles = async (req, res, next) => {
  const { id } = req.params;
  const { email } = req.body;
  const { id: reqUserId } = req.user;
  const findRoleId = await roles.findOne({ where: { id } });
  const findEmail = await users.findOne({ where: { email } });
  const findId = await users.findOne({ where: { id: reqUserId } });

  if (!findRoleId) {
    return Customize.errorMessage(req, res, 'Role not exist', 404);
  }

  if (!findEmail) {
    return Customize.errorMessage(req, res, 'Email does not exist', 404);
  }

  if (findId.dataValues.id !== req.user.id) {
    return Customize.errorMessage(req, res, 'Please provide the correct super admin information', 403);
  }

  next();
};

export default verifyInputRoles;
