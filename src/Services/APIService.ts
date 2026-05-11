export class APIService {
  baseUrl: string;
  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  //static hat den Vorteil, dass man nicht zuerst eine Instanz 
  // der Klasse erstellen muss, um die Methode aufzurufen, 
  // sondern direkt über die Klasse auf die Methode zugreifen kann.

  // Api Methode für Post
  //   sie wurde generisch programmiert <TRequest, TResponse>
  //  TRequest TResponse - diese namen sind frei wählbar
  //   sie werden in der Methode verwendet und stehen für den 
  //   Datentyp der Anfrage (TRequest) und den Datentyp der Antwort (TResponse)
  // Bsp: APIService.post<RegistrationRequest, RegistrationResponse>("http://localhost:8080/api/register", body) - hier wird TRequest zu RegistrationRequest und TResponse zu RegistrationResponse
  // Bsp: APIService.post<LoginRequest, LoginResponse>("http://localhost:8080/api/login", body) - hier wird TRequest zu RegistrationRequest und TResponse zu RegistrationResponse
// da die Methode generisch programmiert ist, kann sie für verschiedene antworten und anfragen
// verwendet werden, ohne dass der code der methode angepasst werden muss.

// die Methode ist asynchron und gibt entweder TResponse (z.B. RegistrationResponse) oder 
// null zurück falls ein Fehler auftritt --> Promise bedeutet, dass das ERgebnis
//   erst in der Zukunft vorliegt, da die methode asynchron ist

  async post<T = any>(path: string, body?: any, headers?: Record<string, string>): Promise<T> {
    const url = this.baseUrl ? `${this.baseUrl.replace(/\/+$/,'')}/${path.replace(/^\/+/, '')}` : path;
    const defaultHeaders: Record<string, string> = { 'Content-Type': 'application/json' };
    try {
      const token = localStorage.getItem('token');
      if (token) defaultHeaders['Authorization'] = `Bearer ${token}`;

      // fetch API... ist die in JS integrierte Methode,um HTTP Anfragen zu senden
      //  es gilt für Vue.js auch AXIOS (wir verwenden die fetch API)
      // bei fetch übergibt man die URI und ein Konfigurationsobjekt (2. Parameter der fetch Methode)
      const res = await fetch(url, {
        method: 'POST',
        headers: { ...defaultHeaders, ...(headers || {}) },
        body: body !== undefined ? JSON.stringify(body) : undefined,
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : null;

      // falls das Ergebnis des API Aufrufs nicht ok (200 - 299) ist (z.B. 400 oder 500 Fehler)
      //   Exception werfen
      if (!res.ok) {
        const message = data && data.message ? data.message : res.statusText;
        throw new Error(message);
      }

      // handelt es sich um einen 2xx Code wird die JSON Antwort in den 
      //   Typ (TResponse (RegistrationResponse)) umgewandelt
      return data as T;
    } catch (err) {
      if (err instanceof TypeError) {
        throw new Error(`Backend nicht erreichbar unter ${url}. Prüfe, ob die API läuft.`);
      }

      throw err instanceof Error ? err : new Error('Unbekannter API-Fehler.');
    }
  }
}

const apiService = new APIService();
apiService.baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
export default apiService;
