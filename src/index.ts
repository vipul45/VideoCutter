import ffmpeg from 'fluent-ffmpeg';
import path from 'path';

// Function to cut video based on start time and duration
const cutVideo = (
  inputPath: string,
  outputPath: string,
  startTime: number,
  duration: number,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .setStartTime(startTime) // Start time in seconds
      .setDuration(duration) // Duration in seconds
      .output(outputPath)
      .on('end', () => {
        console.log(`Video clip saved: ${outputPath}`);
        resolve();
      })
      .on('error', (err) => {
        console.error(`Error processing video: ${err.message}`);
        reject(err);
      })
      .run();
  });
};

// Main function to process the video
const processVideo = async () => {
  const inputVideo = path.join(__dirname, '../videos/sample.mp4');
  const userTimestamp = 15; // User-provided timestamp in seconds
  const clipDuration = 10; // Each clip is 10 seconds

  // Define output paths for the two clips
  const outputClip1 = path.join(__dirname, '../outputs/clip_5_15.mp4');
  const outputClip2 = path.join(__dirname, '../outputs/clip_15_25.mp4');

  try {
    // Cut first clip: 5-15 seconds (10 seconds before user timestamp)
    await cutVideo(inputVideo, outputClip1, userTimestamp - 10, clipDuration);
    // Cut second clip: 15-25 seconds (10 seconds after user timestamp)
    await cutVideo(inputVideo, outputClip2, userTimestamp, clipDuration);
    console.log('Video processing completed!');
  } catch (err) {
    console.error('Failed to process video:', err);
  }
};

// Run the process
processVideo();