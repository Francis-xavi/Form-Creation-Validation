document.addEventListener("DOMContentLoaded", function () {
  async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
      const response = await fetch(apiUrl);
      const users = await response.json();

      // Clear loading message
      dataContainer.innerHTML = '';

      // Create and populate list
      const userList = document.createElement('ul');
      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        userList.appendChild(li);
      });

      // Add list to the page
      dataContainer.appendChild(userList);

    } catch (error) {
      // Display error message
      dataContainer.innerHTML = '';
      dataContainer.textContent = 'Failed to load user data.';
    }
  }

  // Call the function after DOM is ready
  fetchUserData();
});