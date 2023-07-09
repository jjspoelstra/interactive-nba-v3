

export async function fetchData(pathnameYear) {
    const response = await fetch(`/api/data/${pathnameYear}`);
    const data = await response.json();
    return data;
  }
  











  