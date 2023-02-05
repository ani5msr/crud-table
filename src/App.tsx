import React, { useEffect, useState } from 'react'
import Table, { AvatarCell, EditCell, SelectColumnFilter, StatusPill } from './Table'  // new
import { useMemo } from 'react';
import { useTable } from 'react-table'; 
import {Box,Button}  from '@mui/material';
import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';
interface User {
  name: string;
  email: string;
  status: 'Active' | 'Inactive' | 'Offline';
  role: 'Admin' | 'Owner' | 'Member';
  imgUrl: string;
}
const fetchData = () => axios.get(`https://jsonplaceholder.typicode.com/users`);

const getData = (): User[] => {
  const data: User[] =[
    {
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      status: 'Active',
      role: 'Admin',
      imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      status: 'Inactive',
      role: 'Owner',
      imgUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      status: 'Active',
      role: 'Member',
      imgUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      status: 'Offline',
      role: 'Member',
      imgUrl: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Kristin Watson',
      email: 'kristin.watson@example.com',
      status: 'Inactive',
      role: 'Admin',
      imgUrl: 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cameron Williamson',
      email: 'cameron.williamson@example.com',
      status: 'Active',
      role: 'Member',
      imgUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ]
  return [...data, ...data, ...data]
}

interface Column {
  Header: string;
  accessor: string;
  Cell?: any;
  imgAccessor?: string;
  emailAccessor?: string;
  Filter?: any;
  filter?: string;
  }
  interface Props {
    row: {
    id: number;
    };
    }
  const App = () => {
  const columns = useMemo<Column[]>(() => [
  {
  Header: "Name",
  accessor: 'name',
  Cell: AvatarCell,
  imgAccessor: "imgUrl",
  emailAccessor: "email",
  },
  {
  Header: "Status",
  accessor: 'status',
  Cell: StatusPill,
  },
  {
  Header: "Role",
  accessor: 'role',
  Filter: SelectColumnFilter, // new
  filter: 'includes'
  },
  {
    Header: "Actions",
    accessor: "actions",
    Cell: EditCell,
  },
  ], []);

  const data = useMemo(() => getData(), []);
  
  return (
  <div className="min-h-screen bg-gray-100 text-gray-900">
  <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
  <div className="">
  <h1 className="text-xl font-semibold">React Table + Tailwind CSS = ❤</h1>
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', position: '', top: '70px'}}>
                <Button variant="contained" >Download Csv</Button>
                <Button variant="contained" >Add User</Button>
            </Box>
  </div>
  <div className="mt-6">
  <Table columns={columns} data={data} />
  </div>
  </main>
  </div>
  );
  }
  
  export default App;