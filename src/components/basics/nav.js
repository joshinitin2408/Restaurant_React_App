import React from 'react'

const Navbar = ({ navdata, filnav }) => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">FoodKart</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        {
                            navdata.map((currelem) => {
                                return (
                                    <>
                                        <li class="nav-item">
                                            <a class="nav-link"  onClick={()=>{
                                                filnav(currelem)
                                            }}>{currelem}</a>
                                        </li>
                                    </>
                                )
                            })

                        }

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar