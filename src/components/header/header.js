import React, { Component } from 'react';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import '../../App.css'; 
import { Icon,Stack } from "@chakra-ui/core";
import { connect } from 'react-redux';
import {colorChange} from '../actions'


class header extends Component {
    onClickHandler=()=>{
        const data = !this.props.color
        this.props.colorChange(data)
    }
    headerColor(){
        if(this.props.color){
            return{
                backgroundColor: 'hsl(209, 23%, 22%)'

            }
        }else{
            return{
                backgroundColor: 'hsl(0, 0%, 100%)',
                color:'hsl(200, 15%, 8%)'

            } 
        }
    }
    render() {
        return (
            <div id = 'header' style ={this.headerColor()}>
                <div><strong>where in the World</strong></div>
                <Stack isInline onClick={this.onClickHandler}>
                    {/* <Brightness3Icon name='copy' /> */}
                    <strong style={{fontSize:'20px',cursor:'pointer'}}>☾</strong>
                    <div style={{cursor:'pointer'}}> dark mode </div>
                </Stack>
                
            </div>
        )
    }
}

const mapStateToProps=state=>{
    console.log(state)
    return{
        color:state.countries.color
    }
}

const mapDispatchToProps = {
    colorChange,
}

export default connect(mapStateToProps,mapDispatchToProps)(header)
