import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/core";

import React, { Component } from 'react'
import { connect } from "react-redux";
import {filterByRegion,allCountriesData} from "../actions"

class filterRegion extends Component {
    onclickHandler = (e)=>{
        let region = e.target.getAttribute('value');
        e.target.parentElement.parentElement.parentElement.firstChild.value='';
        this.props.filterByRegion(region)
    }
    menuColor(){
            if(this.props.color){
                return{
                backgroundColor:'hsl(209, 23%, 22%)'
    
                }
            }else{
                return{
                    backgroundColor:'hsl(0, 0%, 100%)',
                    color:'hsl(200, 15%, 8%)'
    
                }
            }
    }
    render() {
       
        return (
            <div>
                <Menu>
                    <MenuButton  rightIcon="chevron-down" w="200px" border="none" p="10px" color="white" borderRadius="5px" marginBottom="0px" style={this.menuColor()}>
                        Filter by Region
                    </MenuButton>
                    <MenuList display="flex" alignItems="center" flexDirection="column" m='0%' style={this.menuColor()} w="200px" marginTop="0px">

                        <MenuItem w="100%" border="none" style={this.menuColor()} value="All" onClick={this.onclickHandler}>All</MenuItem>

                        <MenuItem w="100%" border="none" style={this.menuColor()} value="Africa" onClick={this.onclickHandler}>Africa</MenuItem>

                        <MenuItem w="100%" border="none" style={this.menuColor()} value="Americas" onClick={this.onclickHandler}>Americas</MenuItem>

                        <MenuItem w="100%" border="none" style={this.menuColor()} value="Asia" onClick={this.onclickHandler}>Asia</MenuItem>

                        <MenuItem w="100%" border="none" style={this.menuColor()} value="Europe" onClick={this.onclickHandler}>Europe</MenuItem>
                        
                        <MenuItem w="100%" border="none" style={this.menuColor()} value="Oceania" onClick={this.onclickHandler}>
                            Oceania
                        </MenuItem>
                    </MenuList>
                </Menu>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        color:state.countries.color
    }
}
const mapDispatchToProps ={
    allCountriesData,
    filterByRegion,
}


export default connect(mapStateToProps,mapDispatchToProps)(filterRegion)
