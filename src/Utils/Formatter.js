export default class Formatter {
  handleError(data) {
    if (data.error) {
      throw new Error(data.error.message);
    }
  }
  checkIfExistData(data) {
    if (data.pageInfo?.totalResults === 0 || data.items?.length === 0) {
      throw new Error("Data not found");
    }
  }

  formatVideo(data) {
    this.handleError(data);
    this.checkIfExistData(data);
    data = data.items[0];
    const video = {
      videoId: data.id,
      title: data.snippet.title,
      description: data.snippet.description,
      thumbnail: data.snippet.thumbnails.medium.url,
      viewCount: data.statistics.viewCount,
      publishedAt: data.snippet.publishedAt,
      likeCount: data.statistics.likeCount,
      dislikeCount: data.statistics.dislikeCount,
      duration: data.contentDetails.duration,
      channel: {
        channelId: data.snippet.channelId,
        channelName: data.snippet.channelTitle,
      },
    };
    return { data: video };
  }
  formatVideos(data) {
    this.handleError(data);
    this.checkIfExistData(data);

    const videos = data.items.map((video) => {
      return {
        videoId: video.id,
        title: video.snippet.title,
        description: video.snippet.description,
        channel: {
          channelId: video.snippet.channelId,
          channelName: video.snippet.channelTitle,
        },
        thumbnail: video.snippet.thumbnails.medium.url,
        viewCount: video.statistics.viewCount,
        publishedAt: video.snippet.publishedAt,
        duration: video.contentDetails.duration,
      };
    });
    return { data: videos };
  }

  formatChannel(data) {
    this.handleError(data);
    this.checkIfExistData(data);
    let channelData = {};
    channelData = {
      channelId: data.items[0].id,
      avatar: data.items[0].snippet.thumbnails.high.url,
      banner: data.items[0].brandingSettings.image?.bannerExternalUrl,
      channelName: data.items[0].brandingSettings.channel.title,
      subscribers: data.items[0].statistics.subscriberCount,
    };
    return { data: channelData };
  }
  formatChannels(data) {
    this.handleError(data);
    this.checkIfExistData(data);
    const channelData = data.items.map((channel) => {
      return {
        channelId: channel.id,
        avatar: channel.snippet.thumbnails.high.url,
        banner: channel.brandingSettings.image?.bannerExternalUrl,
        channelName: channel.brandingSettings.channel.title,
        subscribers: channel.statistics.subscriberCount,
      };
    });
    return { data: channelData };
  }

  formatChannelSections(data) {
    this.handleError(data);
    this.checkIfExistData(data);
    const playListObj = {};
    data.items?.forEach((item) => {
      //! TODO filter-> type: "multiplechannels"
      if (["singleplaylist", "multipleplaylists"].includes(item.snippet.type)) {
        item.contentDetails.playlists.forEach((itemPlayListID) => {
          playListObj[itemPlayListID] = {
            section: {
              position: item.snippet.position,
              //! todo fix when title undefined
              title: item.snippet.title || "",
              description: "",
              type: item.snippet.type,
            },
          };
        });
      }
    });
    return { data: playListObj };
  }

  formatSearch(data) {
    this.handleError(data);
    this.checkIfExistData(data);
    const channelsId = [];
    const videosId = [];
    data.items
      .filter((video) => video.id.kind === "youtube#video")
      .forEach((video) => {
        channelsId.push(video.snippet.channelId);
        videosId.push(video.id.videoId);
      });
    return { data: { channelsId, videosId } };
  }

  formatThreatsComments(data) {
    this.handleError(data);
    this.checkIfExistData(data);
    const commentThreadsData = data.items.map((comment) => {
      return {
        channel: {
          channelId:
            comment.snippet.topLevelComment.snippet.authorChannelId.value,
          channelName:
            comment.snippet.topLevelComment.snippet.authorDisplayName,
          avatar: comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
        },
        authorContent: {
          authorProfileImageUrl:
            comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
          authorName: comment.snippet.topLevelComment.snippet.authorDisplayName,
          publishedAt: comment.snippet.topLevelComment.snippet.publishedAt,
          textOriginal: comment.snippet.topLevelComment.snippet.textOriginal,
          likeCount: comment.snippet.topLevelComment.snippet.likeCount,
          dislikeCount: comment.snippet.topLevelComment.snippet.likeCount,
          authorChannelId: "",
          totalReplyCount:
            comment.snippet.topLevelComment.snippet.totalReplyCount,
          updatedAt: "",
        },
      };
    });
    return {
      data: { commentThreadsData, totalResults: data.pageInfo.totalResults },
    };
  }

  formatRelatedVideos(data) {
    this.handleError(data);
    this.checkIfExistData(data);
    const relatedData = data.items
      .filter((item) => item.snippet)
      .map((relatedVideo) => {
        return {
          videoId: relatedVideo.id.videoId,
          title: relatedVideo.snippet.title,
          channel: {
            channelId: relatedVideo.snippet.channelId,
            channelName: relatedVideo.snippet.channelTitle,
          },
          thumbnail: relatedVideo.snippet.thumbnails.medium.url,
          viewCount: 123455,
          publishedAt: relatedVideo.snippet.publishedAt,
          duration: "",
        };
      });
    return { data: relatedData };
  }

  formatPlaylists(data) {
    this.handleError(data);
    this.checkIfExistData(data);
    const playlistInfo = data.items.map((item) => {
      return {
        thumbnail: item.snippet.thumbnails.medium.url,
        count: item.contentDetails.itemCount,
        title: item.snippet.title,
        localized: item.snippet.localized,
        channel: {
          channelId: item.snippet.channelId,
          channelName: item.snippet.channelTitle,
        },
        description: item.snippet.description,
        id: item.id,
        playlistId: item.id,
      };
    });
    return { data: playlistInfo };
  }
  formatPlaylistItems(data) {
    this.handleError(data);
    this.checkIfExistData(data);
  }
}
