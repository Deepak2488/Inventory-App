import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const Markdown = () => {
  const [markdown, setMarkdown] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      <textarea
        ref={textareaRef}
        onChange={handleChange}
        value={markdown}
        placeholder="Type some markdown..."
      />
      <ReactMarkdown source={markdown} />
    </>
  );
};

export default Markdown;