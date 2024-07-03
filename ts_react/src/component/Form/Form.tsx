import axios from "axios";
import { FC, useEffect, useState } from "react";
import List from "./List";

export interface SignUpFormState {
  firstname: string;
  lastname: string;
  email: string;
  password: string | number;
}

const Form = () => {
  const [value, setValue] = useState<SignUpFormState>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [show, setShow] = useState<SignUpFormState[]>([]);
  const [edit, setedit] = useState<number | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

  console.log("show", show);

  useEffect(() => {
    const showlistdata = localStorage.getItem("listdata");
    if (showlistdata) {
      const normaldata: SignUpFormState[] = JSON.parse(showlistdata);
      setShow(normaldata);
    }
  }, []);

  const handlechange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    // const { name, value } = e.target;
    setValue((predata) => ({ ...predata, [name]: e.target?.value }));
  };

  const handlesubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (edit !== null) {
      // const updatedShow = [...show];
      // using map-------------------
      const updatedShow = show.map((item, index) =>
        index === edit ? value : item
      );
      // updatedShow.splice(edit, 01, value);  //using splice
      updatedShow[edit] = value;
      setShow(updatedShow);
      localStorage.setItem("listdata", JSON.stringify(updatedShow));
      setedit(null);
      setValue({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
      setVisible(false);
    } else {
      const newshow = [...show, value];
      setShow(newshow);
      localStorage.setItem("listdata", JSON.stringify([...show, value]));
      setValue({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
    }
  };

  const edithandler = (id: number, item: SignUpFormState) => {
    setValue(item);
    setedit(id);
    setVisible(true);
    // console.log("ediritem", item);
    // console.log("id----", id);
  };

  const deletehandler = (id: number) => {
    const newlist = show.filter((_, index) => index !== id);
    console.log("newlist-----", newlist);
    setShow(newlist);
    localStorage.setItem("listdata", JSON.stringify(newlist));
    // console.log("delete id----", id);
  };

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center flex-column mt-5">
        <div>{/* <h3 className="text-start">LIST</h3> */}</div>

        <form
          onSubmit={handlesubmit}
          className="w-50"
          style={{ width: "500px" }}
        >
          <div className="mb-2">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => handlechange(e, "firstname")}
              value={value.firstname}
              autoComplete="given-name"
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => handlechange(e, "lastname")}
              value={value.lastname}
              autoComplete="family-name"
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={(e) => handlechange(e, "email")}
              value={value.email}
              autoComplete="email"
            />
          </div>
          <div className="mb-2">
            <label className="form-label">password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => handlechange(e, "password")}
              value={value.password}
              autoComplete="current-password"
            />
          </div>
          {visible ? (
            <button type="submit" className="btn btn-primary mt-2">
              update
            </button>
          ) : (
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          )}
        </form>
      </div>
      <List
        show={show}
        edithandler={edithandler}
        deletehandler={deletehandler}
      />
    </>
  );
};

export default Form;
