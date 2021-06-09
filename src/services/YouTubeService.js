import BaseService from "./BaseServices";
//* this service has to prepare data to send to BaseServices
import Formatter from "../Utils/Formatter";

export default class YouTubeService extends BaseService {
  constructor() {
    super(process.env.REACT_APP_API_URL);
    this.API_KEY = process.env.REACT_APP_API_KEY;
    this.formatter = new Formatter();
  }
  createURLParams(newParams = {}) {
    const params = {
      part: "snippet,contentDetails",
      maxResults: 50,
      key: this.API_KEY,
      ...newParams,
    };
    const searchParams = new URLSearchParams(params);
    return searchParams.toString();
  }

  async getVideo(videoId, newParams = {}) {
    const params = this.createURLParams({
      id: videoId,
      part: "snippet,contentDetails,statistics,status",
      maxResults: 1,
      ...newParams,
    });
    const response = await this.get(`/videos?${params}`);
    return this.formatter.formatVideo(response);
  }

  async getVideos(videosId, newParams = {}) {
    const params = this.createURLParams({
      id: videosId,
      part: "snippet,contentDetails,statistics,status",
      ...newParams,
    });
    const response = await this.get(`/videos?${params}`);
    return this.formatter.formatVideos(response);
  }

  async getChannel(channelId, newParams = {}) {
    const params = this.createURLParams({
      id: channelId,
      part: "snippet,statistics,brandingSettings,contentDetails,contentOwnerDetails,status,topicDetails",
      ...newParams,
    });
    const response = await this.get(`/channels?${params}`);
    return this.formatter.formatChannel(response);
  }

  async getChannelSections(channelId, newParams = {}) {
    const params = this.createURLParams({
      channelId: channelId,
      ...newParams,
    });
    const response = await this.get(`/channelSections?${params}`);
    return this.formatter.formatChannelSections(response);
  }

  async getChannels(channelIds, newParams = {}) {
    const params = this.createURLParams({
      id: channelIds,
      part: "snippet,brandingSettings,contentDetails,statistics",
      ...newParams,
    });
    const response = await this.get(`/channels?${params}`);
    return this.formatter.formatChannels(response);
  }

  async getSearch(keyword, newParams = {}) {
    const params = this.createURLParams({
      part: "snippet",
      q: keyword,
      maxResults: 20,
      ...newParams,
    });
    const response = await this.get(`/search?${params}`);
    return this.formatter.formatSearch(response);
  }

  async getThreadsComments(videoId, newParams = {}) {
    const params = this.createURLParams({
      videoId: videoId,
      part: "snippet",
      maxResults: 40,
      ...newParams,
    });
    const response = await this.get(`/commentThreads?${params}`);
    return this.formatter.formatThreatsComments(response);
  }

  async getPlaylists(playListIds, newParams = {}) {
    const params = this.createURLParams({
      id: playListIds,
      ...newParams,
    });
    const response = await this.get(`/playlists?${params}`);
    return this.formatter.formatPlaylists(response);
  }

  async getChannelPlaylists(channelId, newParams) {
    const params = this.createURLParams({
      channelId: channelId,
      ...newParams,
    });
    const response = await this.get(`/playlists?${params}`);
    return this.formatter.formatChannelPlaylists(response);
  }

  //todo remove this method when replacing getPlaylistItems in all places used with getPlayListItemsF
  async getPlayListItems(playListId, newParams = {}) {
    const params = this.createURLParams({
      playlistId: playListId,
      ...newParams,
    });
    const response = await this.get(`/playlistItems?${params}`);
    return response;
  }

  // new formatter for PlaylistItems
  async getPlayListItemsFormatted(playListId, newParams) {
    const params = this.createURLParams({
      playlistId: playListId,
      ...newParams,
    });
    const response = await this.get(`/playlistItems?${params}`);
    return this.formatter.formatPlaylistItems(response);
  }

  async getRelatedVideos(relatedToVideoId, newParams) {
    const params = this.createURLParams({
      relatedToVideoId: relatedToVideoId,
      type: "video",
      part: "snippet",
      ...newParams,
    });
    const response = await this.get(`/search?${params}`);
    return this.formatter.formatRelatedVideos(response);
  }

  async getTrendingVideos() {
    const params = this.createURLParams({
      chart: "mostPopular",
      regionCode: "BO",
      part: "snippet,contentDetails,statistics",
    });
    const response = await this.get(`/videos?${params}`);
    return this.formatter.formatTendingVideos(response);
  }
}

export const youTubeService = new YouTubeService();
