import { useEffect, useState } from "react";
import StateLoginForm from "./components/loginForm/StateLoginForm";


const MovieList = ({genere = "western"}) => {
    
    const [data, setData] = useState([]);
    
    const getData = async () =>{
        try {
            const resp = await fetch('https://api.sampleapis.com/movies/'+ genere);
            const json = await resp.json();
            console.log(json)
            setData(json)

        } catch (err) {
            setData(err.message)
        }
    }


    useEffect(()=>{
        getData();

        const myFunction = (e) => {
            console.log('resize', e)
        }
        
        window.addEventListener('resize', myFunction)

        return ()=>{
            console.log('DESTROYED')
            window.removeEventListener('resize', myFunction)
        }
    }, []);

    return (
    <>
        
        <h2>Lista film {genere}</h2>
        <ul>
            {data.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    </>
    )

}

export default MovieList;