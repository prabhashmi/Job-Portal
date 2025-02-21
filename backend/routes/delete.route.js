import express from 'express';
import { Company } from '../models/companyModel.js';  // Import your Company model
import { isAuthenticated } from '../middleware/authMiddleware.js'; // Optional authentication middleware

const router = express.Router();

// DELETE a company by ID
router.delete('/delete/:id', isAuthenticated, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCompany = await Company.findByIdAndDelete(id);

        if (!deletedCompany) {
            return res.status(404).json({ success: false, message: "Company not found" });
        }

        res.status(200).json({ success: true, message: "Company deleted successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

export default router;
