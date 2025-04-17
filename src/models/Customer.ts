interface CustomerInterface {
    _id?: string | null
    fullname?: string
    email?: string
    phone?: string
    country?:string
    subject?: string
    message?: string
    dateTime?: Date
}

class Customer implements CustomerInterface {
    _id?: string | null
    fullname?: string
    email?: string
    phone?: string
    country?:string
    subject?: string
    message?: string
    dateTime?: Date

    constructor({_id, fullname,  email, phone,country, subject, message, dateTime}: CustomerInterface) {
        this._id = _id
        this.fullname = fullname
        this.email = email
        this.phone = phone
        this.country=country
        this.subject = subject
        this.message = message
        this.dateTime = dateTime
    }


    extractJSON():CustomerInterface {
        return {
            _id: this._id,
            fullname: this.fullname,
            email: this.email,
            phone: this.phone,
            country:this.country,
            subject: this.subject,
            message: this.message,
            dateTime: this.dateTime
        }
    }


}


export default Customer
export type {CustomerInterface}