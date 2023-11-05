import React from "react";

function Banner({ status, actionFunction, children }) {
  return (
    <div className={`${status} banner`}>
      {children}
      {actionFunction && (
        <button onClick={actionFunction} className="banner-button">
          Restart Game
        </button>
      )}
    </div>
  );
}

export default Banner;
