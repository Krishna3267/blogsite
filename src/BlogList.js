import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {

    // console.log(props.blogs);
    return ( 
        <div className="blog-list">
            <h1 style={{marginBottom:"10px"}}>{title}</h1>
            <div style={{width:"80px",height:"3px",backgroundColor:"#f1356d",marginBottom:"20px"}}></div>

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2 className="title">{blog.title}</h2>
                    <h4 className="author">Written by {blog.author}</h4>
                    <p className="intro">{blog.body}</p>
                    {/* <button onClick={()=>handleDelete(blog.id)}>Delete blog</button> */}
                    </Link>
                    <div className="line"></div>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;