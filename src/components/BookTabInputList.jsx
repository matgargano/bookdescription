/* eslint-disable no-shadow */
import React, { useState } from "react";
import PropTypes from "prop-types";
import AbstractInput from "./AbstractInput";
import lscache from "lscache";

const BookTabInputList = props => {
  const LS_KEY = "foobar";
  const { editors } = props;
  const simulateDelay = async (seconds = 2000) => {
    return new Promise(r => {
      setTimeout(() => {
        r();
      }, seconds);
    });
  };
  /**
   * stubbed api call for get
   * @param {what to save} what
   */
  const get = async (what = null) => {
    if (!what) {
      return [];
    }
    await simulateDelay();
    let data = await lscache.get(LS_KEY);
    data = data || {};
    return data[what];
  };

  /**
   * stubbed api call for set
   * @param {what to save} what
   */
  const set = async (what = null) => {
    if (!what) {
      return [];
    }
    await simulateDelay();
    let data = await lscache.get(LS_KEY);
    return true;
  };

  const [openInputs, setOpenInputs] = useState([]);

  const setEditMode = (index, editMode = true) => {
    if (editMode) {
      setOpenInputs([...openInputs, index]);

      return;
    }
    const newOpenInputs = [...openInputs];
    const updatedInputs = newOpenInputs.filter(e => e !== index);

    setOpenInputs(updatedInputs);
  };

  return (
    <>
      {editors.map((editor, index) => (
        <AbstractInput
          initialContent={editor.initialContent}
          editMode={!!openInputs.includes(index)}
          setEditMode={setEditMode}
          index={index}
          key={editor.keyObject.getKey()}
          get={get}
          set={set}
          {...editor}
        />
      ))}
    </>
  );
};

BookTabInputList.propTypes = {
  editors: PropTypes.array.isRequired
};

export default BookTabInputList;
