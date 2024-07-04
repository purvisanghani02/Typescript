import "./list.css";
import { SignUpFormState } from "./Form";
import { FC, useEffect, useState } from "react";
import { Eye, EyeOff, Pencil, Trash } from "lucide-react";

interface listuser {
  show: SignUpFormState[];
  edithandler: (id: number, item: SignUpFormState) => void;
  deletehandler: (id: number) => void;
}

const List: FC<listuser> = ({ show, edithandler, deletehandler }) => {
  // const [visible, setvisible] = useState(false);
  const [visiblePasswordIndex, setVisiblePasswordIndex] = useState<
    number | null
  >(null);

  const togglePasswordVisibility = (index: number) => {
    console.log("index", index);
    setVisiblePasswordIndex(visiblePasswordIndex === index ? null : index);
  };

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
                      <td className="d-flex justify-content-between align-items-center">
                        {visiblePasswordIndex === index ? (
                          <>
                            <div>{item.password}</div>
                            <div>
                              <Eye
                                onClick={() => togglePasswordVisibility(index)}
                              />
                            </div>
                          </>
                        ) : (
                          <>
                            <div>*******</div>
                            <div>
                              <EyeOff
                                onClick={() => togglePasswordVisibility(index)}
                              />
                            </div>
                          </>
                        )}
                      </td>
                      <td>
                        <Pencil
                          color="#05208a"
                          onClick={() => {
                            edithandler(index, item);
                          }}
                        />
                      </td>
                      <td>
                        <Trash
                          color="#9d0606"
                          onClick={() => {
                            deletehandler(index);
                          }}
                        />
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
