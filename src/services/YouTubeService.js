import BaseService from "./BaseServices";
//! this service has to prepare data to send to BaseServices

export default class YouTubeService extends BaseService {
  constructor() {
    super(process.env.REACT_APP_API_URL);
    this.API_KEY = process.env.REACT_APP_API_KEY;
  }
  async getVideo(videoId) {
    const response = await this.get(
      `/videos?id=${videoId}&part=snippet,contentDetails,statistics,status&key=${this.API_KEY}`
    );
    return response;
  }
  async getVideos(videosId) {
    const response = await this.get(
      `/videos?id=${videosId}&part=snippet,contentDetails,statistics,status&key=${this.API_KEY}`
    );
    return response;
  }
  async getChannel(channelId) {
    const response = await this.get(
      `/channels?id=${channelId}&part=snippet,statistics,brandingSettings,contentDetails,contentOwnerDetails,status,topicDetails&key=${this.API_KEY}`
    );
    return response;
  }
  async getChannels(channelIds) {
    const response = await this.get(
      `/channels?id=${channelIds}&part=snippet,statistics,brandingSettings,contentDetails,contentOwnerDetails,status,topicDetails&key=${this.API_KEY}`
    );
    return response;
  }
  async getSearch(keyword) {
    const response = await this.get(
      `/search?part=snippet&maxResults=35&q=${keyword}&key=${this.API_KEY}`
    );

    return response;
  }
  async getThreadsComments(videoId) {
    const response = await this.get(
      `/commentThreads?part=snippet,id&videoId=${videoId}&key=${this.API_KEY}`
    );
    return response;
  }
}

export const youTubeService = new YouTubeService();
