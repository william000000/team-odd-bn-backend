import passport from 'passport';
import { Router } from 'express';
import '../../services/passport';
import UserController from '../../controllers/UserController';


const router = Router();
router.use(passport.initialize());
router.use(passport.session());
passport.serializeUser((user, done) => {
  done(null, user);
});

/**
 * @swagger
 *
 * /auth/facebook:
 *    post:
 *      summary: User login with facebook account
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          Logged in with facebook successfully
 */
/**
 * @swagger
 *
 * /auth/google:
 *    post:
 *      summary: User login with google account
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "200":
 *          Logged in with facebook successfully
 */
/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - access_token
 *        properties:
 *          access_token:
 *            type: string
 *        example:
 *           access_token: xx-xx-xx
 *
 */


router.post(
  '/facebook',
  passport.authenticate('facebook-token'),
  UserController.OAuthfacebook
);
router.post(
  '/google',
  passport.authenticate('google-plus-token'),
  UserController.OAuthgoogle
);
module.exports = router;
