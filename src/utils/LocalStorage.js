import lscache from "lscache";
import Persister from "./Persister";

export default class LocalStorage extends Persister {
  constructor(keyObject) {
    super(keyObject);
    this.LS_KEY = "localstorage";
  }

  async get() {
    const whatToGet = this.keyObject.getObject().assetTypeCode;
    let data = await lscache.get(this.getKey());
    data = data || {};
    return data[whatToGet];
  }

  async set(value) {
    try {
      let data = await lscache.get(this.getKey());
      data = data || {};
      data[this.keyObject.getObject().assetTypeCode] = value;
      await lscache.set(this.getKey(), data);
      return true;
    } catch (e) {
      console.log(e);
      return "ERROR";
    }
  }
}
