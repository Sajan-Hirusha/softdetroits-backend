import { sendCustomerInquiry } from "../middleware/Mail/sendMessage";
import { Request, Response } from "express";
import Customer from "../models/Customer";

const customerRequest = async (req: Request, res: Response) => {
    // Process variables
    let proceed: boolean = false,
        message: string | null = null,
        content: Object | null = null,
        code: number = 200;

    try {
        console.log("Request body received:", req.body);

        const customer = new Customer(req.body);
        console.log("Customer object created:", customer);

        await sendCustomerInquiry(customer); // Send an email about the customer
        console.log("Customer inquiry email sent.");

        proceed = true;
        message = "Customer inquiry sent successfully.";
        code = 200;
    } catch (error) {
        console.error("Error in customerRequest:", error);
        message = "Failed to send customer inquiry.";
        code = 500;
    }

    // Response to the client
    res.status(code).json({
        proceed,
        content,
        message
    });
};

export { customerRequest };
