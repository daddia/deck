import { Command } from 'commander';
import pc from 'picocolors';

/**
 * Creates the build command
 */
export function buildCommand() {
  return new Command('build')
    .description('Build a deck presentation for production')
    .option('-o, --output <dir>', 'Output directory', 'out')
    .option('--analyze', 'Analyze bundle size', false)
    .action(async (options) => {
      console.log(pc.green('Building deck presentation for production...'));
      console.log('Options:', options);

      // Implementation will go here
      // This will be imported by other packages through the subpath export
    });
}

/**
 * Standalone entry point for the build command
 */
export default function() {
  // Logic to run the build command when used directly
  console.log('Build command called directly');
}
