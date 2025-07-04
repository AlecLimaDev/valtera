export async function load({ fetch, url }) {
  const nameUrl = url.searchParams.get('name') || '';

  if (!nameUrl.trim()) {
    return {
      fetchData: null,
      searchedName: null,
    };
  }

  const response = await fetch(`https://api.agify.io?name=${encodeURIComponent(nameUrl)}`);
  const fetchData = await response.json();

  return {
    fetchData,
    searchedName: nameUrl,
  };
}
