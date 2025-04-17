import {Router} from "express";
import {bearVerify} from "../middleware/authentication";
import {customerRequest} from "../controllers/contactInfo";

const router = Router()

router.post('/sendInfo', bearVerify, customerRequest)

export default router;