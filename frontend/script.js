document.addEventListener('DOMContentLoaded', () => {
    const dataContainer = document.getElementById('data-container');
    const fetchButton = document.getElementById('fetch-data');

    fetchButton.addEventListener('click', () => {
        console.log('Fetch button clicked.'); // Log when the button is clicked

        // Fetch data from the backend API
        fetch('https://practical-connect.onrender.com/api/data') // Replace with your actual backend URL
            .then(response => {
                console.log('Response received:', response); // Log the raw response
                return response.json(); // Parse the response as JSON
            })
            .then(data => {
                console.log('Data fetched:', data); // Log the fetched data

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
                console.error('Error fetching data:', err); // Log any error that occurs
            });
    });
});
