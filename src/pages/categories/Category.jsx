import {useState , useEffect} from "react"
import { useParams } from "react-router-dom"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
function Category() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryName } = useParams();
  useEffect(() => {
    fetch("../../../public/api/data.json")
      .then(response => response.json())
      .then(data => {
        const cardData = data.filter(card => card.category === categoryName);
        setCards(cardData);
      })
      .catch(error => console.error('Error fetching data:', error));
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  }, [categoryName]);
  return (
    <div>
      <h1 className="category-title">Category: {categoryName}</h1>
      <div className="flex flex-y-first flex-x-between flex-wrap">
      {
        cards.map((post) => (
          <div className="card" key={post.id}>
            <div className="post-thumbnil">
            {isLoading ? <Skeleton height={20} /> : <span className="category-badge">{post.category}</span> }
            {isLoading ? <Skeleton height={160} /> : <img src={post.imgUrl} alt="post-thumbnil" /> }
            </div>
            <h2 className="post-title">{isLoading ? <Skeleton /> : post.title }</h2>
            <div className="flex flex-y-center flex-x-between my-2">
                <p className="post-author ">{isLoading ? <Skeleton height={20} width={100}/> : post.author}</p>
                <p className="post-date ">{isLoading ? <Skeleton height={20} width={100}/> : post.date_published}</p>
            </div>
            <p className="post-text-sm">{isLoading ? <Skeleton count={2}/> : `${post.content.substring(0, 60)} ...`}</p>
            {isLoading ? <Skeleton height={40} /> :<Link className="btn" to={`/post/${post.id}`}>read more</Link>}
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Category;
