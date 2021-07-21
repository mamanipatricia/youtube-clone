import { apiKey, apiUrl } from "../config";
import BaseService from "./BaseServices";

export default class UserService extends BaseService {
  constructor() {
    super(apiUrl);
    this.API_KEY = apiKey;
  }

  createURLParams(newParams = {}) {
    const params = {
      part: "snippet,contentDetails,statistics",
      mine: true,
      key: this.API_KEY,
      ...newParams,
    };
    const searchParams = new URLSearchParams(params);
    return searchParams.toString();
  }

  async getUser() {
    const params = this.createURLParams({});
    const options = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };

    return await this.get(`/channels?${params}`, options);
  }

  async getUserChannel(newParams = {}) {
    const params = this.createURLParams({
      maxResults: 5,
      part: "snippet,subscriberSnippet,contentDetails,id",
      ...newParams,
    });
    const options = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };

    return await this.get(`/subscriptions?${params}`, options);
  }
}
