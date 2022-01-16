import BlogList from "./BlogList";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Rings } from "react-loader-spinner";
import useFetch from './useFetch'

const Home = () => {

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setblogs(newBlogs);
    // }

    const { data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return ( 

        <div className="home">
            { error && <div className="error">{error}</div> }
            { isPending && <div className="loader"><Rings type="Rings" color="#f1356d88" height={80} width={80} /></div> }
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author === "Krishna")} title="Krishna's Blogs"/> */}
        </div>
        
     );
}
 
export default Home;

// const handleClick2 = (name) =>{
//     console.log("working "+name);            
// }

// let name = "Krishna";

// const change = () =>{
//     name = "Merryl";
// }

//     const [name, setname] = useState('Krishna');

//     const handleClick = () => {
//         setname(Math.random()+10);
//     }
/* <h3>{name}</h3> */
/* <button onClick={handleClick} >Click</button>
<button onClick={()=>{handleClick2("Krishnaaa")}}>Click me 2</button> */
// const [name,setName] = useState("Krishna");

//     useEffect(() => {
        
//         console.log("i was ivoked" + name);
        
//     }, [name])