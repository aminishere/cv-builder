// server/src/child-process.js
const { spawn } = require('child_process');

function runOllama(prompt, model = 'mistral') {
  return new Promise((resolve, reject) => {
    const ollama = spawn('ollama', ['run', model], {
      stdio: ['pipe', 'pipe', 'inherit']
    });

    let output = '';

    ollama.stdout.on('data', (data) => {
      output += data.toString();
    });

    ollama.stdin.write(prompt);
    ollama.stdin.end();

    ollama.on('close', () => {
      resolve(output.trim());
    });

    ollama.on('error', (err) => {
      reject(err);
    });
  });
}

module.exports = { runOllama };
