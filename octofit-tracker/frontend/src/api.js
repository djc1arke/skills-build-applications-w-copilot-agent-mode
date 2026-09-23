// Supports both plain array responses and paginated `{ results: [...] }` responses.
export function extractResults(data) {
  if (Array.isArray(data)) {
    return data;
  }
  if (data && Array.isArray(data.results)) {
    return data.results;
  }
  return [];
}
