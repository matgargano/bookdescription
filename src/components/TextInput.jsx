import React from "react";
import PropTypes from "prop-types";

const TextInput = ({
  options: { label },
  editMode,
  setEditMode,
  index,
  keyObject,
  value,
  handleChange,
  handleSave
}) => {
  if (editMode) {
    return (
      <>
        <hr />
        <p className="font-weight-bold">{label}</p>
        <input value={value} onChange={e => handleChange(e.target.value)} />
        <button type="button" onClick={() => handleSave(keyObject, value)}>
          Save
        </button>
        <hr />
      </>
    );
  }
  return (
    <>
      <hr />
      <p className="font-weight-bold">{label}</p>
      <p>{value}</p>
      <button type="button" onClick={() => setEditMode(index)}>
        Edit
      </button>
      <hr />
    </>
  );
};

TextInput.propTypes = {
  options: PropTypes.object.isRequired,
  editMode: PropTypes.bool.isRequired,
  setEditMode: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  keyObject: PropTypes.object.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
};

TextInput.defaultProps = {
  value: ""
};

export default TextInput;
