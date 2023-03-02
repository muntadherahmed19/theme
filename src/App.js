import useStore from "./Store/Store";
import Nav from "./Component/Nav";

import {FaBars,FaEquals } from "react-icons/fa";
import { Layout,theme ,Modal,FloatButton, Table, ConfigProvider} from 'antd';
import React, { useState } from 'react';
import { BiWorld } from "react-icons/bi";
import CTheme from "./Theme/ChangeTheme";
const { Header, Sider, Content ,Footer} = Layout;
const { Column, ColumnGroup } = Table;

function App() {

  const Theme = useStore((state) => state.Theme);
  const Bgcolor = useStore((state) => state.Bgcolor);
  const SidebarColor = useStore((state) => state.SidebarColor);
  const HeaderColor = useStore((state) => state.HeaderColor);
  const Textcolor = useStore((state) => state.TextColor);
  const BorderColor = useStore((state) => state.BorderColor);
  const FontSize = useStore((state) => state.FontSize);
  const BorderSize = useStore((state) => state.BorderSize);
  const IconColor=useStore((state) => state.IconColor);
  const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    const [open, setOpen] = useState(false);
    const data = [
      {
        key: '1',
        firstName: 'Muntadher',
        lastName: 'Ahmed',
        age: 25,
        address: 'Baghdad ,817,h15',
      },
      {
        key: '2',
        firstName: 'Abdulkreem',
        lastName: 'Jabber ',
        age: 24,
        address: 'Baghdad ,766,h5',
      },
      {
        key: '3',
        firstName: 'Hussein',
        lastName: 'kailed',
        age: 26,
        address: 'Baghdad ,alwasas',
        
      },
      {
        key: '4',
        firstName: 'ali',
        lastName: 'Hussein',
        age: 26,
        address: 'Baghdad ,albayaa',
        
      },
    ];


    return (
      <>
      <ConfigProvider
         theme={{
          algorithm: Theme ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            colorBgBase: Bgcolor,
            colorTextBase: Textcolor,
            fontSize: FontSize,
            borderRadius: BorderSize,
            colorBorder: BorderColor,
            colorBorderSecondary: BorderColor,
          },
        }}
      
      >
    <Layout>
          <Sider style={{backgroundColor:SidebarColor}} trigger={null} collapsible collapsed={collapsed}>
            <div
            style={{marginTop:"60px"}}>
            </div>
            <Nav />
          </Sider>
          <Layout className="site-layout">
            <Header
              style={{
                padding: 0,
                background: HeaderColor,
              }}
            >
              <div style={{width:'35px',height:'35px',cursor:'pointer'
              ,marginTop:"10px",marginLeft:"20px"  
            }} 
              onClick={()=>setCollapsed(!collapsed)}
              >
                {collapsed ? <FaEquals size={28} />: <FaBars size={28}/> }
              </div>
            </Header>
            <Content
              style={{
                padding: 15,
                minHeight: 591,
                backgroundColor:'lightgray',
                color:'white',
              }}
            >
       <Table dataSource={data}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
     
    </Table>
            </Content>
            <Footer style={{textAlign:'center',
            fontFamily:'Helvetica',
            fontWeight:'bold',
          }}>
              &copy;2023 Copyright ,all Rights Reserved
            </Footer>
          </Layout>
        </Layout>
        <FloatButton
         icon={<BiWorld />}
        
        onClick={() => setOpen(true)} />
        <Modal
          title="Change Page Theme"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={650}
          footer={null}
        >
          <CTheme />
        </Modal>
        </ConfigProvider>
      </>
    )

  }
export default App;
