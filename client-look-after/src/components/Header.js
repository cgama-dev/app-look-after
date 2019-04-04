import React from 'react'
import { Menu, Container, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Menu fixed='top'>
            <Container>
                <Menu.Item as='a' header>
                    <Image size='mini' src='/images/logo.png' style={{ width: '130px', height: '60px', marginRight: '1.5em' }} />
                </Menu.Item>
                <Menu.Item as={Link} to="/"> Home </Menu.Item>
                <Menu.Item as={Link} to="/about"> About </Menu.Item>
                <Menu.Item as={Link} to="/newdiaper"> New Diaper </Menu.Item>
            </Container>
        </Menu>
    )
}

export default Header
