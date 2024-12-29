<script>
  import { user } from '../stores/userStore.js'; // Import the user store
  import { currentPage } from '../stores/pageStore.js'; // Import the currentPage store

  let email = '';
  let password = '';

  // Dynamically determine the backend URL
  const BACKEND_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://dedis-official-project-git-main-lukabrankovic2s-projects.vercel.app';

  async function handleLogin() {
    if (!email || !password) {
      alert('Email and password are required.');
      return;
    }

    console.log('Sending login request with data:', { email, password });

    try {
      const response = await fetch(`${BACKEND_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful', data);
        user.set({ token: data.token, ...data.user }); // Ensure token is set in the user store
        currentPage.set('home');
      } else {
        const errorData = await response.json();
        console.error('Failed to login', errorData);
        alert('Failed to login: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('An error occurred. Please try again later.');
    }
  }
</script>

<h1>Login</h1>

<div class="signin-container">
  <form class="signin-form" on:submit|preventDefault={handleLogin}>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" bind:value={email} required />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" bind:value={password} required />
    </div>
    <div class="form-group">
      <button type="submit">Login</button>
    </div>
  </form>
</div>
