<script>
  import { onMount } from 'svelte';
  import { user } from '../stores/userStore.js';
  import { currentPage } from '../stores/pageStore.js';

  let expeditions = [];

  const fetchExpeditions = async () => {
    try {
      const response = await fetch('http://localhost:3000/expeditions');
      if (response.ok) {
        expeditions = await response.json();
      } else {
        console.error('Failed to fetch expeditions');
      }
    } catch (error) {
      console.error('Error fetching expeditions:', error);
    }
  };

  onMount(() => {
    fetchExpeditions();
  });

  const navigateToCreateExped = () => {
    console.log('Navigating to CreateExped'); // Debug statement
    currentPage.set('createExped');
  };
</script>

<h1>Expeditions</h1>

{#if $user}
  <button on:click={navigateToCreateExped}>Create Expedition</button>
{/if}

{#each expeditions as expedition}
  <div class="expedition">
    <h2>{expedition.title}</h2>
    <p><strong>Posted by:</strong> {expedition.user.username}</p>
    <p><strong>Date:</strong> {new Date(expedition.createdAt).toLocaleDateString()}</p>
    <p><strong>Members:</strong> {expedition.members}</p>
    <p><strong>Route:</strong> {expedition.route}</p>
    <p><strong>Description:</strong> {expedition.description}</p>
  </div>
{/each}