<script>
  let email = '';
  let password = '';

  function handleSubmit() {
    console.log('Username:', email);
    console.log('Password:', password);
  }
</script>

<div class="signin-container">
  <form class="signin-form" on:submit|preventDefault={handleSubmit}>
    <div class="form-group">
      <label for="email">Email</label>
      <input
        type="text"
        id="username"
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

    <button type="submit">Sign In</button>
  </form>
</div>
