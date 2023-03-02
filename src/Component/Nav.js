import useStore from "../Store/Store";
import { AiFillHome} from "react-icons/ai";
import { FaBrain,FaPaste ,FaClipboardList } from "react-icons/fa";
import { Menu } from 'antd';
import React from 'react';
  const Nav = () => {
const SidebarColor = useStore((state) => state.SidebarColor);
    return (
      <Menu
          theme='dark'
          style={{backgroundColor:SidebarColor}}
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <AiFillHome size={22}/>,
                label: 'Home ',
              },
              {
                key: '2',
                icon: <FaClipboardList size={22}/>,
                label: 'About Us',
              },
              {
                key: '3',
                icon: <FaPaste size={22}/>,
                label: 'Contact us',
              },
              {
                key:'4',
                icon:<FaBrain size={22}/>,
                label:'Our Vision'
              }
            ]}
          />
    );
  };
  export default Nav;