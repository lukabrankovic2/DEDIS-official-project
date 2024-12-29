<script>
  import { onMount } from 'svelte';
  import { user } from '../stores/userStore.js';
  import { currentPage } from '../stores/pageStore.js';

  let expeditions = [];

  // Dynamically determine the backend URL
  const BACKEND_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://dedis-official-project.vercel.app';

  const fetchExpeditions = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/expeditions`);
      if (response.ok) {
        expeditions = await response.json();
        expeditions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
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

  const navigateToExpedition = (id) => {
    currentPage.set('singleExped');
    localStorage.setItem('selectedExpeditionId', id);
  };
</script>

<h1>Expeditions</h1>

{#if $user}
  <div class="button-container">
    <button on:click={() => currentPage.set('createExped')}>Create Expedition</button>
  </div>
{/if}

{#each expeditions as expedition}
  <div class="expedition">
    <h2>{expedition.title}</h2>
    <p><strong>Posted by:</strong> {expedition.user.username}</p>
    <p><strong>Date:</strong> {new Date(expedition.createdAt).toLocaleString()}</p>
    <p><strong>Members:</strong> {expedition.members}</p>
    <p><strong>Route:</strong> {expedition.route}</p>
    <p><strong>Description:</strong> {expedition.description}</p>
    <button on:click={() => navigateToExpedition(expedition._id)}>Read more</button>
  </div>
{/each}