import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    MenuOptionGroup,
    MenuItemOption,
} from "@chakra-ui/core";

import React, { Component } from 'react'
import { connect } from "react-redux";
import {filterByRegion,mapContent} from "../actions"

class filterRegion extends Component {
    onclickHandler = (e)=>{
        let region = e.target.getAttribute('value');
        this.props.filterByRegion(region)
    }
    render() {
       
        return (
            <div>
                <Menu>
                    <MenuButton  rightIcon="chevron-down" w="200px" backgroundColor = "#200f21" border="none" p="10px" color="white" borderRadius="5px" marginBottom="0px">
                        Filter by Region
                    </MenuButton>
                    <MenuList display="flex" alignItems="center" flexDirection="column" m='0%' backgroundColor="#1b262c" w="200px" marginTop="0px">

                        <MenuItem w="100%" border="none" backgroundColor="#200f21" value="All" onClick={this.onclickHandler}>All</MenuItem>

                        <MenuItem w="100%" border="none" backgroundColor="#200f21" value="Africa" onClick={this.onclickHandler}>Africa</MenuItem>

                        <MenuItem w="100%" border="none" backgroundColor="#200f21" value="Americas" onClick={this.onclickHandler}>Americas</MenuItem>

                        <MenuItem w="100%" border="none" backgroundColor="#200f21" value="Asia" onClick={this.onclickHandler}>Asia</MenuItem>

                        <MenuItem w="100%" border="none" backgroundColor="#200f21" value="Europe" onClick={this.onclickHandler}>Europe</MenuItem>
                        
                        <MenuItem w="100%" border="none" backgroundColor="#200f21" value="Oceania" onClick={this.onclickHandler}>
                            Oceania
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        )
    }
}

const mapDispatchToProps ={
    mapContent,
    filterByRegion,
}


export default connect(null,mapDispatchToProps)(filterRegion)
