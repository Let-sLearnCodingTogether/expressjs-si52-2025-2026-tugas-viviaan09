import feedbackModel from "../model/feedbackModel.js";

export const listFeedback = async (req, res) => {
    try {
        const data = await feedbackModel.find({});
        
        res.status(200).json({
            message: "List Feedback",
            data: data,
        });
    }catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

export const createNewFeedback = async (req, res) => {
    try {
        const request = req.body;
        console.log(request);

        const response = await feedbackModel.create({
            name: request.name,
            email: request.email,
            message: request.message,
        });

        res.status(201).json({
            message: "Data feedback berhasil dibuat",
            data: response,
        });
    }catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

export const updateFeedback = async (req, res) => {
    try {
        const id = req.params.id;
        const request = req.body;

    if (!id) {
        return res.status(400).json({
            message: "ID wajib diisi",
            data: null,
        });
    }

    const response = await feedbackModel.findByIdAndUpdate(id, {
        name: request.name,
        email: request.email,
        message: request.message,
    });

    if (!response) {
        return res.status(404).json({
            message: "Data feedback tidak ditemukan",
            data: null,
        });
    }

    res.status(200).json({
        message: "Data feedback berhasil diupdate",
        data: response,
    });

    }catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};

export const deleteFeedback = async (req, res) => {
    try {
        const id = req.params.id;

    if (!id) {
        return res.status(400).json({
            message: "ID wajib diisi",
            data: null,
        });
    }

    const response = await feedbackModel.findByIdAndDelete(id);

    if (response) {
        return res.status(200).json({
            message: "Data feedback berhasil dihapus",
            data: response,
        });
    }

    res.status(404).json({
        message: "Data feedback tidak ditemukan",
        data: null,
    });
    }catch (error) {
        res.status(500).json({
            message: error.message,
            data: null,
        });
    }
};