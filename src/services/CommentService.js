import { apiKey, apiUrl } from "../config";
import BaseService from "./BaseServices";
import RecordService from "./RecordService";

export default class CommentService extends BaseService {
  constructor() {
    super(apiUrl);
    this.API_KEY = apiKey;
    this.recordService = new RecordService();
  }

  createURLParams(newParams = {}) {
    const params = {
      part: "snippet",
      key: this.API_KEY,
      ...newParams,
    };
    const searchParams = new URLSearchParams(params);
    return searchParams.toString();
  }

  async addComment(comment, videoId) {
    const params = this.createURLParams({});
    const options = {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    const body = {
      snippet: {
        videoId: videoId,
        topLevelComment: {
          snippet: {
            textOriginal: comment,
          },
        },
      },
    };
    const url = `/commentThreads?${params}`;
    await this.post(url, body, options);
    await this.recordService.createRecord({ requestTo: url });
  }
}
