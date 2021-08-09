//! each service has to have a baseURL
export default class BaseService {
  constructor(url) {
    this.baseURL = url;
  }

  async get(endpoint, options = {}) {
    return await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      method: "GET",
    }).then((res) => res.json());
  }

  async post(endpoint, body, options = {}) {
    return await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  async put(endpoint, body, options = {}) {
    return await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      body: JSON.stringify(body),
      method: "PUT",
    }).then((res) => res.json());
  }

  async delete(endpoint, options = {}) {
    return await fetch(`${this.baseURL}${endpoint}`, {
      ...options,
      method: "DELETE",
    }).then((res) => res.json());
  }
}
