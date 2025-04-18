import { Command } from 'commander';
import pc from 'picocolors';
import { version } from '../package.json';

// Command imports
import { buildCommand } from './commands/build.js';

/**
 * The main CLI program
 */
const program = new Command()
  .name('deck')
  .description('CLI for the deck presentation framework')
  .version(version, '-v, --version', 'Display the current version')
  .usage('<command> [options]');

// Register commands
program.addCommand(buildCommand());

// Add more commands as needed
program
  .command('new')
  .description('Create a new deck presentation')
  .action(() => {
    console.log(pc.green('Creating new deck...'));
    // Implementation will go here
  });

program
  .command('theme')
  .description('Install or manage themes')
  .action(() => {
    console.log(pc.green('Managing themes...'));
    // Implementation will go here
  });

/**
 * Run the CLI with the provided arguments
 */
export function run(args: string[] = process.argv.slice(2)) {
  program.parse(args);
}
