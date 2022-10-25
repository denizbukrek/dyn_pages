import { Router } from 'express';
import { Authorization, Prefix } from '../middlewares/authorization';
import error from '../middlewares/middleware';
import { SystemController } from '../controllers/system';
import { AuthenticationController, UserController, VerifyController } from '../controllers/';

// create our router
var router = Router({ strict: true });

//             _     _     _ _
//            (_)   | |   | | |
//   _ __ ___  _  __| | __| | | _____      ____ _ _ __ ___
//  | '_ ` _ \| |/ _` |/ _` | |/ _ \ \ /\ / / _` | '__/ _ \
//  | | | | | | | (_| | (_| | |  __/\ V  V / (_| | | |  __/
//  |_| |_| |_|_|\__,_|\__,_|_|\___| \_/\_/ \__,_|_|  \___|
// middleware to use for all requests

router.get('/', function (req, res) {
	res.json({ message: 'DyPaGeS! App Api!' });
});

router.get(Prefix.urls, SystemController.ApiUrl);
router.get(Prefix.getPages, SystemController.GetPages);

router.use(error);
export default router;