import BaseService from "./BaseServices";
//* this service has to prepare data to send to BaseServices
import Formatter from "../Utils/Formatter";
import { apiKey, apiUrl } from "../config";
import { recordService } from ".";

export default class YouTubeService extends BaseService {
  constructor() {
    super(apiUrl);
    this.API_KEY = apiKey;
    this.formatter = new Formatter();
    // recordService recordService;
  }
  createURLParams(newParams = {}) {
    const params = {
      part: "snippet,contentDetails",
      maxResults: 8,
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
    const url = `/videos?${params}`;
    const response = await this.get(url);
    await recordService.createRecord({ requestTo: url });
    return this.formatter.formatVideo(response);
  }

  async getVideos(videosId, newParams = {}) {
    const params = this.createURLParams({
      id: videosId,
      part: "snippet,contentDetails,statistics,status",
      ...newParams,
    });
    const url = `/videos?${params}`;
    const response = await this.get(url);
    await recordService.createRecord({ requestTo: url });
    return this.formatter.formatVideos(response);
  }

  async getChannel(channelId, newParams = {}) {
    const params = this.createURLParams({
      id: channelId,
      part: "snippet,statistics,brandingSettings,contentDetails,contentOwnerDetails,status,topicDetails",
      ...newParams,
    });
    const url = `/channels?${params}`;
    const response = await this.get(url);
    await recordService.createRecord({ requestTo: url });
    return this.formatter.formatChannel(response);
  }

  async getChannelSections(channelId, newParams = {}) {
    const params = this.createURLParams({
      channelId: channelId,
      ...newParams,
    });
    const url = `/channelSections?${params}`;
    const response = await this.get(url);
    await recordService.createRecord({ requestTo: url });
    return this.formatter.formatChannelSections(response);
  }

  async getChannels(channelIds, newParams = {}) {
    const params = this.createURLParams({
      id: channelIds,
      part: "snippet,brandingSettings,contentDetails,statistics",
      ...newParams,
    });
    const url = `/channels?${params}`;
    const response = await this.get(url);
    await recordService.createRecord({ requestTo: url });
    return this.formatter.formatChannels(response);
  }

  async getSearch(keyword, newParams = {}) {
    const params = this.createURLParams({
      part: "snippet",
      q: keyword,
      maxResults: 15,
      ...newParams,
    });
    const url = `/search?${params}`;
    const response = await this.get(url);
    await recordService.createRecord({ requestTo: url });
    return this.formatter.formatSearch(response);
  }

  async getThreadsComments(videoId, newParams = {}) {
    const params = this.createURLParams({
      videoId: videoId,
      part: "snippet",
      maxResults: 4,
      ...newParams,
    });
    const url = `/commentThreads?${params}`;
    const response = await this.get(url);
    await this.recordService.createRecord({ requestTo: url });
    return this.formatter.formatThreatsComments(response);
  }

  async getPlaylists(playListIds, newParams = {}) {
    const params = this.createURLParams({
      id: playListIds,
      ...newParams,
    });
    const url = `/playlists?${params}`;
    const response = await this.get(url);
    await this.recordService.createRecord({ requestTo: url });
    return this.formatter.formatPlaylists(response);
  }

  async getChannelPlaylists(channelId, newParams) {
    const params = this.createURLParams({
      channelId: channelId,
      ...newParams,
    });
    const url = `/playlists?${params}`;
    const response = await this.get(url);
    await this.recordService.createRecord({ requestTo: url });
    return this.formatter.formatChannelPlaylists(response);
  }

  //todo remove this method when replacing getPlaylistItems in all places used with getPlayListItemsF
  async getPlayListItems(playListId, newParams = {}) {
    const params = this.createURLParams({
      playlistId: playListId,
      ...newParams,
    });
    const url = `/playlistItems?${params}`;
    const response = await this.get(url);
    await this.recordService.createRecord({ requestTo: url });
    return response;
  }

  // new formatter for PlaylistItems
  async getPlayListItemsFormatted(playListId, newParams) {
    const params = this.createURLParams({
      playlistId: playListId,
      ...newParams,
    });
    const url = `/playlistItems?${params}`;
    const response = await this.get(url);
    await this.recordService.createRecord({ requestTo: url });
    return this.formatter.formatPlaylistItems(response);
  }

  async getRelatedVideos(relatedToVideoId, newParams) {
    const params = this.createURLParams({
      relatedToVideoId: relatedToVideoId,
      type: "video",
      part: "snippet",
      ...newParams,
    });
    const url = `/search?${params}`;
    const response = await this.get(url);
    await this.recordService.createRecord({ requestTo: url });
    return this.formatter.formatRelatedVideos(response);
  }

  async getTrendingVideos() {
    const params = this.createURLParams({
      chart: "mostPopular",
      regionCode: "BO",
      part: "snippet,contentDetails,statistics",
    });
    const url = `/videos?${params}`;
    const response = await this.get(url);
    await this.recordService.createRecord({ requestTo: url });
    return this.formatter.formatTendingVideos(response);
  }
}
