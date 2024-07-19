async function fetchUserData() {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
        // Fetch user data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        
        // Parse the response as JSON
        const users = await response.json();
        
        // Display user data in the DOM
        dataContainer.innerHTML = ''; // Clear any existing content

        data.forEach(user => {
            const userList = document.createElement('li');
            userList.textContent = `${user.name} (${user.email})`;
            dataContainer.appendChild(userList);
        });
    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('There has been a problem with your fetch operation:', error);
        dataContainer.textContent = 'Failed to load user data. Please try again later.';
        dataContainer.style.color = 'red';
    }
}

// Call the fetchUserData function to execute it
fetchUserData();



