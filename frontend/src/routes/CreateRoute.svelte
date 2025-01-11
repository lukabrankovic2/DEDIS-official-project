<script>
  import { user } from '../stores/userStore.js';
  import { get } from 'svelte/store';

  let name = '';
  let description = '';
  let image = null;

  const handleImageChange = (e) => {
    image = e.target.files[0];
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);

    const token = get(user)?.token;

    try {
      const response = await fetch('http://localhost:3000/routes/create', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Route created successfully', data);
        alert('Route created successfully!');
      } else {
        const errorData = await response.json();
        console.error('Failed to create route', errorData);
        alert(`Failed to create route: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert('An error occurred. Please try again later.');
    }
  };
</script>

<h1>Create a Route</h1>

<div class="signin-container">
  <form class="signin-form" on:submit|preventDefault={handleSubmit}>
    <div class="form-group">
      <label for="name">Route Name</label>
      <input type="text" id="name" bind:value={name} required />
    </div>
    <div class="form-group">
      <label for="description">Route Description</label>
      <textarea id="description" bind:value={description} required></textarea>
    </div>
    <div class="form-group">
      <label for="image">Route Image</label>
      <input type="file" id="image" accept="image/*" on:change={handleImageChange} required />
    </div>
    <div class="form-group">
      <button type="submit">Submit</button>
    </div>
  </form>
</div>