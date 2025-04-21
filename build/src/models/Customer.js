"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor({ _id, fullname, email, phone, country, subject, message, dateTime }) {
        this._id = _id;
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.country = country;
        this.subject = subject;
        this.message = message;
        this.dateTime = dateTime;
    }
    extractJSON() {
        return {
            _id: this._id,
            fullname: this.fullname,
            email: this.email,
            phone: this.phone,
            country: this.country,
            subject: this.subject,
            message: this.message,
            dateTime: this.dateTime
        };
    }
}
exports.default = Customer;
