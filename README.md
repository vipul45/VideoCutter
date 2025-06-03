🎥 Video Clip Extractor

A Node.js TypeScript project to extract video clips based on user-provided timestamps. This project cuts a video into two segments (e.g., 35-45 seconds and 45-55 seconds) using fluent-ffmpeg. Perfect for video processing tasks with a clean, extensible setup.

📋 Table of Contents

System Requirements
Installation
Install Chocolatey (Windows)
Install FFmpeg
Clone the Repository
Install Dependencies


Running the Project
Project Structure
Contributing
License


🛠 System Requirements
Before setting up the project, ensure your system meets these requirements:

Operating System: Windows 10/11, macOS, or Linux (Ubuntu, Debian, etc.)
Node.js: Version 16 or higher
Check with: node -v


npm: Version 7 or higher (comes with Node.js)
Check with: npm -v


FFmpeg: Required for video processing
Check with: ffmpeg -version


Git: For cloning the repository
Check with: git --version


Disk Space: At least 500 MB for dependencies and video files
Memory: 4 GB RAM or higher recommended
A video file (e.g., sample.mp4) to process (place in videos folder)


🚀 Installation
Follow these steps to set up the project on your system.
1. Install Chocolatey (Windows)
For Windows users, Chocolatey simplifies FFmpeg installation. Skip this if you’re on macOS/Linux or already have Chocolatey.

Open PowerShell as Administrator:
Right-click Start menu > "Windows PowerShell (Admin)"


Allow script execution (if prompted):Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned


Install Chocolatey:Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))


Verify installation:choco -v



2. Install FFmpeg
FFmpeg is required for video processing. Install it based on your OS:
Windows

Use Chocolatey (recommended):choco install ffmpeg


Or download manually from FFmpeg website and add to PATH.
Verify:ffmpeg -version



macOS

Install Homebrew (if not installed):/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


Install FFmpeg:brew install ffmpeg


Verify:ffmpeg -version



Linux (Ubuntu/Debian)

Update package list:sudo apt-get update


Install FFmpeg:sudo apt-get install ffmpeg


Verify:ffmpeg -version



3. Clone the Repository

Clone the GitHub repository:
git clone https://github.com/your-username/video-clip-extractor.git
cd video-clip-extractor

Replace your-username with your GitHub username or the actual repo URL.

Ensure the videos and outputs directories exist:
mkdir -p videos outputs


Place a video file (e.g., sample.mp4) in the videos directory.


4. Install Dependencies

Install Node.js dependencies:npm install


This installs fluent-ffmpeg, TypeScript, nodemon, and other dependencies listed in package.json.


🏃 Running the Project

Development Mode (with nodemon for auto-restart):
npm run dev


Watches for changes in src and processes the video.
Outputs clips (e.g., clip_35_45.mp4, clip_45_55.mp4) to the outputs directory.


Build and Run (for production):
npm run build
node dist/index.js


Verify Output:

Check the outputs directory for the generated clips.
Play the clips to confirm they cover 35-45 and 45-55 seconds.



Note: Ensure videos/sample.mp4 exists, or update src/index.ts with your video’s filename.

📁 Project Structure
video-clip-extractor/
├── videos/               # Input video files (e.g., sample.mp4)
├── outputs/              # Output video clips
├── src/                  # TypeScript source code
│   └── index.ts          # Main video processing logic
├── nodemon.json          # Nodemon configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation


🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Open a pull request.


📜 License
This project is licensed under the MIT License. See the LICENSE file for details.

Happy Video Processing! 🎬
