// Import npm modules
import React from "react";

// Import CSS
import "./styles/Warning.css";

// Modal content to display warning message
export default function Warning(props) {
  return (
    <div className="modal-container">
      <p>
          {`When you delete a ${props.deletingComponent}, this data will be lost forever - you cannot recover it.`}
      </p>
      <p>
          {`Do you still wish to delete this ${props.deletingComponent}?`}
      </p>
      <button className="btn btn-danger btn-inline btn-center" onClick={props.confirmDelete(props.deleteArg)}>
        <a href="/">{`Delete ${props.deletingComponent}`}</a>
      </button>
    </div>
  );
}
