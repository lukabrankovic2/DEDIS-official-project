<script>
  import { onMount } from 'svelte';

  let email = '';
  let password = '';
  let username = '';

  async function handleSubmit() {
    if (!username || !email || !password) {
      alert('All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        alert('Successfully signed up!');
      } else {
        const error = await response.json();
        alert(`Sign up failed: ${error.message}`);
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
      <input
        type="text"
        id="username"
        bind:value={username}
        placeholder="Enter your username"
        required
      />
    </div>

    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="email"
        id="email"
        bind:value={email}
        placeholder="Enter your email"
        required
      />
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input
        type="password"
        id="password"
        bind:value={password}
        placeholder="Enter your password"
        required
      />
    </div>

    <button type="submit">Sign Up</button>
  </form>
</div>
