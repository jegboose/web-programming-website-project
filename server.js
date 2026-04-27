import express from 'express';
import cors from 'cors';
import { body, validationResult } from 'express-validator';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001

app.use(cors());
app.use(express.json());

app.post('/api/contact', [
    body('name').trim().escape().notEmpty().withMessage('Name is required.'),
    body('email').isEmail().normalizeEmail().withMessage('Valid email is required.'),
    body('reportType').trim().escape().notEmpty().withMessage('Please select a report type.'),
    body('platform').trim().escape().notEmpty().withMessage('Platform is required.'),
    body('description').trim().escape().notEmpty().isLength({max: 1000}).withMessage('Description is required.'),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    console.log('Form submission received:', req.body)
    res.status(200).json({ success: true, message: 'Your report has been received.' });
})

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})



