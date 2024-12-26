fetch('https://api.github.com/users/AndrePhilLeandro')
    .then(res => res.json())
    .then(data => {
        document.getElementById('bio').innerHTML = data.bio;
        document.getElementById('cidade').innerHTML = data.location;
        document.getElementById('nomeButton').innerHTML = data.name;
        document.getElementById('nome').innerHTML = data.name;
        document.getElementById('repos').innerHTML = data.public_repos;
    });

fetch('https://api.github.com/users/AndrePhilLeandro/repos')
    .then(res => res.json())
    .then(data => {
        let str = '';
        data.forEach(repositorio => {
            str += `
           <div class="col">
                  <a href="${repositorio.html_url}" class="text-decoration-none" target="_blank">
                    <div class="card h-100">
                      <div class="card-body">
                        <h5 class="card-title">${repositorio.name.split(/[_-]/).join(' ')}</h5>
                        <p class="card-text" >${repositorio.description || 'Sem descrição.'}</p>
                      </div>
                      <div class="container-fluid pb-3">
                        <div class="row text-center">
                          <div class="col">
                            <i class="bi bi-eye fs-3"></i><span class="fs-4"> ${repositorio.watchers_count}</span>
                          </div>
                          <div class="col">
                            <i class="bi bi-star fs-3"></i><span class="fs-4"> ${repositorio.stargazers_count}</span>
                          </div>
                          <div class="col">
                            <i class="bi bi-copy"></i><span class="fs-4"> ${repositorio.forks_count}</span>
                          </div>
                          <div> <i class="bi bi-caret-right"> ${repositorio.language || ' ' }  </i></div>
                        </div>
                      </div>
                      <div class="card-footer">
                         <small class="text-muted">Última atualização: ${new Date(repositorio.updated_at).toLocaleDateString()}</small>
                      </div>
                    </div>
                  </a>
                </div>
            `
        });
        document.getElementById('repositorios').innerHTML = str;
    });