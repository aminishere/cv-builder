const { runOllama } = require('../child-process');

async function scoreResumeForATS(resume, jobDesc) {
  const prompt = `
You are an ATS (Applicant Tracking System).

Given:
Resume: """${resume}"""
Job Description: """${jobDesc}"""

Evaluate the resume's match to the job. Score it from 0 to 100 based on:
- Skills and keyword match
- Relevant experience
- Job title alignment

Respond with only a number (no explanation).
  `.trim();

  const result = await runOllama(prompt);
  const score = parseInt(result.match(/\d+/)?.[0] || '0', 10);
  return score;
}

module.exports = { scoreResumeForATS };
