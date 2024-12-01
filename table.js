window.onload = function() {
    const feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    const table = document.getElementById('feedbackTable').getElementsByTagName('tbody')[0];
    feedbackList.forEach(feedbackData => {
        const newRow = table.insertRow();
        newRow.insertCell(0).textContent = feedbackData.name;
        newRow.insertCell(1).textContent = feedbackData.email;
        newRow.insertCell(2).textContent = feedbackData.feedback;
    });
};
