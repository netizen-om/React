/*eslint-disable no-unused-vars*/ 
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    
    const data = useLoaderData()
    // let [data,setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/netizen-om')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //         }
    //     )
    // }, [])

  return (
    <div className='text-center text-white p-4 text-3xl m-4 bg-gray-500'>
        Followers : {data.followers}
        <img src={data.avatar_url} width="300" alt="" />
    </div>
  )
}

export default Github

export const gitHUbInfoLoader = async() => {
    const response = fetch("https://api.github.com/users/netizen-om")
    return response
}