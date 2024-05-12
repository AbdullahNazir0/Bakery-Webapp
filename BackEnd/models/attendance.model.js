import mongoose from 'mongoose'

const AttendanceSchema = new mongoose.Schema({
    timeIn: {
        type: Date,
    },
    timeOut: {
        type: Date,
    },
    absent: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true })

export const Attendance = mongoose.model('Attendance', AttendanceSchema)