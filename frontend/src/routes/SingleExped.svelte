<script>
  import { onMount } from 'svelte';
  import { user } from '../stores/userStore.js';

  let expedition = null;
  let comments = [];
  let newComment = '';

  const BACKEND_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://dedis-official-project-git-main-lukabrankovic2s-projects.vercel.app';

  const fetchExpedition = async (id) => {
    try {
      const response = await fetch(`${BACKEND_URL}/expeditions/${id}`);
      if (response.ok) {
        expedition = await response.json();
      } else {
        console.error('Failed to fetch expedition');
      }
    } catch (error) {
      console.error('Error fetching expedition:', error);
    }
  };

  const fetchComments = async (expeditionId) => {
    try {
      const response = await fetch(`${BACKEND_URL}/comments/expedition/${expeditionId}`);
      if (response.ok) {
        comments = await response.json();
      } else {
        console.error('Failed to fetch comments');
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const postComment = async () => {
    if (!newComment.trim()) return;

    try {
      const response = await fetch(`${BACKEND_URL}/comments/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${$user.token}`
        },
        body: JSON.stringify({ content: newComment, expeditionId: expedition._id })
      });

      if (response.ok) {
        newComment = '';
        fetchComments(expedition._id);
      } else {
        console.error('Failed to post comment');
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  onMount(() => {
    const id = localStorage.getItem('selectedExpeditionId');
    if (id) {
      fetchExpedition(id);
      fetchComments(id);
    }
  });
</script>

{#if expedition}
  <h1>{expedition.title}</h1>
  <p><strong>Posted by:</strong> {expedition.user.username}</p>
  <p><strong>Date:</strong> {new Date(expedition.createdAt).toLocaleString()}</p>
  <p><strong>Members:</strong> {expedition.members}</p>
  <p><strong>Route:</strong> {expedition.route.name}</p> <!-- Display route name -->
  <p><strong>Description:</strong> {expedition.description}</p>
  {#if expedition.image}
    <img src={`${BACKEND_URL}/uploads/${expedition.image}`} alt="{expedition.title}" />
  {/if}

  <div class="comments-section">
    <h2>Comments</h2>
    {#if $user}
      <div class="comment-input">
        <textarea bind:value={newComment} placeholder="Write a comment..."></textarea>
        <button on:click={postComment}>Post</button>
      </div>
    {/if}
    {#each comments as comment}
      <div class="comment">
        <p><strong>{comment.user.username}:</strong> {comment.content}</p>
        <p><small>{new Date(comment.createdAt).toLocaleString()}</small></p>
      </div>
    {/each}
  </div>
{:else}
  <p>Loading...</p>
{/if}