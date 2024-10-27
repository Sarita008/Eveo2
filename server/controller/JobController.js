const Job = require('../model/Job');
const DB = require('../database/db.json');

//-----Get all jobs------
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching jobs' });
    }
};

//-----Get a job by ID-------
exports.getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching job' });
    }
};

//-----Submit application for a job--------
exports.applyForJob = async (req, res) => {
    const { name, reason, available, resume } = req.body;

    // Here you would typically handle resume upload, save it to a cloud storage or file system
    // This example just logs it to the console
    console.log(`Application for job: ${req.params.id}`);
    console.log(`Name: ${name}`);
    console.log(`Reason: ${reason}`);
    console.log(`Available: ${available}`);
    console.log(`Resume: ${resume}`);

    // Send a response indicating that the application was received
    res.status(200).json({ message: 'Application submitted successfully!' });
};

//------Add a new job (for admin use)------
exports.createJob = async (req, res) => {
    const { title, location, description, duration, time, openings, experience, skills } = req.body;
    try {
        const newJob = new Job({ title, location, description, duration, time, openings, experience, skills });
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(500).json({ message: 'Error creating job', error });
    }
};
