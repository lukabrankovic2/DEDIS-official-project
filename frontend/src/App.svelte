<script>
  import { writable } from 'svelte/store';
  import { user } from './stores/userStore.js'; // Import the user store
  import { currentPage } from './stores/pageStore.js';
  import Expeditions from './routes/Expeditions.svelte';
  import CreateExped from './routes/CreateExped.svelte';
  import CreateRoute from './routes/CreateRoute.svelte';
  import Routes from './routes/Routes.svelte';
  import Home from './routes/Home.svelte';
  import Signin from './routes/Signin.svelte';
  import Login from './routes/Login.svelte';
  import SingleExped from './routes/SingleExped.svelte';
  import Admin from './routes/Admin.svelte';

  $: console.log('Current page:', $currentPage); // Debug statement

  function handleLogout() {
    user.set(null); 
    currentPage.set('home');
  }
</script>

<nav>
  <img src="/logo1w.png" alt="Navbar Logo" class="logo" />
  {#if $user}
    <div class="user-info">
      <span>{$user.username}: {$user.role}</span>
    </div>
  {/if}
  <div class="nav-buttons">
    <button on:click={() => currentPage.set('home')}>Home</button>
    <button on:click={() => currentPage.set('expeditions')}>Expeditions</button>
    <button on:click={() => currentPage.set('routes')}>Routes</button>
    {#if $user?.role === 'admin'}
      <button on:click={() => currentPage.set('admin')}>Admin Console</button>
    {/if}
    {#if $user}
      <button on:click={handleLogout}>Logout</button>
    {:else}
      <button on:click={() => currentPage.set('signin')}>Sign In</button>
      <button on:click={() => currentPage.set('login')}>Log in</button>
    {/if}
  </div>
</nav>

<main class:home={$currentPage === 'home'}>
  {#if $currentPage === 'home'}
    <Home />
  {:else if $currentPage === 'expeditions'}
    <Expeditions />
  {:else if $currentPage === 'createExped'}
    <CreateExped />
  {:else if $currentPage === 'singleExped'}
    <SingleExped />
  {:else if $currentPage === 'routes'}
    <Routes />
  {:else if $currentPage === 'createRoute'}
    <CreateRoute />
  {:else if $currentPage === 'signin'}
    <Signin />
  {:else if $currentPage === 'login'}
    <Login />
  {:else if $currentPage === 'admin'}
    <Admin />
  {:else}
    <h1>Page not found</h1>
  {/if}
</main>