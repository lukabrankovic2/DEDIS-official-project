<script>
  import { user } from '../stores/userStore.js';
  import { get } from 'svelte/store';

  let title = '';
  let members = '';
  let route = '';
  let description = '';

  const handleSubmit = async () => {
    const formData = {
      title,
      members,
      route,
      description,
    };

    const token = get(user)?.token;

    try {
      const response = await fetch('http://localhost:3000/expeditions/create', { // Directly use the backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Expedition created successfully', data);
      } else {
        const errorData = await response.json();
        console.error('Failed to create expedition', errorData);
      }
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };
</script>

<h1>Upload an expedition</h1>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-group">
    <label for="title">Expedition Title</label>
    <input type="text" id="title" bind:value={title} required />
  </div>
  <div class="form-group">
    <label for="members">Expedition Members</label>
    <input type="text" id="members" bind:value={members} required />
  </div>
  <div class="form-group">
    <label for="route">Expedition Route</label>
    <input type="text" id="route" bind:value={route} required />
  </div>
  <div class="form-group">
    <label for="description">Expedition Description</label>
    <textarea id="description" bind:value={description} required></textarea>
  </div>
  <button type="submit">Submit</button>
</form>