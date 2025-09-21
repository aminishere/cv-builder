# 🎯 CV Builder AI - Containerized Application

A React-based CV Builder application that uses AI to analyze resumes and job descriptions, providing insights, gap analysis, and ATS optimization recommendations.

## 🚀 Features

- **AI-Powered Analysis**: Analyzes resume against job descriptions
- **Gap Analysis**: Identifies skills gaps and provides recommendations
- **ATS Optimization**: Optimizes resume for Applicant Tracking Systems
- **Containerized**: Runs consistently in Docker containers
- **Modern UI**: Clean, responsive React interface

## 🐳 Quick Start with Docker

### Prerequisites
- Docker installed on your system
- Git (to clone the repository)

### Run the Application

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/cv-builder.git
cd cv-builder/client

# Build the Docker image
docker build -t cv-builder .

# Run the container
docker run -p 3000:3000 cv-builder
```

### Access the Application
Open your browser and navigate to: **http://localhost:3000**

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

```bash
# Navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📁 Project Structure

```
cv-builder/
├── client/                 # React frontend application
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   ├── Dockerfile         # Docker configuration
│   └── package.json       # Dependencies
├── server/                # Backend API server
│   ├── src/               # Server source code
│   └── package.json       # Server dependencies
└── README.md              # This file
```

## 🔧 Docker Commands

### Build the Image
```bash
docker build -t cv-builder .
```

### Run Container
```bash
# Run in foreground
docker run -p 3000:3000 cv-builder

# Run in background
docker run -d -p 3000:3000 cv-builder
```

### Manage Containers
```bash
# List running containers
docker ps

# Stop container
docker stop CONTAINER_ID

# Remove container
docker rm CONTAINER_ID

# Remove image
docker rmi cv-builder
```

## 🎯 How to Use

1. **Paste Your Resume**: Copy and paste your current resume text
2. **Add Job Description**: Paste the job description you're applying for
3. **Generate Insights**: Click "Generate Insights" to get AI analysis
4. **Review Results**: Get bullet points, gap analysis, and ATS score

## 🏗️ Technology Stack

- **Frontend**: React 19, Vite
- **Containerization**: Docker
- **Backend**: Node.js (separate server)
- **AI**: Custom AI analysis engine

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



- Docker team for containerization technology
- AI/ML community for inspiration

---

**Made with ❤️ and Docker**
