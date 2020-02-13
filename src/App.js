import React from "react";
import BookTabInputList from "./components/BookTabInputList";
import KeyObject from "./utils/keyObject";

export default function App() {
  const isbn = 123;
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
    },
    {
      type: "text",
      initialContent: "vvvv",
      keyObject: new KeyObject({
        linkKey: isbn,
        linkType: "isbn",
        assetTypeCode: "flapcopy4"
      }),
      options: {
        label: "Flap Copy 4",
        useLocalStorage: true
      }
    }
  ];
  return <BookTabInputList linkType={isbn} linkKey="isbn" editors={editors} />;
}
