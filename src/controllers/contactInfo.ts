import {sendCustomerInquiry} from "../middleware/Mail/sendMessage";
import { Request, Response } from "express"
import Customer from "../models/Customer";

const customerRequest = async (req: Request, res: Response) => {
    // Process variables
    let proceed: boolean = false, message: string | null = null, content: Object | null = null, code: number = 200;

    const customer = new Customer(req.body);

    sendCustomerInquiry(customer); // Send an email about the customer

    proceed = true;
    message = "Customer inquiry sent successfully.";
    code = 200;

    // Response to the client
    res.status(code).json({
        proceed,
        content,
        message
    });
};



export {customerRequest}