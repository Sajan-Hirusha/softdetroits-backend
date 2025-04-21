"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_1 = require("../middleware/authentication");
const contactInfo_1 = require("../controllers/contactInfo");
const router = (0, express_1.Router)();
router.post('/sendInfo', authentication_1.bearVerify, contactInfo_1.customerRequest);
exports.default = router;
