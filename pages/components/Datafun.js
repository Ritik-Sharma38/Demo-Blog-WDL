import React from 'react';

export async function getStaticProps(){
    try{
      const mysql = require('serverless-mysql')({
        backoff: 'decorrelated',
        base: 5,
        cap: 200
      })
      mysql.config({
        host     : "sql12.freemysqlhosting.net",
        database : "sql12377971",
        user     : "sql12377971",
        password : "Qv6mRXVnqL"
      })
    
      const rresults = await mysql.query("SELECT * FROM posts")
      var data=[]
      for(let i=0; i<5; i++){
        var post = {
          name: rresults[i].name,
          label: rresults[i].label
        }
        data.push(post)
      }
      mysql.end()
    }catch(error){
      console.log("Error:",error)
      data=[]
    }
  
    return {
      props: {
        data,
      },
    }
  }

export default function Datafun({data}){
    const test=";alkdfjalfkjd"
    console.log("from test module", data)
    return(data)
}