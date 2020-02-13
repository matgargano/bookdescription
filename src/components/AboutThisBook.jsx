/* eslint-disable no-shadow */
import React from "react";
import PropTypes from "prop-types";
import BookTabInputList from "./BookTabInputList";
import KeyObject from "../utils/keyObject";

const AboutThisBook = props => {
  const { title, subtype } = props;
  const { isbn } = title;
  const editors = [
    {
      type: "text",
      initialContent: "The quick brown fox",
      keyObject: new KeyObject({
        linkKey: isbn,
        linkType: "isbn",
        assetTypeCode: "flapcopy"
      }),
      options: {
        label: "Flap Copy",
        useLocalStorage: true
      }
    },

    {
      type: "text",
      initialContent: "Happy days",
      keyObject: new KeyObject({
        linkKey: isbn,
        linkType: "isbn",
        assetTypeCode: "flapcopy2"
      }),
      options: {
        label: "Flap Copy 2",
        useLocalStorage: true
      }
    },

    {
      type: "text",
      initialContent: "aaaaa",
      keyObject: new KeyObject({
        linkKey: isbn,
        linkType: "isbn",
        assetTypeCode: "flapcopy3"
      }),
      options: {
        label: "Flap Copy 3",
        useLocalStorage: true
      }
    }
  ];

  return (
    <>
      <div>About the Book</div>

      <BookTabInputList linkType={isbn} linkKey="isbn" editors={editors} />
    </>
  );
};

AboutThisBook.propTypes = {
  title: PropTypes.object.isRequired,
  subtype: PropTypes.number
};

AboutThisBook.defaultProps = {
  subtype: ""
};

export default AboutThisBook;
