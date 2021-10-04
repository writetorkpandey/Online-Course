import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../../Firebase/Firebase";

export default function StudentList() {
  const [studentList, setStudentList] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "StudentDB"), (snapshot) =>
        setStudentList(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

  const searchData = (e) => {
    console.log(e.target.value);
    const x = studentList.filter((data) => data.Name.includes(e.target.value));
    setStudentList(x);
    console.log(x);
  };
  const EditDataForStudent = (StudentId) => {
    fetch("http://localhost:17575//api/Student/StudentList", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setStudentList(response.getStudentList);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header></Header>
      <Menu></Menu>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Student List</h3>
                  <div className="card-tools">
                    <div className="input-group input-group-sm">
                      <input
                        type="text"
                        name="table_search"
                        className="form-control float-right"
                        placeholder="Search"
                        onChange={searchData}
                      />
                      <div className="input-group-append">
                        <button type="submit" className="btn btn-default">
                          <i className="fas fa-search" />
                        </button>
                      </div>

                      <div
                        className="input-group-append"
                        style={{ marginLeft: 20 }}
                      >
                        <Link
                          to="newstudent"
                          className="btn btn-dark btn-flat text-white"
                        >
                          <i className="fa fa-plus-circle" />
                          Add New Student
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body table-responsive p-0">
                  <table className="table table-head-fixed text-nowrap">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Image</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentList &&
                        studentList.map((item, index) => {
                          return (
                            <tr>
                              <td>{index + 1}</td>

                              <td>{item.Name}</td>
                              <td>{item.Email}</td>
                              <td>{item.Phone}</td>

                              <td>Image</td>
                              <td>
                                <a
                                  href="#"
                                  class="text-muted"
                                  // onClick={editStudent(item.StudentId)}
                                >
                                  <i class="fas fa-edit"></i>
                                </a>
                                <a href="#" class="text-muted">
                                  <i class="fas fa-delete"></i>
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
