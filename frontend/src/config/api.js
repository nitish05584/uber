const rawApiBaseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:8080';

export const API_BASE_URL = rawApiBaseUrl.replace(/\/+$/, '');
