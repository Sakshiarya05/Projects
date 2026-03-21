// script.js
window.addEventListener('load', function() {
    let progressBar = document.getElementById('progress');
    let width = 0;

    // Simulate loading progress over 3 seconds
    let loadingInterval = setInterval(function() {
        if (width >= 100) {
            clearInterval(loadingInterval);
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('welcome-screen').style.display = 'flex';
            setTimeout(function() {
                document.getElementById('welcome-screen').style.display = 'none';
                document.getElementById('doctor-listing').style.display = 'flex';
                document.getElementById('nav-doctors').classList.add('active');
            }, 3000); // Simulate time to transition to Doctor Listing page (3 seconds)
        } else {
            width++;
            progressBar.style.width = width + '%';
        }
    }, 30); // Speed of the progress bar (3s total for 100%)
});

// Modal functionality
const bookAppointmentBtn = document.getElementById('book-appointment-btn');
const modal = document.getElementById('appointment-modal');
const closeModal = document.querySelector('.modal .close');

bookAppointmentBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Form submission handling to save data in localStorage
document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Handle file upload
    const fileInput = document.getElementById('file-upload');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            data['file-data'] = event.target.result;
            data['file-name'] = file.name;

            // Calculate Expected Appointment Date and Time
            const now = new Date();
            const expectedDate = new Date(now);
            expectedDate.setDate(expectedDate.getDate() + 3);
            data['expected-appointment-date'] = expectedDate.toISOString().split('T')[0];

            const expectedTime = new Date(now);
            expectedTime.setHours(expectedTime.getHours() + 18);
            data['expected-appointment-time'] = expectedTime.toTimeString().split(' ')[0];

            // Save data to localStorage
            let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
            appointments.push(data);
            localStorage.setItem('appointments', JSON.stringify(appointments));

            // Close the modal
            modal.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});
