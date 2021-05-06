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
  async getChannelSections(channelId) {
    const response = await this.get(
      `/channelSections?part=snippet%2CcontentDetails%2Clocalizations%2Ctargeting%2Cid&channelId=${channelId}&key=${this.API_KEY}`
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
      `/commentThreads?part=snippet,id&maxResults=100&videoId=${videoId}&key=${this.API_KEY}`
    );
    return response;
  }
  async getPlayLists(playListIds) {
    const response = await this.get(
      `/playlists?part=snippet%2CcontentDetails%2Clocalizations%2Cstatus&maxResults=50&id=${playListIds}&maxResults=100&key=${this.API_KEY}`
    );
    return response;
  }
  async getPlayListItems(playListId) {
    const response = await this.get(
      `/playlistItems?part=snippet%2CcontentDetails%2Cid%2Cstatus&maxResults=50&playlistId=${playListId}&key=${this.API_KEY}`
    );
    return response;
  }
  async getRelatedVideos(relatedToVideoId) {
    const response = await this.get(
      `/search?part=snippet&maxResults=50&${relatedToVideoId}=f-Mpz_vKx28&type=video&key=${this.API_KEY}`
    );
    return response;
  }
}

export const youTubeService = new YouTubeService();
