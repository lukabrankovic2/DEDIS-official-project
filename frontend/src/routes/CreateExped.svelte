<script>
  import { user } from '../stores/userStore.js';
  import { get } from 'svelte/store';

  let title = '';
  let members = '';
  let route = '';
  let description = '';
  let image = null;

  const handleImageChange = (e) => {
    image = e.target.files[0];
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('members', members);
    formData.append('route', route);
    formData.append('description', description);
    formData.append('image', image);

    const token = get(user)?.token;

    try {
      const response = await fetch('http://localhost:3000/expeditions/create', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Expedition created successfully', data);
        alert('Expedition created successfully!');
      } else {
        const errorData = await response.json();
        console.error('Failed to create expedition', errorData);
        alert(`Failed to create expedition: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('An error occurred. Please try again later.');
    }
  };
</script>

<h1>Upload an expedition</h1>

<div class="signin-container">
  <form class="signin-form" on:submit|preventDefault={handleSubmit}>
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
    <div class="form-group">
      <label for="image">Expedition Image</label>
      <input type="file" id="image" accept="image/*" on:change={handleImageChange} required />
    </div>
    <div class="form-group">
      <button type="submit">Submit</button>
    </div>
  </form>
</div>