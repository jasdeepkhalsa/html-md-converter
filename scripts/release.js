import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const paths = [
  path.join(__dirname, '..', 'package.json'),
  path.join(__dirname, '..', 'vscode-extension', 'package.json')
];

const versionType = process.argv[2] || 'patch';
const isForceTag = process.argv.includes('--force-tag');

function runCommand(command) {
  try {
    console.log(`Executing: ${command}`);
    return execSync(command, { encoding: 'utf8', stdio: 'inherit' });
  } catch (_error) {
    console.error(`Error executing command: ${command}`);
    process.exit(1);
  }
}

function updateVersions() {
  let newVersion = '';

  paths.forEach((p, index) => {
    const pkg = JSON.parse(fs.readFileSync(p, 'utf8'));

    if (index === 0) {
      // Calculate new version based on first package.json
      const parts = pkg.version.split('.').map(Number);
      if (versionType === 'major') parts[0]++;
      else if (versionType === 'minor') parts[1]++;
      else if (versionType === 'patch') parts[2]++;
      else {
        // Specific version provided
        newVersion = versionType;
        pkg.version = newVersion;
      }

      if (!newVersion) {
        newVersion = parts.join('.');
      }
    }

    pkg.version = newVersion;
    fs.writeFileSync(p, JSON.stringify(pkg, null, 2) + '\n');
    console.log(`Updated ${p} to v${newVersion}`);
  });

  return newVersion;
}

const newVersion = updateVersions();
const tagName = `v${newVersion}`;

// Git workflow
runCommand('git add .');
runCommand(`git commit -m "chore: release ${tagName}"`);

if (isForceTag) {
  try {
    runCommand(`git tag -d ${tagName}`);
    runCommand(`git push origin :refs/tags/${tagName}`);
  } catch (_e) {
    // Ignore if tag doesn't exist
  }
}

runCommand(`git tag ${tagName}`);
runCommand('git push origin main');
runCommand(`git push origin ${tagName}`);

console.log(`\nSuccessfully released ${tagName}! 🎉`);
