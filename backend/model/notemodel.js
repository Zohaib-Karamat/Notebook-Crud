import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true 
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }

})

export default mongoose.model("notes",noteSchema)