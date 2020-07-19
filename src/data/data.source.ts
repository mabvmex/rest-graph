import { RESTDataSource } from 'apollo-server-express';

export class F1 extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://ergast.com/api/f1';
  }
}
