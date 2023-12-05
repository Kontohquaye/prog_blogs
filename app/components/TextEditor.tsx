"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { toolbarOptions } from "../libs/toolbarOptions";

const TextEditor = () => {
  const [editorValue, setEditorValue] = useState("");

  return (
    <ReactQuill
      placeholder="compose your blog, highlight to edit"
      value={editorValue}
      modules={{
        toolbar: toolbarOptions,
      }}
      className="react-quill"
      theme="bubble"
      onChange={(value) => setEditorValue(value)}
    />
  );
};

export default TextEditor;
