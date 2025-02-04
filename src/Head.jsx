import React,{useState} from "react";
import Form from "./Form";
import Detail from "./Detail";

const Head = () => {

    const [display,setDisplay] = useState("Form");
    console.log("Display",display);

    const [obj,setObj] = useState({id:"",name:"",email:"",age:"",doj:"",gender:"",company:"",role:"",experience:"",stDate:"",enDate:""});
    const [arr,setArr] = useState([
        {
            "id": "100",
            "name": "raja",
            "email": "raja@gmail.com",
            "age": "23",
            "doj": "2025-02-06",
            "gender": "male",
            "company": "asd",
            "role": "asd",
            "experience": "3",
            "stDate": "2025-01-28",
            "enDate": "2025-02-12"
        },
        {
            "id": "200",
            "name": "venu",
            "email": "venu@gmail.com",
            "age": "22",
            "doj": "2025-02-04",
            "gender": "male",
            "company": "qad",
            "role": "qwd",
            "experience": "33",
            "stDate": "2025-02-06",
            "enDate": "2025-02-05"
        },
        {
            "id": "300",
            "name": "candy",
            "email": "candy@gmail.com",
            "age": "21",
            "doj": "2025-02-13",
            "gender": "female",
            "company": "wef",
            "role": "wef",
            "experience": "54",
            "stDate": "2025-02-13",
            "enDate": "2025-02-13"
        },
        {
            "id": "400",
            "name": "sekhar",
            "email": "sekhar@gmail.com",
            "age": "34",
            "doj": "2025-02-13",
            "gender": "male",
            "company": "ibm",
            "role": "asd",
            "experience": "4",
            "stDate": "2025-01-29",
            "enDate": "2024-12-16"
        },
        {
            "id": "500",
            "name": "raja sekhar",
            "email": "rajasekhar@gmail.com",
            "age": "23",
            "doj": "2025-06-13",
            "gender": "male",
            "company": "ibm",
            "role": "asd",
            "experience": "4",
            "stDate": "2025-01-29",
            "enDate": "2024-12-16"
        }
    ]);
    const [search,setSearch] = useState({id:"",name:"",email:"",age:"",doj:"",gender:""});
    const [filArr,setFilArr] = useState([
        {
            "id": "100",
            "name": "raja",
            "email": "raja@gmail.com",
            "age": "23",
            "doj": "2025-02-06",
            "gender": "male",
            "company": "asd",
            "role": "asd",
            "experience": "3",
            "stDate": "2025-01-28",
            "enDate": "2025-02-12"
        },
        {
            "id": "200",
            "name": "venu",
            "email": "venu@gmail.com",
            "age": "22",
            "doj": "2025-02-04",
            "gender": "male",
            "company": "qad",
            "role": "qwd",
            "experience": "33",
            "stDate": "2025-02-06",
            "enDate": "2025-02-05"
        },
        {
            "id": "300",
            "name": "candy",
            "email": "candy@gmail.com",
            "age": "21",
            "doj": "2025-02-13",
            "gender": "female",
            "company": "wef",
            "role": "wef",
            "experience": "54",
            "stDate": "2025-02-13",
            "enDate": "2025-02-13"
        },
        {
            "id": "400",
            "name": "sekhar",
            "email": "sekhar@gmail.com",
            "age": "34",
            "doj": "2025-02-13",
            "gender": "male",
            "company": "ibm",
            "role": "asd",
            "experience": "4",
            "stDate": "2025-01-29",
            "enDate": "2024-12-16"
        },
        {
            "id": "500",
            "name": "raja sekhar",
            "email": "rajasekhar@gmail.com",
            "age": "23",
            "doj": "2025-06-13",
            "gender": "male",
            "company": "ibm",
            "role": "asd",
            "experience": "4",
            "stDate": "2025-01-29",
            "enDate": "2024-12-16"
        }
    ]);

    return(
        <>
            <div className="head">
                <button class="hbtn" onClick={() => setDisplay("Form")}>Form</button>
                <button class="hbtn" onClick={() => setDisplay("Detail")}>Details</button>
                {display === "Form" ? <Form obj={obj} setObj={setObj} arr={arr} setArr={setArr} filArr={filArr} setFilArr={setFilArr} search={search} setSearch={setSearch}/> : display === "Detail" ? <Detail Data={filArr} /> : null}
            </div> 
            <br/>
        </>
    )
}

export default Head;