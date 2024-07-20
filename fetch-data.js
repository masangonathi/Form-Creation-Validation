async function fetchUserData() {

    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try {
        // Fetch user data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error('HTTP error! Status: ${response.status}');
        }
        
        // Parse the response as JSON
        const users = await response.json();
        
        // Display user data in the DOM
        dataContainer.innerHTML = ''; // Clear any existing content

        const userList = document.createElement('ul');

        users.forEach(user => {
            const ListItem = document.createElement('li');
            ListItem.textContent = user.name; 
            userList.appendChild(ListItem);
        });

        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle any errors that occur during the fetch
        
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Call the fetchUserData function to execute it
    document.addEventListener('DOMContentLoaded', fetchUserData);



