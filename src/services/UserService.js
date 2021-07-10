import BaseService from "./BaseServices";

export default class UserService extends BaseService {
  constructor() {
    super(process.env.REACT_APP_API_URL);
    this.API_KEY = process.env.REACT_APP_API_KEY;
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
}
