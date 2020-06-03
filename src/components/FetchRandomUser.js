/*
 * @Author: mm
 * @Date: 2020-06-02 10:39:02
 * @LastEditTime: 2020-06-02 21:00:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \OPReactViaGit\src\components\FetchRandomUser.js
 */ //FetchRandomUser
 import React, { useEffect, useState } from "react";
 import axios from "axios";
 
 export default function FetchRandomUser() {
   const [data, setData] = useState([]);
 
   useEffect(() => {
     axios
       .get("https://news.api.gov.bc.ca/api/Posts/Latest/home/default?postKind=stories&count=5&skip=0&api-version=1.0")
       .then(result => setData(result.data));
   }, []);

  console.log(data.reference);

 
   return (
     <div>
       <ul>
         {data.map(item => (
           <li key={item.atomId}>
            {item.documents.map(documents => <h4 key = {documents.languageId}>{documents.headline} </h4>)}
            {item.summary}
           </li>
         ))}


       </ul>
     </div>
   );
 }