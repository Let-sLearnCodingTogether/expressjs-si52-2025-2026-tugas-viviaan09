import express from "express"
import * as feedbackController from "../controllers/feedbackController.js"
import * as authController from "../controllers/authController.js"
import {protect} from "../middleware/authMiddleware.js"

const api = express.Router()

api.get('/feedback', feedbackController.listFeedback)
api.post('/feedback', feedbackController.createNewFeedback)
api.put('/feedback/:id', feedbackController.updateFeedback)
api.delete('/feedback/:id', feedbackController.deleteFeedback)

api.post('/register', authController.register);
api.post('/login', authController.login);

export default api;