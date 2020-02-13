class KeyObject {
  constructor({ linkType, linkKey, assetTypeCode }) {
    if (!linkType || !linkKey || !assetTypeCode) {
      throw Error("KeyObject missing linkType, linkKey and/or assetTypeCode");
    }
    this.linkType = linkType;
    this.linkKey = linkKey;
    this.assetTypeCode = assetTypeCode;
  }

  getObject() {
    const { linkType, linkKey, assetTypeCode } = this;
    return {
      linkType,
      linkKey,
      assetTypeCode
    };
  }

  getKey() {
    const { linkType, linkKey, assetTypeCode } = this;
    return linkType.concat(linkKey, assetTypeCode);
  }
}

export default KeyObject;
