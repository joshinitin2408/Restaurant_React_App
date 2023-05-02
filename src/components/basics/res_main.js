import React, { useState } from 'react'
import Navbar from './nav'
import Body from './body'
import Menu from './MenuApi'

const NavList = [
    ... new Set(Menu.map((curelem)=>{
        return curelem.category
    })),"All"
]


const Res_main = () => {
    const [data, setData] = useState(Menu)
    const [navdata,setNavdata] = useState(NavList)
    const filtrNav = (catego)=>{
        if (catego==="All"){
            setData(Menu)
            return
        }
        const updatedData = Menu.filter((curr)=>{
            return curr.category===catego
            
        })
        
        setData(updatedData)
    }
  return (
    <div>
        <Navbar navdata={navdata} filnav={filtrNav}/>
        <Body data={data}/>
    </div>
  )
}

export default Res_main