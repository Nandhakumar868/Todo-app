import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FilterListSharpIcon from '@mui/icons-material/FilterListSharp';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const MyTasks = () => {
  return (
    <div>
        <div className='bg-red-500 h-14 flex justify-center'>
            <h1 className='font-bold text-3xl p-2'>Todo App</h1>
        </div>
        <div className='flex items-center justify-between m-3 relative'>
            <p className='mr-auto text-xl'>Manage your tasks with Todo App</p>
            <div className='flex items-center'>
                <TextField type='search' placeholder='Search Tasks' className='border-black p-1' InputProps={{startAdornment:(<InputAdornment position="start"><SearchIcon/></InputAdornment>), style:{height:'26px'} }}/>
                <FilterListSharpIcon/>
            </div>
        </div>
        
        <div>
            <div class="bg-white rounded-lg shadow-lg shadow-black-400/50 p-1 m-3 h-8 w-44 border border-gray-300 flex flex-row items-center justify-between">
                <div class="flex flex-row items-center">
                    <h1 className='p-1'>Todo</h1>
                    <div class="bg-black rounded-full shadow-lg shadow-black-400/50 p-0 m-0 h-6 w-6 flex items-center justify-center">
                        <span class="inline-block relative">
                        <span class="text-center text-white font-bold text-sm">10</span>
                        </span>
                    </div>
                </div>
                <div class="flex flex-row items-center space-x-1">
                    <AddIcon />
                    <MoreVertIcon />
                </div>
            </div>
        </div>


        
    </div>
  )
}

export default MyTasks;