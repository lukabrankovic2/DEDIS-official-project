<script>
  import { user } from '../stores/userStore.js';
  import { currentPage } from '../stores/pageStore.js';

  const navigateToCreateExped = () => {
    console.log('Navigating to CreateExped'); // Debug statement
    currentPage.set('createExped');
  };
</script>

<h1> Testing!!! </h1>

{#if $user}
  <button on:click={navigateToCreateExped}>Create Expedition</button>
{/if}