<script>
  import { writable } from 'svelte/store';
  import About from './routes/About.svelte';
  import News from './routes/News.svelte';

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
    <button on:click={() => changePage('about')}>About</button>
    <button on:click={() => changePage('news')}>News</button>
  </div>
</nav>

<main class:home={$currentPage === 'home'}>
  {#if $currentPage === 'home'}
    <!-- Home page content -->
    <div class="home-content">
      <img src="/logo2w.png" alt="Background Logo" class="background-logo" />
      <h1>Welcome to the Homepage!</h1>
    </div>
  {:else if $currentPage === 'about'}
    <About />
  {:else if $currentPage === 'news'}
    <News />
  {:else}
    <h1>Page not found</h1>
  {/if}
</main>
