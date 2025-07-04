<script>
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";
  import Input from "$lib/input.svelte";
  import UserList from "$lib/user-list.svelte";
  export let data;

  let searchName = "";
  let searchNameDebounced = "";
  let timeout;

  $: {
    clearTimeout();
    setTimeout(() => {
      searchNameDebounced = searchName;
    }, 1000);
  }

  $: if (browser) {
    if (searchNameDebounced.trim()) {
      goto(`?name=${encodeURIComponent(searchNameDebounced.trim())}`);
    } else if (searchNameDebounced.length === 0) {
      goto("?");
    }
  }
</script>

<h1>Estimativa de nome - Voltera</h1>
<Input bind:value={searchName} placeholder="Digite seu nome" />
{#if data.api}
  <UserList name={data.api.name} age={data.api.age} />
{:else}
  <span>Digite um nome para começar a pesquisa.</span>
{/if}
