import React, {useState, useEffect} from "react";
import "./Gitrepo.css";

export default function Gitrepo(){
    const[repos, setRepos]=useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        fetch("https://api.github.com/users/AgnesPerala/repos")
        .then(response=>response.json())
        .then(data => { 
            setRepos(data);
            setIsLoading(false);
        })
        .catch(error=> console.error('kunde inte läsa data', error))
    }, []);

    return (
        <div className="portfolio-columns">
            <div className="portfolio-row">
                {
                    isLoading ? (<p className="loading">Laddar projekt...</p>
                    ) : (
                    
                    repos.map(repo=>(
                    <article className="portfolio-text" key={repo.id}>   
                        <h1>{repo.name}</h1>
                        <p className="description">{repo.description}</p>
                        <a href = {repo.html_url} className="repo">länk till repository</a>
                    </article>
                    )))
                }
            </div>
        </div>
    );
}