import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { getAllUsers, deleteUser } from "../../services/index";
function TableUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        let res = await getAllUsers();
        setUsers(res.data.data);
      } catch (err) {
        return err;
      }
    };
    getUsers();
  }, []);

  return (
    <>
      {users.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Nombre y apellido</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((data) => {
              return (
                <tr key={data._id}>
                  <td>
                    {data.name} {data.lastName}
                  </td>
                  <td>
                    <Button
                      data-id={data.dni}
                      onClick={async (e) => {
                        await deleteUser(e.target.dataset.id);
                      }}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default TableUsers;
