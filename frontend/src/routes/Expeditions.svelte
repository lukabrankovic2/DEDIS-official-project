<script>
  import { onMount } from 'svelte';
  import { user } from '../stores/userStore.js';
  import { currentPage } from '../stores/pageStore.js';

  let expeditions = [];
  let searchQuery = '';
  let filteredExpeditions = [];

  // Dynamically determine the backend URL
  const BACKEND_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://dedis-official-project-git-main-lukabrankovic2s-projects.vercel.app';

  const fetchExpeditions = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/expeditions`);
      if (response.ok) {
        expeditions = await response.json();
        expeditions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        await fetchLikeCounts(); // Ensure this is awaited
        filteredExpeditions = expeditions; // Update filteredExpeditions after fetching like counts
      } else {
        console.error('Failed to fetch expeditions');
      }
    } catch (error) {
      console.error('Error fetching expeditions:', error);
    }
  };

  const fetchLikeCounts = async () => {
    for (let expedition of expeditions) {
      try {
        const response = await fetch(`${BACKEND_URL}/expeditions/${expedition._id}/likes`);
        if (response.ok) {
          const data = await response.json();
          expedition.likeCount = data.count;
          console.log(`Expedition ${expedition._id} has ${expedition.likeCount} likes`); // Debugging line
        } else {
          console.error('Failed to fetch like count for expedition:', expedition._id);
        }
      } catch (error) {
        console.error('Error fetching like count for expedition:', expedition._id, error);
      }
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      filteredExpeditions = expeditions;
    } else {
      const query = searchQuery.toLowerCase();
      filteredExpeditions = expeditions.filter(expedition =>
        expedition.title.toLowerCase().includes(query) ||
        expedition.description.toLowerCase().includes(query)
      );
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
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

<div class="search-bar">
  <input
    type="text"
    placeholder="Search expeditions..."
    bind:value={searchQuery}
    on:keypress={handleKeyPress}
  />
  <button on:click={handleSearch}>Search</button>
</div>

{#each filteredExpeditions as expedition}
  <div class="expedition">
    <h2>{expedition.title}</h2>
    <p><strong>Posted by:</strong> {expedition.user.username}</p>
    <p><strong>Date:</strong> {new Date(expedition.createdAt).toLocaleString()}</p>
    <p><strong>Members:</strong> {expedition.members}</p>
    <p><strong>Route:</strong> {expedition.route.name}</p>
    <p><strong>Description:</strong> {expedition.description}</p>
    {#if expedition.image}
      <img src={`${BACKEND_URL}/uploads/${expedition.image}`} alt="{expedition.title}" />
    {/if}
    <p><strong>❤️</strong> {expedition.likeCount ?? 0}</p> <!-- Ensure likeCount is displayed -->
    <button on:click={() => navigateToExpedition(expedition._id)}>Read more</button>
  </div>
{/each}