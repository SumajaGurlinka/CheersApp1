import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import jwtDecode from "jwt-decode";
import { useNavigate, useOutlet } from "react-router-dom";
import { Associates } from "../../data/Associates";
const PostLogin=(props)=>{
const {
    setAuthcode, 
    getLoginAsync
    } = props;
    const navigate = useNavigate();
   const token=localStorage.getItem("token");
  const Userdetails=jwtDecode(token);
const getLogin = async () => {
    try {
        const auth1=localStorage.getItem("auth");
      const data = {
        authorization_code: auth1,
        client_id:"971b07f8-dee6-4171-ac61-8b4e93243811"
      };
      console.log(data);
  console.log(Userdetails);
  if(Userdetails.roles[0]==="Associate")
  {
    navigate("/home1");
  }
  else{
    navigate("/home");
  }
    } catch (error) {
        
      
    }
   
  };
useEffect(()=>{
    
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get('auth_code');
    console.log(window.location.search);
    console.log(authCode);
    localStorage.setItem("auth",authCode);
    if (authCode) {
       getLogin();
      
    }
    else{
        console.log("error");
    }
},[]);


    return(
<div>
   
</div>
    );
};
const mapDispatchToProps = (dispatch) => ({
 
    getLoginAsync: dispatch.login.getLoginAsync,
  });
  const mapStateToProps=(state)=>({

  });
  export default connect(mapDispatchToProps,mapDispatchToProps)(PostLogin);