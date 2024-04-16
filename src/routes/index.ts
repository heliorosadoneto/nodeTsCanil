import { Router } from "express";

import * as homeControler from "../controller/homeControler"
import * as searchController from "../controller/searchController";
const router = Router();

router.get('/', homeControler.home);
router.get('/dogs', homeControler.dogs);
router.get('/cats', homeControler.cats);
router.get('/fishes', homeControler.fishes)

router.get('/search', searchController.search)

export default router;