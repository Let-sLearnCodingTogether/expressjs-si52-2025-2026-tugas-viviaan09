import express from "express"
import * as feedbackController from "../controllers/feedbackController.js"
import * as authController from "../controllers/authController.js"
import {protect} from "../middleware/authMiddleware.js"

const api = express.Router()

api.get('/feedback', protect, feedbackController.listFeedback)
api.post('/feedback', protect, feedbackController.createNewFeedback)
api.put('/feedback/:id', protect, feedbackController.updateFeedback)
api.delete('/feedback/:id', protect, feedbackController.deleteFeedback)

api.post('/register', authController.register);
api.post('/login', authController.login);
api.get('/profile', protect, authController.getProfile);

export default api;