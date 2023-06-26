import { useState } from 'react'
import reactLogo from '/src/assets/react.svg'
import viteLogo from '/vite.svg'
import '/src/App.css'

import ReactTables from '/src/Components/ReactTables'
import ValidationForms from '../Components/ValidationForms'
import RegularForms from '../Components/RegularForms'
import ExtendedForms from '../Components/ExtendedForms'
import AdminNavbar from '../Components/AdminNavbar'

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Label,
    FormGroup,
    Form,
    Input,
    Row,
    Col,
  } from "reactstrap";
import GridSystem from '../Components/GridSystem'
import ExtendedTables from '../Components/ExtendedTables'

function Faculty() {
    const [count, setCount] = useState(0)
    const [loginFullNameState, setloginFullNameState] = useState("");
    const [loginFullName, setloginFullName] = useState("");

    const verifyLength = (value, length) => {
        if (value.length >= length) {
          return true;
        }
        return false;
      };

      const loginClick = () => {
        if (loginFullNameState === "") {
          setloginFullNameState("has-danger");
        }
        if (loginEmailState === "") {
          setloginEmailState("has-danger");
        }
        if (loginPasswordState === "") {
          setloginPasswordState("has-danger");
        }
      };

    return (
        <div >
            {/* <Row> */}
                <ExtendedTables />
                {/* <AdminNavbar /> */}
                {/* <FormGroup className={`has-label ${loginFullNameState}`}>
                    <label>Full Name *</label>
                    <Input
                      name="fullname"
                      type="text"
                      onChange={(e) => {
                        if (!verifyLength(e.target.value, 1)) {
                          setloginFullNameState("has-danger");
                        } else {
                          setloginFullNameState("has-success");
                        }
                        setloginFullName(e.target.value);
                      }}
                    />
                    {loginFullNameState === "has-danger" ? (
                      <label className="error">This field is required.</label>
                    ) : null}
                  </FormGroup>
                  </Row> */}
        </div>
    )
  }
  
  export default Faculty