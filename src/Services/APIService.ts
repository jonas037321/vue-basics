export class APIService {
  baseUrl: string;
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  async post<T = any>(path: string, body?: any, headers?: Record<string, string>): Promise<T> {
    const url = this.baseUrl ? `${this.baseUrl.replace(/\/+$/,'')}/${path.replace(/^\/+/, '')}` : path;
    const defaultHeaders: Record<string, string> = { 'Content-Type': 'application/json' };
    try {
      const token = localStorage.getItem('token');
      if (token) defaultHeaders['Authorization'] = `Bearer ${token}`;

      const res = await fetch(url, {
        method: 'POST',
        headers: { ...defaultHeaders, ...(headers || {}) },
        body: body !== undefined ? JSON.stringify(body) : undefined,
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : null;

      if (!res.ok) {
        const message = data && data.message ? data.message : res.statusText;
        throw new Error(message);
      }

      return data as T;
    } catch (err) {
      throw err;
    }
  }
}

const apiService = new APIService();
export default apiService;
