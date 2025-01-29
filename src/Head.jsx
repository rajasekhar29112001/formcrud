import React,{useState} from "react";
import Form from "./Form";
import Detail from "./Detail";

const Head = () => {

    const [display,setDisplay] = useState("Form");
    console.log("Display",display);

    const [obj,setObj] = useState({id:"",name:"",email:"",age:"",doj:"",gender:"",company:"",role:"",experience:"",stDate:"",enDate:""});
    const [arr,setArr] = useState([]);

    return(
        <>
            <div class="head">
                <button class="hbtn" onClick={() => setDisplay("Form")}>Form</button>
                <button class="hbtn" onClick={() => setDisplay("Detail")}>Details</button>
                {display === "Form" ? <Form obj={obj} setObj={setObj} arr={arr} setArr={setArr} /> : display === "Detail" ? <Detail Data={arr}/> : null}
            </div> 
            <br/>
        </>
    )
}

export default Head;