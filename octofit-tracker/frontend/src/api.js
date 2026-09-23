// Resolves the logic-tier API base URL from the Codespace name, falling back to localhost.
const codespaceName = import.meta.env.VITE_CODESPACE_NAME;

export const API_BASE_URL = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export function apiUrl(resource) {
  return `${API_BASE_URL}/api/${resource}/`;
}

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
