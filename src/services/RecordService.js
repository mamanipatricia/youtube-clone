import BaseService from "./BaseService";
import { recordUrl, withRecords } from "../config";

export default class RecordService extends BaseService {
  constructor(isStarted) {
    super(recordUrl, isStarted);
  }

  async createRecord(payload = {}) {
    const body = {
      ...payload,
      userId: localStorage.getItem("userId"),
    };
    if (withRecords === "true") {
      await this.post(`/user-records/create`, body);
    }
  }
  async createUser(payload = {}) {
    if (withRecords === "true") {
      return await this.post(`/users/create`, payload);
    }
  }
}
