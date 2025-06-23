const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

function buildPDF(latexBody, callback) {
  const templatePath = path.join(__dirname, 'templates', 'resume_template.tex');
  const outputDir = __dirname;
  const texPath = path.join(outputDir, 'generated.tex');
  const pdfPath = path.join(outputDir, 'generated.pdf');

  const template = fs.readFileSync(templatePath, 'utf8');
  const fullTex = template.replace('%%% INSERT_BODY_HERE %%%', latexBody);

  fs.writeFileSync(texPath, fullTex);

  exec(`pdflatex -output-directory="${outputDir}" "${texPath}"`, (err, stdout, stderr) => {
    if (err) {
      console.error('pdflatex error:', stderr);
      return callback(err);
    }
    callback(null, pdfPath);
  });
}

module.exports = buildPDF;
