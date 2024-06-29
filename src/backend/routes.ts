
import express from 'express'
import agendaRoute from './agenda';
const router = express.Router();

router.post('/agenda',agendaRoute)