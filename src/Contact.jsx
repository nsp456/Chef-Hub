import React from 'react';
import { useState } from 'react';
import "./index.css"

const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        suggestions: '',
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for feedback ${data.fullname} :)`);
    };

    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    name="fullname"
                                    value={data.fullname}
                                    onChange={InputEvent}
                                    placeholder="Enter Your Name"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group pv2">
                                <label for="exampleInputPassword1">Phone Number</label>
                                <input type="number"
                                    class="form-control"
                                    id="exampleInputPassword1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={InputEvent}
                                    placeholder="Phone Number" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    name="email"
                                    value={data.email}
                                    onChange={InputEvent}
                                    placeholder="Eg. xyz@domain.com"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="form-group pv2">
                                <label for="exampleInputPassword1">Suggestions/Comments</label>
                                <textarea
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    rows="3"
                                    name="suggestions"
                                    value={data.suggestions}
                                    onChange={InputEvent}
                                >
                                </textarea>
                            </div>
                            <button type="submit" class="btn btn-primary pb2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;