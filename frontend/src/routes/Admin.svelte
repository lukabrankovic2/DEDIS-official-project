<script>
  import { onMount } from 'svelte';
  import { user } from '../stores/userStore.js';

  let users = [];
  let selectedRoles = {}; 

  const BACKEND_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://dedis-official-project-git-main-lukabrankovic2s-projects.vercel.app';

  async function fetchUsers() {
    try {
      const response = await fetch(`${BACKEND_URL}/users`, {
        headers: {
          'Authorization': `Bearer ${$user.token}`
        }
      });
      if (response.ok) {
        users = await response.json();
        users.forEach(user => {
          selectedRoles[user._id] = user.role;
        });
      } else {
        console.error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  async function updateUserRole(userId) {
    const role = selectedRoles[userId];
    try {
      const response = await fetch(`${BACKEND_URL}/users/${userId}/role`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${$user.token}`
        },
        body: JSON.stringify({ role })
      });
      if (response.ok) {
        fetchUsers();
      } else {
        console.error('Failed to update user role');
      }
    } catch (error) {
      console.error('Error updating user role:', error);
    }
  }

  onMount(fetchUsers);
</script>

<h1>Admin Console</h1>

<table>
  <thead>
    <tr>
      <th>Username</th>
      <th>Email</th>
      <th>Role</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user}
      <tr>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <select bind:value={selectedRoles[user._id]}>
            <option value="rookie hiker">Rookie Hiker</option>
            <option value="junior hiker">Junior Hiker</option>
            <option value="senior hiker">Senior Hiker</option>
            <option value="alpine instructor">Alpine Instructor</option>
          </select>
        </td>
        <td>
          <button on:click={() => updateUserRole(user._id)}>Update Role</button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>