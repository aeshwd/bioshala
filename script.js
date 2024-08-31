document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    const progress = document.getElementById('progress');
    const progressText = document.getElementById('progress-text');
    const totalTasks = checkboxes.length;

    function updateProgress() {
        const checkedTasks = document.querySelectorAll('.task-checkbox:checked').length;
        const percentage = (checkedTasks / totalTasks) * 100;
        progress.value = percentage;
        progressText.textContent = `${Math.round(percentage)}%`;
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });
});
