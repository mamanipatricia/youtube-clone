import BaseService from "./BaseServices";

export default class CommentService extends BaseService {
  constructor() {
    super(process.env.REACT_APP_API_URL);
    this.API_KEY = process.env.REACT_APP_API_KEY;
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
        authorization: `Bearer ${localStorage.getItem("accessToken")} `,
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

    await this.post(`/commentThreads?${params}`, body, options);
  }
}