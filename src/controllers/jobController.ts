import { Request, Response } from 'express';
import Job from '../models/jobModels';

export const getJobs = async (_req: Request, res: Response) => {
    const jobs = await Job.findAll();
    res.json(jobs);
};

export const getJobById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const job = await Job.findByPk(id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.json(job);
};

export const createJob = async (req: Request, res: Response) => {
    const job = await Job.create(req.body);
    res.status(201).json(job);
};

export const updateJob = async (req: Request, res: Response) => {
    const { id } = req.params;
    const [updated] = await Job.update(req.body, { where: { id } });
    if (!updated) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Job updated successfully' });
};

export const deleteJob = async (req: Request, res: Response) => {
    const { id } = req.params;
    const deleted = await Job.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ message: 'Job not found' });
    res.json({ message: 'Job deleted successfully' });
};
