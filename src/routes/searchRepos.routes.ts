import { Router } from "express";
import { reposController } from "../controllers/index.controllers";

const router = Router();

router.get('/v1/api/repos/:username', reposController.getPublicRepos);

export { router as newRouter };