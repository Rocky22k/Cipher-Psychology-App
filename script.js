// Upload functionality
document.addEventListener('DOMContentLoaded', function() {
    const uploadZone = document.getElementById('uploadZone');
    const videoInput = document.getElementById('videoInput');
    const uploadBtn = document.getElementById('uploadBtn');

    // Click to upload
    uploadBtn.addEventListener('click', () => {
        videoInput.click();
    });

    uploadZone.addEventListener('click', () => {
        videoInput.click();
    });

    // Drag and drop functionality
    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.style.background = 'rgba(255, 255, 255, 0.2)';
    });

    uploadZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        uploadZone.style.background = 'rgba(255, 255, 255, 0.1)';
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.style.background = 'rgba(255, 255, 255, 0.1)';
        
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            handleVideoUpload(files[0]);
        }
    });

    // File input change
    videoInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            handleVideoUpload(e.target.files[0]);
        }
    });

    function handleVideoUpload(file) {
        // Check file type
        if (!file.type.startsWith('video/')) {
            alert('Please select a video file');
            return;
        }

        // Check file size (100MB limit)
        const maxSize = 100 * 1024 * 1024;
        if (file.size > maxSize) {
            alert('File size must be less than 100MB');
            return;
        }

        // Show processing message
        uploadZone.innerHTML = `
            <div class="upload-icon">⏳</div>
            <h3>Processing Video...</h3>
            <p>Analyzing your communication patterns</p>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
        `;

        // Simulate processing (in real app, this would call AI APIs)
        setTimeout(() => {
            simulateAnalysis();
        }, 2000);
    }

    function simulateAnalysis() {
        // Simulate AI analysis results
        uploadZone.innerHTML = `
            <div class="upload-icon">✅</div>
            <h3>Analysis Complete!</h3>
            <p>Your video has been successfully analyzed</p>
            <button class="upload-btn" onclick="location.reload()">Analyze Another Video</button>
        `;

        // Update dashboard metrics with new "results"
        updateDashboardMetrics();
    }

    function updateDashboardMetrics() {
        // Simulate updated scores
        const metrics = document.querySelectorAll('.metric-number');
        metrics[0].textContent = Math.floor(Math.random() * 20) + 80; // Confidence
        metrics[1].textContent = Math.floor(Math.random() * 15) + 85; // Authenticity
        metrics[2].textContent = Math.floor(Math.random() * 25) + 70; // Engagement
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
