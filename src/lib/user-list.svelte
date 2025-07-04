<script>
  let { name, age } = $props();
</script>

<div class="response-data">
  <span>Nome: {name}</span>
  <span>Idade: {age}</span>
</div>

<style>
  .response-data {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 60px;
    font-size: 24px;
  }
</style>
