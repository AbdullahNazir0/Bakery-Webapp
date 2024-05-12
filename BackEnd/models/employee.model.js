import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema({
    avatar: {
        type: String,
    },
    fullName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: mongoose.Types.ObjectId,
        ref: 'Address',
        required: true,
    },
    attendance: [{
        type: mongoose.Types.ObjectId,
        ref: 'Attendance',
    }],
    salary: {
        type: Number,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    joiningDate: {
        type: Date,
        required: true,
    },
}, { timestamps: true })

export const Employee = mongoose.model('Employee', EmployeeSchema)