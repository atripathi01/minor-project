import React, { useState } from 'react';
import classes from './BookTable.module.css';

const TABLE_DATA = [
  {
    label: '01',
  },
  {
    label: '02',
  },
  {
    label: '03',
  },
  {
    label: '04',
  },
  {
    label: '05',
  },
  {
    label: '06',
  },
];

const Table = ({ children, isBooked, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${isBooked ? classes.isBooked : classes.notBooked}  ${
        classes.tableContainer
      }`}
    >
      {children}
    </div>
  );
};

const BookTable = ({ setIsBookTable }) => {
  const [bookedTables, setBookTables] = useState(['01', '04']);
  const [copyOfBookedTables, setCopyOfBookedTables] = useState([]);
  const handleSubmit = () => {
    setIsBookTable(false);
  };

  const handleClick = (label) => {
    if (bookedTables.includes(label)) {
      const copy = bookedTables;
      const index = copy.indexOf(label);
      if (index > -1) {
        copy.splice(index, 1); // 2nd parameter means remove one item only
        setBookTables(copy);
      }
    } else {
      const copy = [...bookedTables, label];
      setBookTables(copy);
    }
  };

  return (
    <>
      <h1 className={classes.heading}>Book your Table</h1>
      <div className={classes.container}>
        {TABLE_DATA.map(({ label }, index) => {
          return (
            <Table
              isBooked={bookedTables.includes(label)}
              onClick={() => {
                handleClick(label);
              }}
              key={index}
            >
              {label}
            </Table>
          );
        })}
      </div>
      <div className={classes.choicesContainer}>
        <div className={classes.choicesContainer}>
          <div className={classes.colorBlue} />
          <span>Booked Tables</span>
        </div>
        <div className={classes.choicesContainer}>
          <div className={classes.colorGreen} />
          <span>Available Tables</span>
        </div>
      </div>
      <button className={classes.submitBtn} onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default BookTable;
