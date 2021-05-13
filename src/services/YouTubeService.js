import BaseService from "./BaseServices";
//! this service has to prepare data to send to BaseServices
import Formatter from "../Utils/Formatter";
export default class YouTubeService extends BaseService {
  constructor() {
    super(process.env.REACT_APP_API_URL);
    this.API_KEY = process.env.REACT_APP_API_KEY;
    this.formatter = new Formatter();
  }
  async getVideo(videoId) {
    const response = await this.get(
      `/videos?id=${videoId}&part=snippet,contentDetails,statistics,status&key=${this.API_KEY}`
    );
    return this.formatter.formatVideo(response);
  }
  async getVideos(videosId) {
    const response = await this.get(
      `/videos?id=${videosId}&part=snippet,contentDetails,statistics,status&maxResults=50&key=${this.API_KEY}`
    );
    return this.formatter.formatVideos(response);
  }
  async getChannel(channelId) {
    const response = await this.get(
      `/channels?id=${channelId}&part=snippet,statistics,brandingSettings,contentDetails,contentOwnerDetails,status,topicDetails&key=${this.API_KEY}`
    );
    return this.formatter.formatChannel(response);
  }
  async getChannelSections(channelId) {
    const response = await this.get(
      `/channelSections?part=snippet%2CcontentDetails%2Clocalizations%2Ctargeting%2Cid&channelId=${channelId}&key=${this.API_KEY}`
    );
    return this.formatter.formatChannelSections(response);
  }
  async getChannels(channelIds) {
    const response = await this.get(
      `/channels?id=${channelIds}&part=snippet,statistics,brandingSettings,contentDetails,contentOwnerDetails,status,topicDetails&key=${this.API_KEY}`
    );
    return this.formatter.formatChannels(response);
  }
  async getSearch(keyword) {
    const response = await this.get(
      `/search?part=snippet&maxResults=30&q=${keyword}&key=${this.API_KEY}`
    );
    return this.formatter.formatSearch(response);
  }
  async getThreadsComments(videoId) {
    const response = await this.get(
      `/commentThreads?part=snippet,id&maxResults=99&videoId=${videoId}&key=${this.API_KEY}`
    );
    return this.formatter.formatThreatsComments(response);
  }
  async getPlaylists(playListIds) {
    const response = await this.get(
      `/playlists?part=snippet,contentDetails,localizations,status&maxResults=50&id=${playListIds}&maxResults=100&key=${this.API_KEY}`
    );
    return this.formatter.formatPlaylists(response);
  }
  async getPlayListItems(playListId, params = "") {
    const response = await this.get(
      `/playlistItems?${params}part=snippet,contentDetails,id,status&maxResults=50&playlistId=${playListId}&key=${this.API_KEY}`
    );
    return response;
  }
  async getRelatedVideos(relatedToVideoId) {
    const response = await this.get(
      `/search?part=snippet&maxResults=50&relatedToVideoId=${relatedToVideoId}&type=video&key=${this.API_KEY}`
    );
    return this.formatter.formatRelatedVideos(response);
  }
}

export const youTubeService = new YouTubeService();
