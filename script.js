document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    const feedbackData = { name, email, feedback };
    let feedbackList = JSON.parse(localStorage.getItem('feedbackList')) || [];
    feedbackList.push(feedbackData);
    localStorage.setItem('feedbackList', JSON.stringify(feedbackList));

    document.getElementById('feedbackForm').reset();
});

document.getElementById('printTableBtn').addEventListener('click', function() {
    window.open('table.html', '_blank');
});
