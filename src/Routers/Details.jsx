import React from "react";

const Details = ({Data}) => {
    return (
        <>
            <hr/>
            <div class="frmTab">
                <table border={2} style={{width:"90%",borderCollapse:"collapse",margin:"5px"}}>
                    <thead style={{backgroundColor:"black",color:"white"}}>
                        <tr>
                            <th>S.No</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Role</th>
                            <th>Experience</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Data.length > 0 ?
                            Data.map((obj,i) => (
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{obj.id}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.company}</td>
                                    <td>{obj.role}</td>
                                    <td>{obj.experience}</td>
                                    <td>{obj.stDate}</td>
                                    <td>{obj.enDate}</td>
                                </tr>
                            )) : <tr><td colSpan={8}>No Data</td></tr>
                        }
                    </tbody>
                </table>  
            </div>
        </>
    )
}

export default Details;