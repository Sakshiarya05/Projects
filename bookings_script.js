window.addEventListener('load', function() {
    const tableBody = document.querySelector('#appointments-table tbody');

    // Retrieve data from localStorage
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];

    // Populate table with appointment data
    appointments.forEach(app => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${app['patient-name']}</td>
            <td>${app['age']}</td>
            <td>${app['gender']}</td>
            <td>${app['blood-group']}</td>
            <td>${app['address']}</td>
            <td>${app['city']}</td>
            <td>${app['state']}</td>
        `;
        tableBody.appendChild(row);
    });
});