import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const PostSlider = () => {
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
  var settings = {
    dots: false,
    arrow: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
      {
        posts.map((post) => (
          <div className="card slider-box" key={post.id}>
            {
                isLoading ? <Skeleton height={160} /> :<Link className="btn" to={`/post/${post.id}`}>
                <div className="post-thumbnil">
                {isLoading ? <Skeleton height={160} /> : <img src={post.imgUrl} alt="post-thumbnil" /> }
                </div>
                <h2 className="post-title">{isLoading ? <Skeleton /> : post.title }</h2>
                </Link>
            }
          </div>
        ))
      }
      </Slider>
    </div>
  );
};

export default PostSlider;
