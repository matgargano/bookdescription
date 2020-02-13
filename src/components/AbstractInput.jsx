import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextInput from "./TextInput";
import LocalStorage from "../utils/LocalStorage";

const AbstractInput = ({
  type,
  editMode,
  set,
  keyObject,
  useLocalStorage,
  setEditMode,
  index,
  initialContent,
  ...restProps
}) => {
  console.log(set);
  const [saving, setSaving] = useState(false);
  const [value, setValue] = useState(initialContent);

  const ls = new LocalStorage(keyObject);

  const handleSave = async (kO, v, assetId = null) => {
    setEditMode(index);
    ls.set("");
    console.log(1);
    await setSaving(true);
    console.log(2);
    await set(kO, v, assetId);
    console.log(3);
    await setSaving(false);
  };

  useEffect(() => {
    if (useLocalStorage) {
      setValue(value);
      ls.set(value);
    }
  }, [value]);

  useEffect(() => {
    async function asyncFunction() {
      if (useLocalStorage) {
        const localStorageContent = await ls.get();
        if (localStorageContent) {
          setValue(localStorageContent);
          setEditMode(index);
        }
      }
    }

    asyncFunction();
  }, []);

  if (saving) {
    return <p>Saving</p>;
  }

  const renderInput = () => {
    switch (type) {
      case "text": {
        return (
          <TextInput
            handleSave={handleSave}
            value={value}
            handleChange={val => setValue(val)}
            editMode={editMode}
            setEditMode={setEditMode}
            keyObject={keyObject}
            index={index}
            {...restProps}
          />
        );
      }

      default: {
        return <p>UNRECONGIZED INPUT</p>;
      }
    }
  };

  return (
    <>
      {renderInput()}
      {editMode && <p>versions</p>}
      <div onClick={() => console.log("ok")} />
    </>
  );
};

AbstractInput.propTypes = {
  type: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  set: PropTypes.func.isRequired,
  setEditMode: PropTypes.func.isRequired,
  keyObject: PropTypes.object.isRequired,
  useLocalStorage: PropTypes.bool,
  index: PropTypes.number.isRequired,
  initialContent: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired
};

AbstractInput.defaultProps = {
  useLocalStorage: true
};

export default AbstractInput;
