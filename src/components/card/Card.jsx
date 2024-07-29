import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import "./card.css";

const Card = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("./api/data.json")
      .then((response) => response.json())
      .then((data) => setPosts(data));
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="flex flex-y-first flex-x-between flex-wrap">
      {
        posts.map((post) => (
          <div className="card" key={post.id}>
            <div className="post-thumbnil">
            {isLoading ? <Skeleton height={160} /> : <img src={post.imgUrl} alt="post-thumbnil" /> }
            </div>
            <h2 className="post-title">{isLoading ? <Skeleton /> : post.title }</h2>
            <div className="flex flex-y-center flex-x-between my-2">
                <p className="post-author">{isLoading ? <Skeleton height={20} width={100}/> : post.author}</p>
                <p className="post-date ">{isLoading ? <Skeleton height={20} width={100}/> : post.date_published}</p>
            </div>
            <p className="post-text-sm">{isLoading ? <Skeleton count={2}/> : `${post.content.substring(0, 60)} ...`}</p>
            {isLoading ? <Skeleton height={40} /> :<Link className="btn" to={`/post/${post.id}`}>read more</Link>}
          </div>
        ))
      }
    </div>
  );
};

export default Card;
