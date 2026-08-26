// import {Project} from "../models/project.model.js"
// import {ApiError} from "../utils/api-error.js"
// import {ProjectNote} from "../models/note.model.js"
// import {ApiResponse} from "../utils/api-response.js"
// import mongoose from "mongoose"


// const getNotes = async (req,res)=>{
//     // get all notes
//     const {projectId} = req.params;

//     const project = await Project.findById(projectId) 
    
//     if(!project){
//         throw new ApiError(404,"Proejct not Found")
//     }

//     const notes = await ProjectNote.find({
//         project: new mongoose.Types.ObjectId(projectId)
//     }).populate("createdBy","username fullName avatar")

//     return res.status(200).json(new ApiResponse(200,notes,"Notes fetch successfull"))

// }

// const getNoteById = async (req,res)=>{
//     // get note by id
//     const {noteId} = req.params;

//     const note = await ProjectNote.findById(noteId).populate("createdBy","username fullname avatar")
//     if(!note){
//         throw new ApiError(404,"Note not found")
//     }
//     return res.status(200).json(new ApiResponse(200,note,"Note fetch successfully"));
// }

// const createNote = async (req,res)=>{
//     // create note
//     const {projectId} = req.params;
//     const {content} = req.body;
//     const project = await Project.findById(projectId)
//     if(!project){
//         throw new ApiError(404,"Proejct not Found")
//     }
//     const note = ProjectNote.create({
//         project:new mongoose.Types.ObjectId(projectId),
//         content,
//         createdBy: new mongoose.Types.ObjectId(req.user._id)
//     })
//     const populatedNote =  await ProjectNote.findById(note._id).populate(
//         "createBy",
//         "username fullName avatar"
//     )
//     return res.status(200).json(new ApiResponse(200,populatedNote,"Note created successfully"));

// }

// const updateNote = async(req,res) =>{
//     // update note
//     const {noteId} = req.params;
//     const {content} = req.body;

//     const existingNote =  ProjectNote.findById(noteId);
//     if(!existingNote){
//         throw new ApiError(404,"Note not found")
//     }

//     const note = ProjectNote.findByIdAndUpdate(
//         noteId,
//         {content},
//         {new:true}
//     ).populate("createdBy", "username fullName avatar")

//     return res.status(200).json(new ApiResponse(200,note,"Note update successfully"));
// }

// const deleteNote = async (req,res) =>{
//     // delete note
//     const {noteID} = req.params;

//     const note = ProjectNote.findByIdAndDelete(noteID);

//     if(!note){
//         throw new ApiError(404,"Proejct not Found")
//     }

//     return res.status(200).json(new ApiResponse(200,note,"Note deleted successfully"));
// }

// export
// {
//     getNotes,
//     getNoteById,
//     createNote,
//     updateNote,
//     deleteNote
// }

import {Project, project} from "../models/project.models.js"
import {ProjectNote} from "../models/note.models.js"
// import {Note} from "../models/note.models.js"
import {ApiError} from "../utils/api-error.js"
import {ApiResponse} from "../utils/api-response.js"
import mongoose from "mongoose";

const getNotes = async (req,res) => {
    // get all notes
    const {projectId} = req.params;

    const project = projectId.findById(projectId) // Poject  mongoose
    if(!project) throw new ApiError(404, "Project not found")

        const notes = await ProjectNote.find({
            project: new mongoose.Types.ObjectId(projectId)
        }).populate("createdBy", "username fullname avatar")

        return res.status(200)
        .json(new ApiResponse(200,notes,"Notes fetched successfully"))
};

const getNoteById = async (req,res) => {
    const {noteId} = req.params

    const note = await ProjectNote.findById(noteId).populate("createdBy","username fullname avatar")

    if(!note) throw new ApiError(404,"Note not found")

        return res.status(200)
        .json(ApiResponse(200,note,"Note fetched successfully"))
};

const createNote = async (req,res)=>{
    const {projectId} = req.paramas;
    const {content} = req.body;

    const project = await Project.findById(projectId)

    if(!project) throw new ApiError(404,"Project not found");

    const note = ProjectNote.create({
        project : new mongoose.Types.ObjectId(projectId),
        content,
        createdBy: new mongoose.Types.ObjectId(req.user._id)
    })

    const populateNote = await ProjectNote.findById(note._id).populate("createdBy","username fullname avatar")

    return res.status(200)
    .res.json(ApiResponse(200,populateNote,"Note create successfullly"))

}

const updateNote = async (req,res)=>{
    const {noteId} = req.params
    const {content} = req.body

    const existingNote = ProjectNote.findById(noteId);

    if(!existingNote) throw new ApiError(404,"Note not found");

    const populateNote = ProjectNote.findByIdAndUpdate(noteId,{content},{new:true}).populate("createBy", "username fullname avatart")

    return new ApiResponse(200,populateNote,"Note updated successfully");
}

const deleteNote = async(req,res)=>{
    const {noteId} = req.paramas;

    const existingNote = ProjectNote.findById(noteId);

    if(!existingNote)  throw new ApiError(404,"Note not found");

    const noteDeleted = ProjectNote.findByIdAndDelete(noteId)

    return new ApiResponse(200,noteDeleted,"note deleted successfully")
}


export {
    updateNote,
    createNote,
    deleteNote,
    getNoteById,
    getNotes
}
