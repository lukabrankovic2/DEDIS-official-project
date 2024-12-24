<script>
  let email = '';
  let password = '';
  let username = '';

  // Dynamically determine the backend URL
  const BACKEND_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://dedis-official-project.vercel.app/';

  async function handleSubmit() {
    if (!username || !email || !password) {
      alert('All fields are required.');
      return;
    }

    try {
      const url = `${BACKEND_URL}/users/signup`;
      console.log(`Sending request to ${url}`);
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        alert('Successfully signed up!');
      } else {
        const errorText = await response.text();
        console.error('Sign up failed:', errorText);
        alert(`Sign up failed: ${errorText}`);
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('An error occurred. Please try again later.');
    }
  }
</script>

<div class="signin-container">
  <form class="signin-form" on:submit|preventDefault={handleSubmit}>
    <div class="form-group">
      <label for="username">Username</label>
      <input id="username" type="text" bind:value={username} required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" type="email" bind:value={email} required />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" type="password" bind:value={password} required />
    </div>
    <button type="submit">Sign Up</button>
  </form>
</div>
