const express = require('express');
const router = express.Router();
const { generateBulletPoints } = require('../ai/ollama');
const { analyzeSkillGaps } = require('../ai/gapAnalyzer');
const { scoreResumeForATS } = require('../ai/atsOptimizer');

router.post('/generate', async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    const [bullets, gapReport, atsScore] = await Promise.all([
      generateBulletPoints(resumeText, jobDescription),
      analyzeSkillGaps(resumeText, jobDescription),
      scoreResumeForATS(resumeText, jobDescription),
    ]);

    res.json({ bullets, gapReport, atsScore });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process resume' });
  }
});

module.exports = router;
