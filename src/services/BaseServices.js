// import { API_KEY, API_URL } from "./settings";
//! each service has to have a baseURL

export default class BaseService {
  constructor(url) {
    this.baseURL = url;
  }
  async get(endpoint) {
    return await fetch(`${this.baseURL}${endpoint}`, {
      method: "GET",
    }).then((res) => res.json());
  }
}
