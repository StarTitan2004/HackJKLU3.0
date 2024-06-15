// feedback.js

// Check if the browser supports Web Speech API
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    const speechTextarea = document.getElementById('speech');
    const startButton = document.getElementById('startButton');

    recognition.continuous = true;
    recognition.interimResults = true;

    startButton.addEventListener('click', () => {
        startButton.textContent = 'Listening...';
        recognition.start();
    });

    recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');

        speechTextarea.textContent = transcript;
    };

    recognition.onspeechend = () => {
        startButton.textContent = 'Start Listening';
        recognition.stop();
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        startButton.textContent = 'Start Listening';
        recognition.stop();
    };
} else {
    // If Web Speech API is not supported
    console.error('Speech recognition not supported in this browser.');
    startButton.disabled = true;
}
