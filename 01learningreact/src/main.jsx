import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//     type : "a",
//     props : {
//         href : "https://google.com",
//         target : "_blanck"
//     },
//     children : "Vist Google"
// }

function MyApp(){
    return(
        <div>
            <h1>custome App</h1>
        </div>
    )
}

const Anotherelement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const areactElement = React.createElement(
    'a',
    {href : "https://google.com" , target : "_blank"},
    'Visit Google'
)

createRoot(document.getElementById('root')).render(
    <App/>
)
