import React,{useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Form = () => {

    const [obj,setObj] = useState({id:"",name:"",email:"",age:"",doj:"",gender:"",company:"",role:"",experience:"",stDate:"",enDate:""});
    const [arr,setArr] = useState([]);
    const [search,setSearch] = useState({id:"",name:"",email:"",age:"",doj:"",gender:""});
    const [filArr,setFilArr] = useState([]);

    const [bool,setBool] = useState(false);
    const [index,setIndex] = useState();
    console.log("search =  ",search);
    console.log("filArr = ",filArr)
    let {id,name,email,age,doj,gender,company,role,experience,stDate,enDate} = obj;

    function saveData(){
        (obj.id===""||obj.name===""||obj.email===""||obj.age===""||obj.doj===""||obj.gender===""||obj.company===""||obj.role===""||obj.experience===""||obj.stDate===""||obj.enDate==="") ? alert("Please enter all fields") : filterDupData() ;
        setObj({id:"",name:"",email:"",age:"",doj:"",gender:"",company:"",role:"",experience:"",stDate:"",enDate:""});
    }

    function filterDupData(){
        let newData = arr.some((e) => e.id === id);
        console.log("filterDupData",id)
        if(!newData){
            let updateData = [...arr,obj];
            setArr(updateData);
            setFilArr(updateData)
        }else{
            alert("This id data already recorded.")
        } 
    }

    function deleteData(i){
        console.log(i,"this index will delete")
        let newArr = [...arr];
        newArr.splice(i,1);
        setArr(newArr)
        setFilArr(newArr)
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
       
        arr[index] = {id,name,email,age,doj,gender,company,role,experience,stDate,enDate};
        setArr(arr);
        setFilArr(arr);
        setBool(false);
        setObj({id:"",name:"",email:"",age:"",doj:"",gender:"",company:"",role:"",experience:"",stDate:"",enDate:""});
    }

    function searchData(e,key){
        setSearch({...search,[key]:e.target.value});
        filterData(e,key);
    }

    function filterData(e,key){
        console.log("filterData e = ",e.target.value)
        console.log("filterData key = ",key)
        let value = e.target.value;

        let filData = arr.filter((obj) => obj[key].includes(value));
        console.log("filData =",filData);
        console.log("filData.length =",filData.length);

        setFilArr(filData);
    }

    return (
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
                <table border={3} style={{borderCollapse:"collapse",marginBottom:"50px"}}>
                    <thead style={{backgroundColor:"black",color:"white"}}>
                        <tr>
                            <th>S.No</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Mail</th>
                            <th>Age</th>
                            <th>DOJ</th>
                            <th>Gender</th>
                            <th>Changes</th>
                            <th>Remove</th>
                        </tr>
                        <tr>
                            <th><AccountCircleIcon style={{marginTop:"4px"}}/></th>
                            <th><input type="number" value={search.id} onChange={(e) => searchData(e,"id")}/></th>
                            <th><input type="text" value={search.name} onChange={(e) => searchData(e,"name")}/></th>
                            <th><input type="email" value={search.email} onChange={(e) => searchData(e,"email")}/></th>
                            <th><input type="number" value={search.age} onChange={(e) => searchData(e,"age")}/></th>
                            <th><input type="text" value={search.doj} onChange={(e) => searchData(e,"doj")}/></th>
                            <th><input type="text" value={search.gender} onChange={(e) => searchData(e,"gender")}/></th>
                            <th><EditIcon style={{marginTop:"4px"}}/></th>
                            <th><DeleteIcon style={{marginTop:"4px"}}/></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filArr.length > 0 ?
                            filArr.map((obj,i) => (
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
                            ))  : <tr><td colSpan={9}>No Data</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Form;