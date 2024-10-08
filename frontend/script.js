document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');
    const fetchButton = document.getElementById('fetch-data');

    fetchButton.addEventListener('click', () => {
        // Fetch data from the backend API
        fetch('https://your-backend-url.onrender.com/api/data') // Replace with your actual backend URL
            .then(response => response.json())
            .then(data => {
                // Clear previous data
                dataContainer.innerHTML = '';

                // Display the fetched data
                data.forEach(item => {
                    const itemElement = document.createElement('p');
                    itemElement.textContent = `ID: ${item.id}, Name: ${item.name}, Value: ${item.value}`;
                    dataContainer.appendChild(itemElement);
                });
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    });
});
