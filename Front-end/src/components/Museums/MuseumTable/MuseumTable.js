import React, { useState, useEffect, useMemo, useRef } from "react";
import { useTable } from "react-table";
import axios from 'axios';

const MuseumsList = (props) => {
  const [museums, setMuseums] = useState([]);

  const museumsRef = useRef();

  museumsRef.current = museums;

  useEffect((getAllMuseums) => {
    axios.get('http://127.0.0.1:8080/museum')
      .then(res => {
        const museums = res.data;
        setMuseums(museums);
      }).catch((err) => console.log(err));
    }, []
  );
  const openMuseum = (rowIndex) => {
    const id = museumsRef.current[rowIndex].id;
    props.history.push("/museums/" + id);
  };

  const deleteMuseum = (rowIndex) => {
    const id = museumsRef.current[rowIndex].id;

    axios.delete(`http://127.0.0.1:8080/museum/delete/${id}`)
    .then(res =>{
        props.history.push("/museums");

        let newMuseums = [...museumsRef.current];
        newMuseums.splice(rowIndex, 1);

        setMuseums(newMuseums);

    })
    .catch((e) => {
        console.log(e);
      });
    };   

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Status",
        accessor: "published",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span onClick={() => openMuseum(rowIdx)}>
                <i className="far fa-edit action mr-2"></i>
              </span>

              <span onClick={() => deleteMuseum(rowIdx)}>
                <i className="fas fa-trash action"></i>
              </span>
            </div>
          );
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data: museums,
  });

  return (
    <div className="list row">
      {/* <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div> */}
      <div className="col-md-12 list">
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="col-md-8">
        {/* <button className="btn btn-sm btn-danger" onClick={}> */}
          Remove All
        {/* </button> */}
      </div>
    </div>
  );
};

export default MuseumsList;