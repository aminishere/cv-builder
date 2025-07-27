// server/src/ai/ollama.js
const { runOllama } = require('../child-process');

async function generateBulletPoints(resume, jobDesc) {
  const prompt = `
You are an expert resume writer.

Given the resume: """${resume}"""
And the job description: """${jobDesc}"""

Generate 3-5 achievement-focused bullet points tailored for the job.
  `.trim();

  const result = await runOllama(prompt);
  return result;
}

module.exports = { generateBulletPoints };
