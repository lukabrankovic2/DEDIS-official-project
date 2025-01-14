<script>
  import { onMount } from 'svelte';
  import { user } from '../stores/userStore.js';

  let expedition = null;
  let comments = [];
  let newComment = '';
  let likeCount = 0;

  const BACKEND_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3000'
    : 'https://dedis-official-project-git-main-lukabrankovic2s-projects.vercel.app';

  const fetchExpedition = async (id) => {
    try {
      const response = await fetch(`${BACKEND_URL}/expeditions/${id}`);
      if (response.ok) {
        expedition = await response.json();
        fetchLikeCount(id);
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

  const fetchLikeCount = async (expeditionId) => {
    try {
      const response = await fetch(`${BACKEND_URL}/expeditions/${expeditionId}/likes`);
      if (response.ok) {
        const data = await response.json();
        likeCount = data.count;
      } else {
        console.error('Failed to fetch like count');
      }
    } catch (error) {
      console.error('Error fetching like count:', error);
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

  const likeExpedition = async () => {
    if (!$user) {
      console.error('User is not logged in');
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/expeditions/${expedition._id}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${$user.token}`
        },
        body: JSON.stringify({ userId: $user.id }) // Include user ID in the request body
      });

      if (response.ok) {
        fetchLikeCount(expedition._id);
      } else {
        console.error('Failed to like expedition');
      }
    } catch (error) {
      console.error('Error liking expedition:', error);
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
  <p><strong>Route:</strong> {expedition.route}</p> <!-- Ensure route is displayed as a string -->
  <p><strong>Description:</strong> {expedition.description}</p>
  {#if expedition.image}
    <img src={`${BACKEND_URL}/uploads/${expedition.image}`} alt="{expedition.title}" />
  {/if}

  <div class="like-section">
    <button on:click={likeExpedition}>Like</button>
    <span>  {likeCount}</span>
  </div>

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