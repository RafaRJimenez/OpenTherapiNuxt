import axios from 'axios';

class APIClient {
  constructor(private readonly url: string) {}

  public async getSpecialties(userId: string): Promise<Array<string>> {
    const { data } = await axios.get(`${this.url}/users/${userId}/specialties`);

    if (!data || !Array.isArray(data)) {
      throw Error('Invalid response');
    }

    return data.map(element => element.name);
  }

  public async getClients(userId: string): Promise<Array<string>> {
    const { data } = await axios.get(`${this.url}/users/${userId}/clients`);

    if (!data || !Array.isArray(data)) {
      throw Error('Invalid response');
    }

    return data.map(element => element.name);
  }
}

export default async ({ app }) => {
  const API_URL = process.env.API_URL || 'http://localhost:5000/api';
  app.api = new APIClient(API_URL);
};
