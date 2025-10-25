import React from "react";
import { USER_PROFILE } from "../utils/constants";

const CommentData = [
  {
    name: "Sachin",
    text: "This is First Comment",
    replies: [
      {
        name: "Sachin",
        text: "This is First Comment",
        replies: [],
      },
    ],
  },

  {
    name: "Sachin",
    text: "This is First Comment",
    replies: [
      {
        name: "Sachin",
        text: "This is First Comment",
        replies: [{
        name: "Sachin",
        text: "This is First Comment",
        replies: [{
        name: "Sachin",
        text: "This is First Comment",
        replies: [{
        name: "Sachin",
        text: "This is First Comment",
        replies: [{
        name: "Sachin",
        text: "This is First Comment",
        replies: [{
        name: "Sachin",
        text: "This is First Comment",
        replies: [],
      },],
      },],
      },],
      },],
      },],
      },
    ],
  },

  {
    name: "Sachin",
    text: "This is First Comment",
    replies: [
      {
        name: "Sachin",
        text: "This is First Comment",
        replies: [],
      },
    ],
  },

  {
    name: "Sachin",
    text: "This is First Comment",
    replies: [
      {
        name: "Sachin",
        text: "This is First Comment",
        replies: [],
      },
    ],
  },

  {
    name: "Sachin",
    text: "This is First Comment",
    replies: [
      {
        name: "Sachin",
        text: "This is First Comment",
        replies: [],
      },
    ],
  },

  {
    name: "Sachin",
    text: "This is First Comment",
    replies: [
      {
        name: "Sachin",
        text: "This is First Comment",
        replies: [],
      },
    ],
  },

  {
    name: "Sachin",
    text: "This is First Comment",
    replies: [
      {
        name: "Sachin",
        text: "This is First Comment",
        replies: [],
      },
    ],
  },

  {
    name: "Sachin",
    text: "This is First Comment",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-100 p-2 items-center rounded-lg shadow-lg gap-2">
      <img
        className="w-10 h-7 cursor-pointer"
        src={USER_PROFILE}
        alt="user profile"
      ></img>

      <div className="text-sm">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return (
    <div className="mb-1.5">
      {comments.map((comment, i) => (
        <div>
          <Comment key={i} data={comment} />

          <div className="pl-5 ml-5"> 
            <CommentList comments={comment.replies}/>
          </div>
        </div>

        
      ))}
    </div>
  );
};

const CommentContainer = () => {
  return (
    <div className="m-5 py-2 w-8/12">
      <h1 className="font-bold text-2xl">Comments:</h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default CommentContainer;
