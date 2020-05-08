import pino from 'pino';

const l = pino({
  name: 'accounting',
  level: process.env.LOG_LEVEL || 'warn',
});

export default l;
