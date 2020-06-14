/*
 * @Author: your name
 * @Date: 2020-06-09 10:15:15
 * @LastEditTime: 2020-06-13 21:25:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \OPReactViaGit\src\FetchLatestNews.js
 */ 

 import React, { useEffect, useState } from "react";
 import axios from "axios";

 export default function FetchLatestNews() {
  var [data, setData] = useState([]);
  const [query, setQuery] = useState("releases");
  const [skip, setSkip] = useState(1);
//remove &rsquo from api

  //default with nothing..
  const [url, setUrl] = useState(
    'https://news.api.gov.bc.ca/api/Posts/Latest/home/default?postKind=releases&count=5&skip=0&api-version=1.0',
  );
 
  //??G
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData(result.data);

    };
 
    fetchData();
  }, [url]);
 
  return (
    <React.Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`https://news.api.gov.bc.ca/api/Posts/Latest/home/default?postKind=${query}&count=5&skip=0&api-version=1.0`)
        }
      >
        Search
      </button>
      <p>Search category: releases, stories, factsheets, updates or default</p>

      <ul>
        {data.map(item =>  (
          <li key={item.atomId}>
            {item.documents.map(documents => <h4 key = {documents.languageId}>{documents.headline} </h4>)}
            <b> news type:</b>  {item.kind} <br/>
            <b> news key:</b>  {item.key} <br/>
            <b> Summary:</b>  {item.documents.map(documents => <p key = {documents.languageId}>{documents.detailsHtml = documents.detailsHtml.replace(/(<([^>]+)>)/ig, '')
                                                                                                                                             .replace(/&rsquo;/ig, '\'')
                                                                                                                                             .replace(/(&ldquo;)|(&rdquo;)/g, '"')
                                                                                                                                             .replace(/&ndash;/ig, ' - ')
                                                                                                                                             .replace(/&lsquo;/, '\'')
                                                                                                                                             .replace(/&nbsp;/ig, ' ')

                                                                                                                                             }</p>)}
          </li> 
        ))}
      </ul>

      <button
          type="button"
          onClick={() => {
            setSkip(skip + 1);
            setUrl(`https://news.api.gov.bc.ca/api/Posts/Latest/home/default?postKind=${query}&count=5&skip=${skip}&api-version=1.0`);
            
          }
          }
        >
          Load More
        </button>

    </React.Fragment>
  );
}
