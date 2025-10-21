import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema (
    {
        name : {
            type : String,
            trim : true,
            required : true
        },
        email : {
            type : String,
            required : true,
            trim : true
        },
        message : {
            type : String,
            trim : true,
            required : true
        },
    },
    {
        timestamps : true
    }
)

const feedbackModel = new mongoose.model("feedback", feedbackSchema)
export default feedbackModel