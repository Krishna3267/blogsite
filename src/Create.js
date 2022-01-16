import { useState } from "react";
import { useHistory} from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false); //for the time between requesting and accepting
    const history = useHistory();  

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};
        
        setIsPending(true);
        //FOR requesting the JSON server to add the blog
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers:{"Content-Type" : "application/json"}, //telling em the type of content we sending
            body: JSON.stringify(blog) //converting the js object into json format
        }).then(()=>{
            console.log("New blog added");
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })


    }
    return ( 
        <div className="create">
            <h1 style={{marginBottom:"10px"}}>Add a new blog</h1>
            <div style={{width:"80px",height:"3px",backgroundColor:"#f1356d",marginBottom:"20px"}}></div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog title:</label>
                <input type="text" required value={title} 
                onChange={ (e) => setTitle(e.target.value)} />
                {console.log(title)}
                <label htmlFor="">Blog body:</label>
                <textarea type="text" required
                value={body} 
                onChange={ (e)=> setBody(e.target.value)}></textarea>
                <label htmlFor="">Blog author:</label>
                <input 
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}/>
                {/* <div className="line" style={{marginTop:"25px"}}></div> */}
                { !isPending && <button >Add Blog</button>}
                { isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
        
     );
}
 
export default Create;