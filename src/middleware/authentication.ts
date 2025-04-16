import dotenv from 'dotenv'
import {Request, Response, NextFunction} from 'express'


dotenv.config()
const bearToken = process.env.BEAR_TOKEN


// Verify the bearer token in the request header
const bearVerify = async (req: Request, res: Response, next: NextFunction) => {
    if(req.headers.authorization === `Bearer ${bearToken}`)  next();
    else {
        res.status(401).json({
            proceed: false,
            message: 'InvalidToken'
        })
    }
}

export {
    bearVerify,
}