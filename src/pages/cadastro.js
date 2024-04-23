
function Cadastro() {
    return (
        <>
            <div className="container mt-4">
                <div className="card">
                    <div className="card-header card-title bg-dark mb-2">
                        <h3 className="text-light">Cadastre seu contato</h3>
                    </div>
                    <div className="card-body">
                        <div className="row g-2">
                                <div class="col-sm-12 col-md-6 col-lg-6 form-floating">
                                    <input type="text" maxLength={50} class="form-control col-sm-12 col-md-12 col-lg-3" placeholder="Nome:" autoFocus/>
                                    <label for="floatingInput">Digite seu nome</label>
                                </div>  
                                <div class="col-sm-12 col-md-6 col-lg-6 form-floating">
                                    <input type="number" class="form-control col-sm-12 col-md-12 col-lg-3" placeholder="Telefone:" />
                                    <label for="floatingInput">Digite seu N° de telefone</label>
                                </div>
                                <div class="col-12 form-floating mt-4">
                                    <input type="text" class="form-control col-sm-12 col-md-12 col-lg-3" placeholder="Assunto:" />
                                    <label for="floatingInput">Digite o assunto da mensagem</label>
                                </div>
                                <div class="col-12 mt-3">
                                    <label className="label-control ms-2">Digite a mensagem que queira enviar:</label>
                                    <textarea className="form-control" placeholder="Mensagem" rows="3"></textarea>
                                </div>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button type="button" class="btn btn-success col-sm-12 col-md-12 col-lg-2 mt-2">Enviar</button>
                                </div>      
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cadastro;