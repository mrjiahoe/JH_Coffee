import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { MenuData } from "../../Data/MenuData";
import { Button } from "../Button";
import { FaCoffee, FaShoppingCart } from "react-icons/fa";

const Nav = styled.nav`
	height: 60px;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	z-index: 100;
	position: fixed;
	width: 100%;
`;

const NavLink = css`
	color: #fff;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	text-decoration: none;
`;

const Logo = styled(Link)`
	${NavLink}
	font-size: 1.8rem;
	font-style: italic;
`;

const MenuBars = styled(FaCoffee)`
	display: none;

	@media screen and (max-width: 760px) {
		display: block;
		font-size: 2rem;
		transform: translate(10%, -10%);
	}
`;

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -48px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const NavMenuLinks = styled(Link)`
	${NavLink}
`;

const ShoppingCart = styled(FaShoppingCart)`
	color: white;
	margin-right: 15px;
	font-size: 1.3rem;
	cursor: pointer;
`;

const NavBtn = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Navbar = ({ toggle }) => {
	return (
		<Nav>
			<Logo to="/home">Coffee</Logo>
			<MenuBars onClick={toggle} />
			<NavMenu>
				{MenuData.map((item, index) => (
					<NavMenuLinks to={item.link} key={index}>
						{item.title}
					</NavMenuLinks>
				))}
			</NavMenu>
			<NavBtn>
				<ShoppingCart to="/cart" />
				<Button to="/login" primary="true">
					Login
				</Button>
			</NavBtn>
		</Nav>
	);
};

export default Navbar;
