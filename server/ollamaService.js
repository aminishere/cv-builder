const { spawn } = require('child_process');

function generateTailoredResume(prompt, callback) {
  const child = spawn('ollama', ['run', 'deepseek-r1:1.5b']);  // 👈 updated

  let output = '';
  child.stdout.on('data', data => output += data.toString());
  child.stderr.on('data', data => console.error('stderr:', data.toString()));

  child.on('close', () => callback(null, output));

  child.stdin.write(prompt);
  child.stdin.end();
}

module.exports = generateTailoredResume;
