<script>
  import { writable } from 'svelte/store';
  import Reports from './routes/Reports.svelte';
  import News from './routes/News.svelte';
  import Home from './routes/Home.svelte';
  import Signin from './routes/Signin.svelte';

  const currentPage = writable('home'); // Current page state

  const changePage = (page) => {
    currentPage.set(page);
  };
</script>

<nav>
  <!-- Navbar with the logo -->
  <img src="/logo1w.png" alt="Navbar Logo" class="logo" />

  <div class="nav-buttons">
    <button on:click={() => changePage('home')}>Home</button>
    <button on:click={() => changePage('reports')}>Reports</button>
    <button on:click={() => changePage('news')}>News</button>
    <button on:click={() => changePage('signin')}>Sign In</button>
  </div>
</nav>

<main class:home={$currentPage === 'home'}>
  {#if $currentPage === 'home'}
    <Home />
  {:else if $currentPage === 'reports'}
    <Reports />
  {:else if $currentPage === 'news'}
    <News />
  {:else if $currentPage === 'signin'}
    <Signin />
  {:else}
    <h1>Page not found</h1>
  {/if}
</main>
