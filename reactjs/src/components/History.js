import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const History = () => {
  const { history } = useContext(AppContext);

  return (
    <div className="container mt-4">

      <div className="card shadow">

        <div className="card-header bg-dark text-white">
          <h4 className="mb-0">
            Transaction History
          </h4>
        </div>

        <div className="card-body">

          {history.length === 0 ? (
            <div className="alert alert-info">
              No transactions available.
            </div>
          ) : (

            <div className="table-responsive">

              <table className="table table-bordered table-striped table-hover">

                <thead className="table-primary">
                  <tr>
                    <th>#</th>
                    <th>Prompt</th>
                    <th>Target Language</th>
                    <th>Response</th>
                  </tr>
                </thead>

                <tbody>

                  {history.map((item, index) => (
                    <tr key={index}>

                      <td>{index + 1}</td>

                      <td>
                        {item.request.prompt}
                      </td>

                      <td>
                        {item.request.targetLanguage}
                      </td>

                      <td>
                        {typeof item.response === "object"
                          ? JSON.stringify(item.response)
                          : item.response}
                      </td>

                    </tr>
                  ))}

                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default History;