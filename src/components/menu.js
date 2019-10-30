import React from 'react'
import Link from 'gatsby-link'

const Menu=()=>{
    return (
        <div style={{
            background: '#f4f4f4',
            paddingTop: '10px'
        }}>

        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/paris">Paris</Link></li>
            <li><Link to="/antwerp">Antwerp</Link></li>
            <li><Link to="/dusseldorf">Dusseldorf</Link></li>
            <li><Link to="/cologne">Cologne</Link></li>
            
        
        </ul>
            
        </div>
    )
}

export default Menu;