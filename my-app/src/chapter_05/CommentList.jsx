import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "차상곤",
    comment: "안녕하세요, 상곤입니다.",
  },
  {
    name: "홍길동",
    comment: "리액트 재밌어요!",
  },
  {
    name: "고길동",
    comment: "저도 리액트 알려주세요!",
  },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;