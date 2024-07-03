import "./list.css";
import { SignUpFormState } from "./Form";
import { FC, useEffect, useState } from "react";

interface listuser {
  show: SignUpFormState[];
  edithandler: (id: number, item: SignUpFormState) => void;
  deletehandler: (id: number) => void;
}

const List: FC<listuser> = ({ show, edithandler, deletehandler }) => {
  return (
    <>
      {show.length <= 0 ? (
        <h1 className="container w-50 mt-5 text-center">No data</h1>
      ) : (
        <>
          <div className="container w-50 mt-5">
            <table>
              <tbody>
                <tr>
                  <th>id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                {show?.map((item, index) => {
                  console.log("item---");
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {item.firstname} {item.lastname}
                      </td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>
                        <button
                          onClick={() => {
                            edithandler(index, item);
                          }}
                          type="submit"
                          className="btn btn-success "
                        >
                          edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            deletehandler(index);
                          }}
                          type="submit"
                          className="btn btn-danger "
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default List;
