import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import * as actions from "../Store/Action";
import { Table, Divider, Tag,Button } from 'antd';
 class landingpage extends Component {
    componentDidMount(){
      console.log(withRouter)
      this.props.getData();
        const data = localStorage.getItem('username');
        if(!data){
            window.location.pathname = '/login';
           
         
        }

       
     }
     
     
delete = (idx)=>{
  console.log(idx)
  this.props.deleteData(idx);
  this.setState({test:true})
}
componentDidUpdate(props){
  console.log(props)
}
logout=()=>{
  localStorage.clear();
  window.location.reload();
}
  render() {
    console.log(this.props.Datas)
    var a =['apple','orange','mango'];
    let data=this.props.Datas.map((item,i)=>{
      
      return {
        key:i+1 ,
        name: item.name,
        email: item.email,
        website: item.website,
        action: <a href="javascript:;" onClick={this.delete.bind(this,i)}>Delete</a>,
         }
    }
     
    );

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: 'website',
      dataIndex: 'website',
      key: 'website',
    }, {
      title: 'action',
      dataIndex: 'action',
      key: 'action',
     
    }];
    
 
    return (
        <div style={{ background: '#ECECEC', padding: '30px' }} id="demo">
        <Button type="primary" htmlType="submit" style={{textAlign:"center"}} className="login-form-button" onClick={this.logout}>
              Logout
            </Button>
            <br/>
        <Table columns={columns} dataSource={data} />
        </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(`msp`);
  console.log(state);
  return {
    Datas: state.data.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(actions.fetchData()),
    deleteData:(idx)=>dispatch(actions.deleteData(idx))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(landingpage);
