import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, TextField } from '@mui/material';

function App() {
    const [data, setData] = useState([
        { id: 1, name: 'John Doe', age: 25 },
        { id: 2, name: 'Jane Smith', age: 32 },
    ]);

    const [newNameValue, setNewNameValue] = useState("")
    const [newAgeValue, setNewAgeValue] = useState("")
    const [newRow, setNewRow] = useState(false)

    const addRow = () => {
        setNewRow(true)
    };

    const handleChangeRow = (event) => {
        setNewNameValue(event.target.value)
    }
    const handleChangeAge = (event) => {
        setNewAgeValue(event.target.value)
    }
    const handleAddRow = () => {
        const newData = [...data, { id: data.length + 1, name: newNameValue, age: newAgeValue }]
        setData(newData);
        setNewRow(false)
        setNewNameValue("")
        setNewAgeValue("")
    }

    const deleteRow = (id) => {
        // Use the filter function to remove the row with the specified id
        setData(data.filter((row) => row.id !== id));
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={addRow}>
                Add Row
            </Button>
            {newRow ? (
                <div>
                    <TextField
                        id="outlined-basic"
                        label="Row Name"
                        variant="outlined"
                        value={newNameValue}
                        onChange={handleChangeRow}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Age"
                        variant="outlined"
                        value={newAgeValue}
                        onChange={handleChangeAge}
                    />
                    <Button variant="contained" color="primary" onClick={handleAddRow}>
                        Confirm
                    </Button>
                </div>
            ) : null}
            <Table className={"table"}>
                <TableHead>
                    <TableRow>
                        {Object.keys(data[0]).map((key) => <TableCell key={key}>{key}</TableCell>)}
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.id}>
                            {Object.keys(row).map((key) => <TableCell key={key}>{row[key]}</TableCell>)}
                            <TableCell>
                                <Button variant="contained" color="secondary" onClick={() => deleteRow(row.id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default App;