<script>
  import { messages } from '$lib/stores/messages.js'
  import { fly } from 'svelte/transition'

  let messageList = []
  let message
  let loading = false

  messages.subscribe(data => {
    messageList = data
  })

  async function handleSubmit(event) {
    loading = true

    messages.update(data => {
      return [...data, { type: 'message', message }]
    })
    message = ''

    const form = event.target
    const data = new FormData(form)

    const res = await fetch('/api/chatgpt', {
      method: 'POST',
      body: data
    })
    const resData = await res.json()
    
    messages.update(data => {
      return [...data, { type: 'answer', message: resData.content }]
    })
    
    loading = false
  }
</script>


<main>
  <h1>SvelteGPT</h1>
  <article>
    <form on:submit|preventDefault={handleSubmit}>
      <!-- <input type="text" bind:value={question} placeholder="Ask me anything" /> -->
      <input type="text" name="message" bind:value={message} placeholder="Ask me anything!" />
      {#if loading}
        <button aria-busy="true" disabled></button>
      {:else}
        <button>Send</button>
      {/if}
    </form>
  </article>
  {#if messageList.length > 0}
    <article class="responses">
      <ul>
        {#each messageList as message}
          <li class="{message.type === 'message' ? 'message' : 'answer'}" transition:fly={{ duration: 500, y: 70 }}>{message.message}</li>
        {/each}
      </ul>
      {#if loading}
        <div aria-busy="true"></div>
      {/if}
    </article>
  {/if}
</main>

<style>
  .responses {
    max-height: calc(100vh - 454px);
    overflow-y: scroll;
  }

  li.message, li.answer {
    max-width: 95%;
    margin-bottom: -1rem;
    padding: 0.5rem 1rem 2.5rem;
    border-radius: 0.25rem;
  }
  
  li.message {
    text-align: left;
    color: var(--h1-color);
    background-color: var(--primary);
  }

  li.answer {
    text-align: right;
    color: var(--h1-color);
    background-color: var(--secondary);
    margin-left: auto;
  }
</style>