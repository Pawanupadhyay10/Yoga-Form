import React, { useState, useEffect } from "react";
import "../App.css";
import { db } from "../firebase";
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';

const Contact = () => {
    const [age, setAge] = useState("");
    const [fess, setFess] = useState("");
    const [batch, setBatch] = useState("");
    const [loader, setLoader] = useState(false);
    
    // Complete Payment methord
    const Complete_Payment = (e) => {
        e.preventDefault();
        setLoader(true);
        if ( (age <= 65 && age >= 18) && fess==="500" && batch!=null){
           db.collection("contacts")
               .add({
                   age: age,
                   fess: fess,
                   batch: batch,
               })
               .then(() => {
                   setLoader(false);
                   alert("Your message has been submitted👍");
               })
               .catch((error) => {
                   alert(error.message);
                   setLoader(false);
               });
       }else{
            alert("Age must me between 18 and 65 and Kindly pay 500 INR 👍");
           window.location.reload(false);
       }
        setAge("");
        setFess("");
        setBatch("");
    };

    return (
            <form className="form" onSubmit={Complete_Payment}>
                <h1> Yoga-Form🤳</h1>
                {/* Age field */}
                <label>Age</label>
                <input
                    placeholder="Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                {/* Fess field */}
                <label>Fess</label>
                <input
                    placeholder="Enter montly fess 500 INR"
                    value={fess}
                    onChange={(e) => setFess(e.target.value)}
                />
                {/* Batch field */}
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Batch
                </InputLabel>
                <NativeSelect
                    defaultValue={6 - 7 + 'AM'}
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    inputProps={{
                        name: 'batch',
                        id: 'uncontrolled-native',
                    }}>
                    <option value={"6 - 7 AM"}> 6-7 AM </option>
                    <option value={"7 - 8 AM"}> 7-8 AM </option>
                    <option value={"8 - 9 AM"}> 8-9 AM </option>
                    <option value={"5 - 6 PM"}> 5-6 PM </option>
                </NativeSelect>

                <button
                    type="submit"
                    style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                >
                    Complete Payment
                </button>
            </form> 
    );
};

export default Contact;