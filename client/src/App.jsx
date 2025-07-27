import { useState } from 'react';
import './App.css';

function App() {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const response = await fetch('http://localhost:5000/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeText, jobDescription })
      });
      if (!response.ok) throw new Error('Server error');
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError('Failed to fetch result.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>CV Builder AI</h1>
      <form className="card" onSubmit={handleSubmit}>
        <div>
          <textarea
            rows={6}
            placeholder="Paste your resume here..."
            value={resumeText}
            onChange={e => setResumeText(e.target.value)}
            style={{ width: '100%', marginBottom: '1em' }}
            required
          />
        </div>
        <div>
          <textarea
            rows={4}
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={e => setJobDescription(e.target.value)}
            style={{ width: '100%', marginBottom: '1em' }}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Insights'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {result && (
        <div className="card" style={{ textAlign: 'left', marginTop: '2em' }}>
          <h2>Results</h2>
          <div>
            <strong>Bullet Points:</strong>
            <ul>
              {Array.isArray(result.bullets) ? result.bullets.map((b, i) => <li key={i}>{b}</li>) : <li>{result.bullets}</li>}
            </ul>
          </div>
          <div>
            <strong>Gap Report:</strong>
            <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(result.gapReport, null, 2)}</pre>
          </div>
          <div>
            <strong>ATS Score:</strong>
            <pre>{JSON.stringify(result.atsScore, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
