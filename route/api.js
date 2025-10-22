import express from "express"
import * as feedbackController from "../controllers/feedbackController.js"

const api = express.Router()

api.get('/feedback', feedbackController.listFeedback)
api.post('/feedback', feedbackController.createNewFeedback)
api.put('/feedback/:id', feedbackController.updateFeedback)
api.delete('/feedback/:id', feedbackController.deleteFeedback)

export default api;