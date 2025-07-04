export async function load({ fetch, url }) {
  const nameUrl = url.searchParams.get('name') || '';

  if (!nameUrl.trim()) {
    return {
      api: null,
      searchName: null,
    };
  }

  const response = await fetch(`https://api.agify.io?name=${encodeURIComponent(nameUrl)}`);
  const api = await response.json();

  return {
    api,
    searchName: nameUrl,
  };
}
