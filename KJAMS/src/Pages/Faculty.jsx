import { useState } from 'react'
import reactLogo from '/src/assets/react.svg'
import viteLogo from '/vite.svg'
import '/src/App.css'
import Select from "react-select";

import ReactTables from '/src/Components/ReactTables'
import ValidationForms from '../Components/ValidationForms'
import RegularForms from '../Components/RegularForms'
import ExtendedForms from '../Components/ExtendedForms'
import AdminNavbar from '../Components/AdminNavbar'
import Buttons from '../Components/Buttons'

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
    const [loginEmailState, setloginEmailState] = useState("");
    const [loginPasswordState, setloginPasswordState] = useState("");
    const [departmentSelect, handleDepartmentSelect] = useState({
      value: 0,
      label: "Department",
    });

    const [clubSelect, handleClubSelect] = useState({
      value: 0,
      label: "Club",
    });

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

      const verifyEmail = (value) => {
        var emailRex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRex.test(value)) {
          return true;
        }
        return false;
      };

    return (
        <div >
            <Row>
            <Card style={{minWidth: "1366px"}}>
              <CardHeader>
                <CardTitle tag="h3" className='text-left'>Add Faculty</CardTitle>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                  <FormGroup className={`has-label ${loginFullNameState}`}>
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
                  </Col>
                  <Col>
                  <FormGroup className={`has-label ${loginEmailState}`}>
                    <label>Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      onChange={(e) => {
                        if (!verifyEmail(e.target.value)) {
                          setloginEmailState("has-danger");
                        } else {
                          setloginEmailState("has-success");
                        }
                        setloginEmail(e.target.value);
                      }}
                    />
                    {loginEmailState === "has-danger" ? (
                      <label className="error">
                        Please enter a valid email address.
                      </label>
                    ) : null}
                  </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                  <Select
                      className="react-select primary"
                      classNamePrefix="react-select"
                      name="departmentSelect"
                      value={departmentSelect}
                      onChange={(value) => {
                        handleDepartmentSelect(value);
                      }}
                      options={[
                        {
                          value: "",
                          label: "Department",
                          isDisabled: true
                        },
                        { value: "2", label: "Computer Science(UG)" },
                        { value: "3", label: "BBA" }
                      ]}
                      placeholder="Department"
                    />
                  </Col>
                  <Col>
                  <Select
                    className="react-select primary"
                    classNamePrefix="react-select"
                    name="clubSelect"
                    value={clubSelect}
                    onChange={(value) => {
                      handleClubSelect(value);
                    }}
                    options={[
                      {
                        value: "",
                        label: "None",
                        isDisabled: false
                      },
                      { value: "2", label: "LCA" },
                      { value: "3", label: "Debating Society" },
                      { value: "4", label: "UBA" }
                    ]}
                    placeholder="Club"
                  />
                  </Col>
                </Row>
            
                <Button color="primary" className="col-12 my-4 mx-auto primaryColor">ADD</Button>
                </CardBody>
              </Card>
            </Row>

            <Row>
                <ReactTables />   
            </Row>
            <Buttons />
        </div>
    )
  }
  
  export default Faculty


  