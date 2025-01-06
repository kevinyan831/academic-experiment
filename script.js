document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('info-form');
    const participantForm = document.getElementById('participant-form');
    const taskSelection = document.getElementById('task-selection');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const gender = document.getElementById('gender').value;

        // Store participant information (you can modify this part based on your needs)
        localStorage.setItem('participant_name', name);
        localStorage.setItem('participant_age', age);
        localStorage.setItem('participant_gender', gender);

        // Hide form and show task selection
        participantForm.classList.add('hidden');
        taskSelection.classList.remove('hidden');
    });
});

function selectTask(taskNumber) {
    // Redirect to the appropriate task page
    window.location.href = `task${taskNumber}.html`;
}
