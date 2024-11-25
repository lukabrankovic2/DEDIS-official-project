<script>
  import { writable } from 'svelte/store';
  import About from './routes/About.svelte';
  import News from './routes/News.svelte';

  const currentPage = writable('home'); // Default page

  const changePage = (page) => {
    currentPage.set(page);
  };
</script>

<style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: lightblue;
    padding: 1rem 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    text-align: center;
  }

  nav button {
    background: transparent;
    color: #333;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    margin: 0 1rem;
  }

  nav button:hover {
    text-decoration: underline;
  }

  main {
    margin-top: 80px; /* Push the content below the fixed navbar */
    padding: 1rem;
    min-height: calc(100vh - 80px); /* Ensure it covers the full viewport height */
    box-sizing: border-box;
  }
</style>

<nav>
  <button on:click={() => changePage('home')}>Home</button>
  <button on:click={() => changePage('about')}>About</button>
  <button on:click={() => changePage('news')}>News</button>
</nav>

<main>
  {#if $currentPage === 'home'}
    <h1>Welcome to the Homepage!</h1>
  {:else if $currentPage === 'about'}
    <About />
  {:else if $currentPage === 'news'}
    <News />
  {:else}
    <h1>Page not found</h1>
  {/if}
</main>
