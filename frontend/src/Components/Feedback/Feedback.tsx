import React from "react";

const Feedback = ({ title }: { title: string }) => {
  return (
    <React.Fragment>
      <div className="feedback-wrapper" id="customFeedbackWrapper">
        <span>{title}</span>
      </div>
    </React.Fragment>
  );
};

export default Feedback;
