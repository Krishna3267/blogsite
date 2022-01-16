import { useHistory, useParams } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from "react-loader-spinner";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const history = useHistory();

    const {data : blog, IsPending, error} = useFetch('http://localhost:8000/blogs/' + id)

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method:'DELETE'
        }).then(() => {
            history.push("/");
        } )
    }
    return ( 
        <div className="blog-details">
            { IsPending && <div className="loader">loading...<Rings type="Rings" color="#f1356d88" height={80} width={80} /></div>}
            { error && <div className="error">{error}</div> }
            { blog && (
                <article>
                    <h2 className="title">{blog.title}</h2>
                    <h4 className="author">Written by {blog.author}</h4>
                    <div style={{width:"80px",height:"3px",backgroundColor:"#f1356d",margin:"10px 0 15px 0"}}></div>                    
                    <p className="body">{blog.body}</p>
                    <div className="line"></div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            ) }
        </div>
     );
}
 
export default BlogDetails;