// appointments-script.js
window.addEventListener('load', function() {
    const tableBody = document.querySelector('#appointments-table tbody');

    // Retrieve data from localStorage
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    // Populate table with appointment data
    appointments.forEach(app => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${app['patient-name']}</td>
            <td>${app['doctor-name']}</td>
            <td>${app['pre-disease']}</td>
            <td>${app['still-suffering']}</td>
            <td>${app['opd-date']}</td>
            <td>${app['file-name'] ? `<a href="${app['file-data']}" target="_blank">View File</a>` : 'N/A'}</td>
            <td>${app['age']}</td>
            <td>${app['gender']}</td>
            <td>${app['blood-group']}</td>
            <td>${app['address']}</td>
            <td>${app['city']}</td>
            <td>${app['state']}</td>
            <td>${app['expected-appointment-date']}</td>
            <td>${app['expected-appointment-time']}</td>
        `;
        tableBody.appendChild(row);
    });
});
