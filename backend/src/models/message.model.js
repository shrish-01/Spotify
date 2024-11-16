import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderIdD: { // Clerk user id
        type: String,
        required: true,
    },
    recieverId: { // Clerk user id
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export const Message = mongoose.model("Message", messageSchema);