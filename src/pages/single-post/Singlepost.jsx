import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import "./singlepost.css"
const Singlepost = () => {
  const [singlepost, setSinglePosts] = useState([]);
  const { id } = useParams()
  useEffect(() => {
    fetch("../../../public/api/data.json")
      .then(response => response.json())
      .then(data => {
        const postData = data.find(post => post.id === parseInt(id));
        setSinglePosts(postData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);
  return (
    <div className="single-post-page">
        <div className="post-container" key={singlepost.id}>
           <img src={singlepost.imgUrl} alt="" />
           <h2 className="single-title">{singlepost.title}</h2>
           <div className="flex flex-y-first flex-x-between single-info-row">
              <p className="tag">{singlepost.author}</p>
              <p className="tag">{singlepost.date_published}</p>
           </div>
           <p className="post-desc">{singlepost.content}</p>
        </div>
    </div>
  )
}

export default Singlepost