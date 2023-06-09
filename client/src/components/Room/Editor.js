import React, { useEffect, useRef } from "react";
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";

const Editor = ({ socket, roomId }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    editorRef.current = Codemirror.fromTextArea(
      document.getElementById("realtimeEditor"),
      {
        mode: { name: "javascript", json: true },
        theme: "dracula",
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      }
    );
  }, []);

  useEffect(() => {
    function init() {
      if (socket) {
        editorRef.current.on("change", (instance, changes) => {
          const { origin } = changes;
          const code = instance.getValue();
          if (origin !== "setValue") {
            socket.emit("code-change", {
              roomId,
              code,
            });
          }
        });
      }
    }
    init();
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.on("code-change", ({ code }) => {
        if (code !== null) {
          editorRef.current.setValue(code);
        }
      });
    }

    return () => {
      socket?.off("code-change");
    };
  }, [socket]);

  return <textarea id="realtimeEditor"></textarea>;
};

export default Editor;
