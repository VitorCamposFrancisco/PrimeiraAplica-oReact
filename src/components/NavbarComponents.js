
function NavbarComponents() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand text-light me-5" href="#">Avaliação</a>
                    <button class="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active text-light me-5" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light me-5" href="/cadastro">Cadastro</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="/sobre">Sobre mim</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarComponents;