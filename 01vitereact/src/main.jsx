import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
      <div>
        <h1>Custom React</h1>
      </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Google</a>
)

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target:'_blank'},
    'Click me to visit'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  )
  