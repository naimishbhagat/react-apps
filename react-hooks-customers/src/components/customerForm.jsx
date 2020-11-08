import React, { useEffect, useState } from 'react';

function CustomerForm({ addCustomer, customer }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    useEffect(() => {
        setFirstName(customer.firstName);
        setLastName(customer.lastName);
        setDob(customer.dob);
    }, [customer]);
    const handleSubmit = e => {
        e.preventDefault();
        console.log(customer.index);
        const newCustomer = { ...customer };
        newCustomer.firstName = firstName;
        newCustomer.lastName = lastName;
        newCustomer.dob = dob;
        addCustomer(newCustomer);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label for="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label for="dob">DOB</label>
                <input
                    type="text"
                    name="dob"
                    id="dob"
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                />
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}

export default CustomerForm;