import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'


    const AddVisitor = ()=>{
        const[input,changeInput]=useState(
            {
                "firstname":"",
                "lastname":"",
                "purpose":"",
                "whomToMeet":""
            }
        )
    const inputHandler=(event)=>{
        changeInput({...input,[event.target.name]:event.target.value})
    }

    const readValues=()=>{
        console.log(input)
        axios.post("http://35.170.103.9:4057/addvisitor",input).then(
            (response)=>{
                alert("Successfully added")
            }
        ).catch()
    }
    return (
        <div>
<Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xxl-6">
                                <label htmlFor="" className="form-label">First Name</label>
                                <input type="text" className="form-control" name='firstname' value={input.firstname} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Last Name</label>
                                <input type="text" className="form-control" name='lastname' value={input.lastname} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Purpose</label>
                                <input type="text" className="form-control" name='purpose' value={input.purpose} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Whom to meet</label>
                                <input type="text" className="form-control" name='whomToMeet' value={input.whomToMeet} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xxl-6">
                                <button className="btn btn-dark" onClick={readValues}>Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddVisitor