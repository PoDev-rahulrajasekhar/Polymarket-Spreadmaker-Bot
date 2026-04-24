import chalk from "chalk";

const ts = () => new Date().toISOString();

export const logger = {
  info: (msg: string, ...extra: unknown[]) => {
    console.log(chalk.cyan(`${ts()} [INFO]`), msg, ...extra);
  },
  warn: (msg: string, ...extra: unknown[]) => {
    console.warn(chalk.yellow(`${ts()} [WARN]`), msg, ...extra);
  },
  error: (msg: string, err?: unknown) => {
    console.error(chalk.red(`${ts()} [ERROR]`), msg);
    if (err !== undefined) console.error(err);
  },
  success: (msg: string, ...extra: unknown[]) => {
    console.log(chalk.green(`${ts()} [OK]`), msg, ...extra);
  },
  debug: (msg: string, ...extra: unknown[]) => {
    console.log(chalk.gray(`${ts()} [DEBUG]`), msg, ...extra);
  },
};

export default logger;
