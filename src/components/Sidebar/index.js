import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onclick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to="/">Drinks</SidebarLink>
				<SidebarLink to="/">Foods</SidebarLink>
				<SidebarLink to="/">Full Menu</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to="/">Order Now</SidebarRoute>
			</SideBtnWrap>
		</SidebarContainer>
	);
};

export default Sidebar;
