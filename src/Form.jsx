import React,{useState} from "react";

const Form = ({obj,setObj,arr,setArr}) => {

    const [bool,setBool] = useState(false);
    const [index,setIndex] = useState();
    let {id,name,email,age,doj,gender,company,role,experience,stDate,enDate} = obj;

    function saveData(){
        (obj.id===""||obj.name===""||obj.email===""||obj.age===""||obj.doj===""||obj.gender===""||obj.company===""||obj.role===""||obj.experience===""||obj.stDate===""||obj.enDate==="") ? alert("Please enter all fields") : filterDupData() ;
        setObj({id:"",name:"",email:"",age:"",doj:"",gender:"",company:"",role:"",experience:"",stDate:"",enDate:""});
    }

    function filterDupData(){
        let newData = arr.some((e) => e.id === id);
        console.log("filterDupData",id)
        if(!newData){
            setArr([...arr,obj]);
        }else{
            alert("This id data already recorded.")
        } 
    }

    console.log("array",arr);

    function deleteData(i){
        console.log(i,"this index will delete")
        let newArr = [...arr];
        newArr.splice(i,1);
        setArr(newArr)
    }

    function editData(i){
        console.log(i,"this index will edit")
        let {id,name,email,age,doj,gender,company,role,experience,stDate,enDate} = arr[i];
        console.log(id,name,email,age,doj,gender,company);
        setObj({id,name,email,age,doj,gender,company,role,experience,stDate,enDate});
        setBool(true);
        setIndex(i)
    }

    function updateData(){
        // let newArr = [...arr];
        // newArr.splice(index,1,{id,name,email,age,doj,gender,company,role,experience,stDate,enDate});
        // setArr(newArr);
        if(index > -1){
            arr[index] = {id,name,email,age,doj,gender,company,role,experience,stDate,enDate};
            setArr(arr);
        }
        setBool(false);
        setObj({id:"",name:"",email:"",age:"",doj:"",gender:"",company:"",role:"",experience:"",stDate:"",enDate:""});
    }

    return(
        <>  
            <hr/>
            <div class="frmTab">
                <div class="frm">
                    <h3>Personal Details</h3>
                    <form>
                        <label>Id: <input type="number" value={obj.id} onChange={(e) => setObj({...obj,id:e.target.value})} placeholder="enter id"/></label><br/><br/>
                        <label>Name: <input type="text" value={obj.name} onChange={(e) => setObj({...obj,name:e.target.value})} placeholder="enter name"/></label><br/><br/>
                        <label>Mail: <input type="email" value={obj.email} onChange={(e) => setObj({...obj,email:e.target.value})} placeholder="enter mail"/></label><br/><br/>
                        <label>Age: <input type="number" value={obj.age} onChange={(e) => setObj({...obj,age:e.target.value})} placeholder="enter age"/></label><br/><br/>
                        <label>DoJ: <input type="date" value={obj.doj} onChange={(e) => setObj({...obj,doj:e.target.value})} placeholder="enter date of joining"/></label><br/><br/>
                        <label>Gender:  
                            <select value={obj.gender} onChange={(e) => setObj({...obj,gender:e.target.value})}>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select></label><br/><br/>   
                    </form>
                </div>
                <div class="frm">
                        <h3>Previous Company Details</h3> 
                        <form>
                            <label>Company: <input type="text" value={obj.company} onChange={(e) => setObj({...obj,company:e.target.value})} placeholder="enter company name"/></label><br/><br/>
                            <label>Role: <input type="text" value={obj.role} onChange={(e) => setObj({...obj,role:e.target.value})} placeholder="enter role"/></label><br/><br/>
                            <label>Experience: <input type="number" value={obj.experience} onChange={(e) => setObj({...obj,experience:e.target.value})} placeholder="enter experience"/></label><br/><br/>
                            <label>Start Date: <input type="date" value={obj.stDate} onChange={(e) => setObj({...obj,stDate:e.target.value})} placeholder="enter start Date"/></label><br/><br/>
                            <label>End Date: <input type="date" value={obj.enDate} onChange={(e) => setObj({...obj,enDate:e.target.value})} placeholder="enter end Date"/></label><br/><br/>
                            <button type="button" style={{padding:"5px",width:"70px",backgroundColor:"black",color:"white",cursor:"pointer"}} onClick={!bool?saveData:updateData}>{!bool?"Save":"Update"}</button>
                        </form>           
                </div>
            </div>

            <hr/>

            <div class="frmTab">
                <table border={3} style={{width:"100%",borderCollapse:"collapse",textAlign:"center"}}>
                    <thead style={{backgroundColor:"black",color:"white"}}>
                        <tr>
                            <th>S.No</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Mail</th>
                            <th>Age</th>
                            <th>Doj</th>
                            <th>Gender</th>
                            <th>Changes</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            arr.map((obj,i) => (
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{obj.id}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.age}</td>
                                    <td>{obj.doj}</td>
                                    <td>{obj.gender}</td>
                                    <td><button onClick={() => editData(i)}>Edit</button></td>
                                    <td><button onClick={() => deleteData(i)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Form;