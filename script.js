let currentProgress = 0;

function loadCourse(title, videoUrl, initialProgress) {
  document.getElementById('course-title').textContent = title;
  document.getElementById('video-frame').src = videoUrl;
  currentProgress = initialProgress;
  updateProgressBar();
}

function updateProgress() {
  if (currentProgress < 100) {
    currentProgress += 10;
    if (currentProgress > 100) currentProgress = 100;
    updateProgressBar();
  }
}

function updateProgressBar() {
  const bar = document.getElementById('progress-bar');
  const label = document.getElementById('progress-label');
  bar.value = currentProgress;
  label.textContent = `${currentProgress}%`;
}
