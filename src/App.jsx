import React from 'react'
import Navbar from './components/Navbar'
import Section from './components/Section'

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="viewport">

                <Section />
            </div>
        </div>
    )
}

export default App
