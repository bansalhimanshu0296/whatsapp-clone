import React from 'react'
import "./css/Sidebar.css"
import { DonutLarge, Chat, MoreVert, SearchOutlined, FilterList, Groups } from '@mui/icons-material'
import { IconButton, Avatar } from '@mui/material'
import SidebarChat from './SidebarChat'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar />
            <div className='sidebar__headerRight'>
                <IconButton>
                    <Groups />
                </IconButton>
               <IconButton>
                    <DonutLarge />
                </IconButton>
                <IconButton>
                    <Chat />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </div>
        </div>
        <div className='sidebar__search'>
            <div className='sidebar__searchContainer'>
                <SearchOutlined />
                <input placeholder='Search or start new chat' type='text'/>
            </div>
            <IconButton>
                <FilterList />
            </IconButton>
        </div>
        <div className='sidebar__chats'>
            
        </div>
    </div>
  )
}

export default Sidebar