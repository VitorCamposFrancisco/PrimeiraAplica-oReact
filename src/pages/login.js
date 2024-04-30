import { useState } from "react";

function Login(){
 let [mudar, setMudar] = useState({
    "type" : "password",
    "icon" : "fa fa-eye"
 });
 
    function mudarSenha(){
         
        if(mudar.type){
            setMudar({
                "type" : "",
                "icon" :"fa fa-eye"
            })   
        } else {
            setMudar({
                "type" : "password",
                "icon" :"fa fa-eye-slash"
            }) 
        }
        
    }
    return(
        <>
            <div className="container mt-4">
                <div className="card">
                    <div className="card-header card-title bg-primary mb-2">
                        <h3 className="text-light">Login</h3>
                    </div>
                    <div className="card-body">
                        <div className="row g-2">
                                <div class="col-12 form-floating">
                                    <input type="text" maxLength={50} class="form-control col-6" placeholder="Email:" />
                                    <label for="floatingInput">Digite seu email</label>
                                </div>  
                                    <div class="col-6 input-group">
                                        <input type={mudar.type} maxLength={15} class="form-control col-6" placeholder="Digite sua senha:" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <button className="btn btn-outline-primary" type="button" onClick={mudarSenha}>{mudar.icon}</button>
                                    </div>   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;