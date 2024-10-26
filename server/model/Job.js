const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String }, // e.g., 'Full-time' or '6 months contract'
    time: { type: String }, // e.g., '9 AM - 6 PM'
    openings: { type: Number }, // e.g., '3 openings'
    experience: { type: String }, // e.g., '2+ years'
    skills: { type: [String] } // e.g., ['JavaScript', 'React', 'Node.js']
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;