// Get references to the audio elements
const stream1 = document.getElementById('stream1');
const stream2 = document.getElementById('stream2');
const stream3 = document.getElementById('stream3');
const stream4 = document.getElementById('stream4');
const stream5 = document.getElementById('stream5');
const stream6 = document.getElementById('stream6');
const stream7 = document.getElementById('stream7');

let currentStream = null;

// Function to stop the currently playing stream
function stopCurrentStream() {
  if (currentStream !== null) {
    currentStream.pause();
    currentStream = null;
  }
}

// Add event listeners to the buttons
document.getElementById('station1').addEventListener('click', () => {
  if (stream1.paused) {
    stopCurrentStream();
    stream1.src = 'https://tektite.streamguys1.com:5025/klcc.aac'; // Replace with actual URL for station 1
    stream1.play();
    currentStream = stream1;
  } else {
    stopCurrentStream();
  }
});

document.getElementById('station2').addEventListener('click', () => {
  if (stream2.paused) {
    stopCurrentStream();
    stream2.src = 'http://kwvaradio.uoregon.edu:8000/stream/2/'; // Replace with actual URL for station 2
    stream2.play();
    currentStream = stream2;
  } else {
    stopCurrentStream();
  }
});

document.getElementById('station3').addEventListener('click', () => {
  if (stream3.paused) {
    stopCurrentStream();
    stream3.src = 'https://krvm.org/stream/krvm-live.m3u'; // Replace with actual URL for station 3
    stream3.play();
    currentStream = stream3;
  } else {
    stopCurrentStream();
  }
});

document.getElementById('station4').addEventListener('click', () => {
  if (stream4.paused) {
    stopCurrentStream();
    stream4.src = 'http://streaming.kwax.com:8000/stream1'; // Replace with actual URL for station 4
    stream4.play();
    currentStream = stream4;
  } else {
    stopCurrentStream();
  }
});

document.getElementById('station5').addEventListener('click', () => {
  if (stream5.paused) {
    stopCurrentStream();
    stream5.src = 'https://stream.pacificaservice.org:9000/kepw_64'; // Replace with actual URL for station 5
    stream5.play();
    currentStream = stream5;
  } else {
    stopCurrentStream();
  }
});

document.getElementById('station6').addEventListener('click', () => {
  if (stream6.paused) {
    stopCurrentStream();
    stream6.src = 'https://jpr-ice.streamguys1.com/jpr-rhythm'; // Replace with actual URL for station 6
    stream6.play();
    currentStream = stream6;
  } else {
    stopCurrentStream();
  }
});



// Add more event listeners for additional stations







