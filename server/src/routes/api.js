const express = require('express');
const router = express.Router();
const { generateBulletPoints } = require('../ai/ollama');
const { analyzeSkillGaps } = require('../ai/gapAnalyzer');
const { scoreResumeForATS } = require('../ai/atsOptimizer');
const { getCache, setCache } = require('../services/cache');

router.post('/generate', async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;
    const cacheKey = `${resumeText}-${jobDescription}`.slice(0, 200);
    const cached = getCache(cacheKey);
    if (cached) {
      console.log('⏪ In-Memory Cache Hit');
      return res.json({ ...cached, cached: true });
    }

    const [bullets, gapReport, atsScore] = await Promise.all([
      generateBulletPoints(resumeText, jobDescription),
      analyzeSkillGaps(resumeText, jobDescription),
      scoreResumeForATS(resumeText, jobDescription),
    ]);

    const result = { bullets, gapReport, atsScore };
    setCache(cacheKey, result);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process resume' });
  }
});

module.exports = router;
