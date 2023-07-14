import React ,{Fragment}from "react";
import { Button,Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Driver(){
    return(
        <div style={{margin:"10rem"}}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
        </div>
    )
}

export default Driver;