import { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setError(false);
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((category) => [inputValue, ...category]);
      setInputValue("");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mb-2">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type a category"
            onChange={handleInputChange}
          />
        </div>
      </form>
      {error ? (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <FontAwesomeIcon icon={faTimesCircle} size="lg" fixedWidth />
          The field must contain minimum 3 letters and cannot be empty!
        </div>
      ) : (
        ""
      )}
    </>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
