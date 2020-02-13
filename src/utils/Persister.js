class Persister {
  constructor(keyObject = null) {
    this.setKeyObject(keyObject);
  }

  setKeyObject(keyObject) {
    this.keyObject = keyObject;
    this.checkKeyObjectType();
    this.actualKeyObjectToCheckAgainst = this.keyObject;
    this.isArray = Array.isArray(this.keyObject);
    if (this.isArray) {
      [this.actualKeyObjectToCheckAgainst] = this.keyObject;
    }

    this.LS_KEY = "";
  }

  // eslint-disable-next-line class-methods-use-this
  async get() {
    throw new Error("must implement get");
  }

  // eslint-disable-next-line class-methods-use-this
  async set() {
    throw new Error("must implement set");
  }

  checkKeyObjectType() {
    if (
      !((typeof this.actualKeyObjectToCheckAgainst).toString() !== "KeyObject")
    ) {
      throw new Error("Must pass in a keyObject to setEditorDataInAPI");
    }
    return true;
  }

  getKey(prepend = null) {
    let prependArgument = prepend;
    if (!prependArgument) {
      prependArgument = this.LS_KEY;
    }
    return prependArgument.concat(
      this.actualKeyObjectToCheckAgainst.getObject().linkType,
      this.actualKeyObjectToCheckAgainst.getObject().linkKey
    );
  }

  getKeyObject() {
    return this.keyObject;
  }
}

export default Persister;
