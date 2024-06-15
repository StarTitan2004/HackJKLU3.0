
let recognition;

document.getElementById("startListeningBtn").addEventListener("click", function() {
    recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    document.getElementById("startListeningBtn").style.display = "none";
    document.getElementById("stopListeningBtn").style.display = "inline-block";

    recognition.onresult = function(event) {
        const result = event.results[0][0].transcript;
        document.getElementById("speechResult").textContent = result;
    };
    
    recognition.onerror = function(event) {
        console.error("Speech recognition error:", event.error);
    };
});

document.getElementById("stopListeningBtn").addEventListener("click", function() {
    if (recognition) {
        recognition.stop();
        document.getElementById("startListeningBtn").style.display = "inline-block";
        document.getElementById("stopListeningBtn").style.display = "none";
    }
});
