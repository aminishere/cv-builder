// server/src/llm/analyze-skill-gaps.js
const { runOllama } = require('./ollama-runner');

async function analyzeSkillGaps(resume, jobDesc) {
  const prompt = `
You are a career coach.

Given:
Resume: """${resume}"""
Job Description: """${jobDesc}"""

List important technical skills, tools, or keywords from the job description that are **missing** in the resume.

Return the result as a plain list (no explanation).
  `.trim();

  const result = await runOllama(prompt);
  return result;
}

module.exports = { analyzeSkillGaps };


