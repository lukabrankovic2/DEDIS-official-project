<script>
  let email = '';
  let password = '';

  // Dynamically determine the backend URL
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

  async function handleLogin() {
    if (!email || !password) {
      alert('Email and password are required.');
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Login successful!');
        console.log(data.user); // Handle user details
      } else {
        const error = await response.json();
        alert(`Login failed: ${error.message}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  }
</script>

<div class="signin-container">
  <form class="signin-form" on:submit|preventDefault={handleLogin}>
    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" type="email" bind:value={email} required />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" type="password" bind:value={password} required />
    </div>
    <button type="submit">Login</button>
  </form>
</div>
