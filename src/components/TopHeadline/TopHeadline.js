import React, { useState } from 'react';
import { useEffect } from 'react';


const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=86bedde48ce640a98961d508116a501c'
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h1>Top Headline : {articles.length}</h1>
        </div>
    );
};

export default TopHeadline;