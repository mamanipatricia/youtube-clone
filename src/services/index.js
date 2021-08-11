import YouTubeService from "./YouTubeService";
import CommentService from "./CommentService";
import UserService from "./UserService";
import RecordService from "./RecordService";

export const youTubeService = new YouTubeService();

export const commentService = new CommentService();

export const userService = new UserService();

export const recordService = new RecordService(true);
