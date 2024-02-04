import * as express from 'express';
import { Request, Response, NextFunction, Router } from 'express';

import { index, anime, upcoming } from '../controllers/api/v1/controller';

const router: Router = express.Router();

router.get('/', function (req: Request, res: Response, next: NextFunction) {
  index(req, res);
});

router.get('/anime/', function (req: Request, res: Response, next: NextFunction) {
  anime(req, res);
});

router.get('/upcoming/', function (req: Request, res: Response, next: NextFunction) {
  upcoming(req, res);
});

export default router;