const express = require('express');
const fs = require('fs');
const cors = require('cors');

const generateTailoredResume = require('./ollamaService');
const buildPDF = require('./latexBuilder');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/generate-resume', (req, res) => {
  const { jd } = req.body;
  const resumeData = JSON.parse(fs.readFileSync('./resumeData.json', 'utf8'));

  const prompt = `
You are a LaTeX expert. Given this job description:
"${jd}"
And this resume data:
${JSON.stringify(resumeData)}

Generate a LaTeX resume body only, using sections like \\section{}, \\subsection{}, \\textbf{}, etc. Do not include documentclass or begin{document}.
`;

  generateTailoredResume(prompt, (err, latexBody) => {
    if (err) return res.status(500).send('Error from Ollama');

    buildPDF(latexBody, (err, pdfPath) => {
      if (err) return res.status(500).send('PDF generation failed');
      res.sendFile(pdfPath, { root: '.' });
    });
  });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
