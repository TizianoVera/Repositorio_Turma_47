const repositorio = document.querySelector('.card-projeto-principal');

function getApiGitHub(){
    fetch('https://api.github.com/users/TizianoVera/repos').then(async res =>{
        if( !res.ok ){
            throw new Error(res.status);
        }

        let data = await res.json();
        data.map(item =>{
            console.log(data)
            let projectCard = document.createElement('div');
            projectCard.innerHTML = `
            
            <div class="card-project">
                <img src="/Html-portafolio/img/projeto.jpg" alt="Visualização da página da web. Procedimento de protocolo. Fluxo de trabalho de software dinâmico. Desenvolvimento Full Stack, marcação, administrar sistema. Driver para memória compartilhada. Ilustração em vetor conceito metáfora isolado.">
                <h3>${item.name}</h3>
                <p>${Intl.DateTimeFormat('pt-BR').format(new Date(item.created_at))}
                </p>
                <div class="card-project-buttom">
                    <ul>
                        <a href="${item.html_url}" target="_blank" rel="noopener noreferrer"><li>repositorio</li></a>
                        <li>${item.language}</li>
                    </ul>
                </div>
            </div>
            `

            repositorio.appendChild(projectCard);


        })


    })
}

getApiGitHub();