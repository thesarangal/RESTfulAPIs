import mongoose from 'mongoose'

const Schema = mongoose.Schema

const refreshSchema = new Schema({
    token: {
        type: String, 
        unique: true // It will also enable indexing
    }
}, { timestamps: true })

export default mongoose.model('RefreshToken', refreshSchema, 'refreshTokens')