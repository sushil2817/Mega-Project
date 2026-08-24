import mongoose,{Schema} from "mongoose";
import {TaskStatusEnum} from "../utils/contants"
const taskSchema = new Schema({
    tiele:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    project:{
        type:Schema.Types.ObjectId,
        ref:"Project",
        required:true,
    },
    assignedTo:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    assignedBy:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    status:{
        type:String,
        enum:AvailableTaskStatus,
        default:TaskStatusEnum.TODO
    },
    attachments:{
        type:[
            {
                url:String,
                mimetype:String,
                size:Number
            }
        ],
        default:[]
    }

},{timestamps:true})

export const Task = mongoose.model("Task",taskSchema)