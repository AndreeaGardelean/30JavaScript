// speech recognition is a variable that lives in the browser on top of the window variable
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// create a new instance of speech recognition
const recognition = new SpeechRecognition();
// setting interimResult to true will return the results as we speak, otherwise the text is returned only when we finish speaking
recognition.interimResults = true;
recognition.lang = 'en-UK';

// create a paragraph
let paragraph = document.createElement('p');
const speech = document.querySelector('.speech');
speech.appendChild(paragraph);


recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');
  paragraph.textContent = transcript;

  if (e.results[0].isFinal) {
    paragraph = document.createElement('p');
    speech.appendChild(paragraph);
  };
});

recognition.addEventListener('end', recognition.start);

recognition.start();