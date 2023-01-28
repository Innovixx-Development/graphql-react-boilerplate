import dayjs from 'dayjs';

/* eslint-disable no-console */
interface Props {
  message: string;
  type: 'info' | 'error' | 'warn';
}

const createConsoleLog = ({ message, type }: Props) => {
  const dateFormatted = dayjs().format('DD-MM-YYYY HH:mm:ss');

  switch (type) {
    case 'warn':
      console.log(
        '\x1b[33m', `[${dateFormatted}] WARNING: ${message}`,
      );
      break;
    case 'error':
      console.log(
        '\x1b[31m', `[${dateFormatted}] ERROR: ${message}`,
      );
      break;
    default:
      console.log(
        '\x1b[37m', `[${dateFormatted}] ${message}`,
      );
      break;
  }
};

export const logger = {
  info: (message: string) => createConsoleLog({ message, type: 'info' }),
  warn: (message: string) => createConsoleLog({ message, type: 'warn' }),
  error: (message: string) => createConsoleLog({ message, type: 'error' }),
};
