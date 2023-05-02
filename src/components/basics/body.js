import React from 'react'

const Body = ({ data }) => {
    return (
        <div class="container">
            <div class="row" >
                {data.map((curelem) => {
                    return (
                        <>
                            <div class="col-sm-5">
                                <div class="card">
                                    <img class="card-img-top" src={curelem.image} alt="Card image cap" style={{height:"50vh"}}/>
                                    <div class="card-body">
                                        <h5 class="card-title">{curelem.name}</h5>
                                        <p class="card-text">{curelem.description}</p>
                                        <a href="#" class="btn btn-primary">Add Item</a>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                })}


            </div>
        </div>
    )
}

export default Body