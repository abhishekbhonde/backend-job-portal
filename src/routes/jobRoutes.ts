import { Router } from 'express';
import { getJobs, getJobById, createJob, updateJob, deleteJob } from '../controllers/jobController';

const router = Router();

router.get('/', getJobs);
//@ts-ignore
router.get('/:id', getJobById);
router.post('/', createJob);
//@ts-ignore
router.put('/:id', updateJob);
//@ts-ignore
router.delete('/:id', deleteJob);

export default router;
