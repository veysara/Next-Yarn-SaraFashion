'use client'

import { Button, Drawer, Row } from "antd";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import { useState } from "react";
import menuItems from '@/data/menuItems.json';
import { Link } from "react-scroll";
import { FaHome } from "react-icons/fa";
import Image from "next/image";

export type TMenuProps = {
  title: string;
  href: string;
  icon?: any;
}

const Navbar = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div 
      className='shadow-[#0000001A] z-10 overflow-auto w-full'
      style={{
        top: 0, 
        position: 'fixed',
        background: `
          linear-gradient(150deg, #ecedee, transparent 30%), 
          linear-gradient(330deg, rgb(210, 206, 242), transparent 30%), 
          linear-gradient(225deg, #fff0be, #fbdce7, #e2fae1, powderblue)
        `,
      }}
    >
      <div className='container mx-auto flex justify-between items-center py-4'>
        <Link to={'/'} spy={true} smooth={true} duration={500} className="cursor-pointer flex items-center">
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#224F34"
            }}
          >
            Sara Fashion
          </div>
          {/* <Image src="/icons/logo-intechdev.svg" alt="intechdev" width={100} height={100} priority unoptimized/> */}
        </Link>

        <div className='hidden md:flex gap-x-4'>
          {menuItems.map((menu: TMenuProps, index: number) => (
            <Link
              key={index}
              to={menu.href}
              spy={true} 
              smooth={true} 
              duration={300} 
              className="
                px-4 
                py-2 
                text-[#224F34] 
                font-semibold 
                cursor-pointer
                text-base
                hover:bg-[#C2EFD4] 
                rounded-lg
              "
              activeClass="bg-[#C2EFD4] rounded-lg"
            >
              {menu.title}
            </Link>
          ))}
        </div>

        <div className="block md:hidden px-4">
          <Button type="text" onClick={showDrawer} icon={<IoMenuSharp size={32} />} />
          <Drawer 
            title={
              <Row className='justify-between items-center'>
                <p className='text-xl cursor-pointer' onClick={onClose}>Sara Fashion</p>
                <MdClose size={24} onClick={onClose} className="cursor-pointer" />
              </Row>
            } 
            open={open} 
            placement='top' 
            closable={false}
            style={{ height: 'auto' }}
          > 
            {menuItems.map((item: TMenuProps, index: number) => (
              <Link 
                key={index} 
                to={item.href} 
                className='
                  flex 
                  items-center 
                  gap-4 
                  text-base 
                  text-[#085E9F]
                  py-2 
                  border-b 
                  border-slate-200 
                  cursor-pointer
                '
                onClick={onClose}
              >
                {item.icon === 'FaHome' && path ? <FaHome size={26}/> : 'hello'}
                {item.title}
              </Link>
            ))}
          </Drawer>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
