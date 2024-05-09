import React, { useEffect } from "react";
import { api } from "../../api/api.js";
import { POST, DELETE, PUT, UPDATE, REMOVE } from "../../api/constants.js";
import { getEl, uuid } from "../../api/helpers.js";

export const TestComments = () => {
  const [comments, setComments] = React.useState([]);

  const getCommentById = (id) => comments.find((comment) => comment.id === id);

  async function getComments() {
    let comments = await api();

    setComments(comments);
  }

  useEffect(() => {
    getComments();
  }, []);

  console.log(comments);

  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <span>{comment.body}</span>
            <button
              onClick={() => {
                api(
                  PUT,
                  { id: comment.id },
                  {
                    text: "Updated comment",
                  }
                );
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                api(DELETE, { id: comment.id });
                getComments();
              }}
            >
              Delete {comment.id}
            </button>
          </div>
        );
      })}
    </div>
  );
};