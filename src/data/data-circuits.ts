import { F1 } from './data-source';
import { paginationOption } from '../lib/utils';

export class CircuitData extends F1 {
  constructor() {
    super();
  }

  async getCircuits(pageElements: number = -1, page: number = 1) {
    if (pageElements === -1) {
      return await this.get('circuits.json?limit=1000', {
        cacheOptions: { ttl: 60 },
      });
    }
    return await this.get(
      `circuits.json?${paginationOption(pageElements, page)}`,
      {
        cacheOptions: { ttl: 60 },
      }
    );
  }

  async getCircuit(id: string) {
    return await this.get(`circuits/${id}.json`, {
      cacheOptions: { ttl: 60 },
    });
  }
}