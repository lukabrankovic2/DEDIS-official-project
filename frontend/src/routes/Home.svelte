<script>
  import { onMount } from 'svelte';
  import { user } from '../stores/userStore.js';

  let members = [];

  onMount(async () => {
    try {
      const response = await fetch('/users');
      if (!response.ok) {
        throw new Error('Failed to fetch members');
      }
      members = await response.json();
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  });
</script>

<div class="home-content">
  <img src="/logo2w.png" alt="Background Logo" class="background-logo" />
  <h1>Welcome to the OAK official website!</h1>
</div>

<div class="home-container">
  <div class="left-section">
    <h2>About Us</h2>
    <p>OBALNI ALPINISTIČNI KLUB</p>
    <p>Zg. Škofije 14</p>
    <p>6281 Škofije</p>
    <p>Contact: info@obalniak.si</p>
  </div>

  <div class="middle-section">
    <h2>News</h2>
    <!-- Integrate Facebook API or other news content here -->
    <p>Latest news will be displayed here.</p>
  </div>

  <div class="right-section">
    <h2>Members</h2>
    <ul>
      {#each members as member}
        <li>{member.username}</li>
      {/each}
    </ul>
  </div>
</div>