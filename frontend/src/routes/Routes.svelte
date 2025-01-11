<script>
  import { onMount } from 'svelte';
  import { user } from '../stores/userStore.js';
  import { currentPage } from '../stores/pageStore.js';

  let routes = [];

  const BACKEND_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://dedis-official-project-git-main-lukabrankovic2s-projects.vercel.app';

  const fetchRoutes = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/routes`);
      if (response.ok) {
        routes = await response.json();
        routes.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      } else {
        console.error('Failed to fetch routes');
      }
    } catch (error) {
      console.error('Error fetching routes:', error);
    }
  };

  onMount(() => {
    fetchRoutes();
  });

  const navigateToCreateRoute = () => {
    currentPage.set('createRoute');
  };
</script>

<h1>Routes</h1>

{#if $user}
  <div class="button-container">
    <button on:click={navigateToCreateRoute}>Create Route</button>
  </div>
{/if}

{#each routes as route}
  <div class="route">
    <h2>{route.name}</h2>
    <p><strong>Description:</strong> {route.description}</p>
    {#if route.image}
      <img src={`${BACKEND_URL}/uploads/${route.image}`} alt="{route.name}" />
    {/if}
  </div>
{/each}