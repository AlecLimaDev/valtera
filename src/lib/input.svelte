<script>
  let {
    scriptName = "",
    value = $bindable(""),
    placeholder = "",
    type = "text",
  } = $props();
</script>

<input {type} {scriptName} {placeholder} bind:value class="input-search" />

<style>
  .input-search {
    width: 50%;
    padding: 25px;
    border: none;
    border-radius: 25px;
    background-color: rgba(255, 255, 255, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.2);
    color: black;
    font-size: 18px;
    font-weight: 800;
    box-shadow:
      10px 20px 20px rgba(0, 0, 0, 0.1),
      0 1px 0 rgba(255, 255, 255, 0.2);
  }

  .input-search:focus {
    outline: none;
    background-color: #fafafa;
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow:
      0 20px 60px rgba(31, 38, 135, 0.4),
      0 0 0 6px rgba(255, 255, 255, 0.1),
      0 1px 0 rgba(255, 255, 255, 0.3);
    transform: translateY(-3px);
  }
</style>
