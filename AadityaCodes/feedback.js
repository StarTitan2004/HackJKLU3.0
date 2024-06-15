// feedback.js

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);

    // Convert FormData to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Convert JSON to string
    const jsonString = JSON.stringify(jsonData);

    // Write form data to a text file
    const blob = new Blob([jsonString], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "feedback.txt");

    // Reset the form
    this.reset();
    alert("Thank you for your feedback!");
});
