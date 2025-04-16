import {Router} from "express";
import {bearVerify} from "../middleware/authentication";

const router = Router()

router.post('/sendInfo', bearVerify, sendContactInfo)

export default router;