import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        first: {
            type: String, required: true
        },
        last: {
            type: String, required: true
        }
    },
    email: {
        type: String,
        required: true,
        unique: true // It will also enable indexing
    },
    password: {
        type: String, required: true
    },
    role: {
        type: String, default: 'CUSTOMER'
    }
}, { timestamps: true })

export default mongoose.model('User', userSchema, 'users')