// Function to toggle visibility of trainer details
function toggleTrainerDetails(trainerId) {
    var trainerDetails = document.getElementById(trainerId);
    if (trainerDetails.style.display === 'none') {
        trainerDetails.style.display = 'block';
    } else {
        trainerDetails.style.display = 'none';
    }
}

// Event listener to handle click on trainer information
document.addEventListener('DOMContentLoaded', function() {
    // Get all trainer headings
    var trainerHeadings = document.querySelectorAll('#trainers .trainer h3');

    // Add click event listener to each trainer heading
    trainerHeadings.forEach(function(heading) {
        heading.addEventListener('click', function() {
            var trainerId = this.parentNode.getAttribute('id');
            toggleTrainerDetails(trainerId);
        });
    });
});
