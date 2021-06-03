import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import {
  ChevronDownIcon,
  ShoppingBagtIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import React from 'react'
import SidebarRow from './SidebarRow';
import { useSession } from 'next-auth/client';

function Sidebar() {
  const [session, loading] = useSession();
  return (
    <div className="p-2 mt-5 maz-w-[600px] xl:min-w-[300]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="Frineds"/>
      <SidebarRow Icon={UserGroupIcon} title="Group"/>
      <SidebarRow Icon={ShoppingBagtIcon} title="Marketplace"/>
      <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
      <SidebarRow Icon={CalendarIcon} title="Events"/>
      <SidebarRow Icon={ClockIcon} title="Memories"/>
      <SidebarRow Icon={ChevronDownIcon} title="See More"/>

      
    </div>
  )
}

export default Sidebar;
