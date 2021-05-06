import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import GetData from './Data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 75 },
  { field: 'Surname', headerName: 'Фамилия', width: 160 },
  { field: 'First_name', headerName: 'Имя', width: 160 },
  { field: 'Middle_name', headerName: 'Отчество', width: 160 },
  { field: 'Passport_ID', headerName: 'Код пасспорта', width: 150 },
  { field: 'Passport_Series', headerName: 'Серия пасспорта', width: 175 },
  { field: 'Date_of_passport_issuance', headerName: 'Дата получения пасспорта', width: 250 },
];

const rows = GetData();

export default function DataGridDemo() {
  return (
    <div style={{ height: 900, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={15} />
    </div>
  );
}