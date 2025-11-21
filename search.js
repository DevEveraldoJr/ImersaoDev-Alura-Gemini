// Adiciona um mapa de logos para cada linguagem
const logoMap = {
    "JavaScript": "https://cdn.jsdelivr.net/npm/simple-icons/icons/javascript.svg",
    "Python": "https://cdn.jsdelivr.net/npm/simple-icons/icons/python.svg",
    "TypeScript": "https://cdn.jsdelivr.net/npm/simple-icons/icons/typescript.svg",
    "Java": "https://cdn.jsdelivr.net/npm/simple-icons/icons/java.svg",
    "C#": "https://cdn.jsdelivr.net/npm/simple-icons/icons/csharp.svg",
    "SQL": "https://cdn.jsdelivr.net/npm/simple-icons/icons/postgresql.svg", // Using PostgreSQL as a generic SQL logo
    "React": "https://cdn.jsdelivr.net/npm/simple-icons/icons/react.svg",
    "Next.js": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nextdotjs.svg",
    "Vue.js": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vuedotjs.svg",
    "Angular": "https://cdn.jsdelivr.net/npm/simple-icons/icons/angular.svg",
    "Docker": "https://cdn.jsdelivr.net/npm/simple-icons/icons/docker.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/npm/simple-icons/icons/kubernetes.svg",
    "AWS Lambda": "https://cdn.jsdelivr.net/npm/simple-icons/icons/awslambda.svg",
    "Git": "https://cdn.jsdelivr.net/npm/simple-icons/icons/git.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/npm/simple-icons/icons/postgresql.svg",
    "MongoDB": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mongodb.svg",
    "Terraform": "https://cdn.jsdelivr.net/npm/simple-icons/icons/terraform.svg",
    "Go": "https://cdn.jsdelivr.net/npm/simple-icons/icons/go.svg",
    "Kotlin": "https://cdn.jsdelivr.net/npm/simple-icons/icons/kotlin.svg",
    "Rust": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rust.svg",
    "Swift": "https://cdn.jsdelivr.net/npm/simple-icons/icons/swift.svg",
    "Elixir": "https://cdn.jsdelivr.net/npm/simple-icons/icons/elixir.svg",
    "Scala": "https://cdn.jsdelivr.net/npm/simple-icons/icons/scala.svg",
    "Clojure": "https://cdn.jsdelivr.net/npm/simple-icons/icons/clojure.svg",
    "Svelte": "https://cdn.jsdelivr.net/npm/simple-icons/icons/svelte.svg",
    "SolidJS": "https://cdn.jsdelivr.net/npm/simple-icons/icons/solid.svg",
    "Qwik": "https://cdn.jsdelivr.net/npm/simple-icons/icons/qwik.svg",
    "Phoenix": "https://cdn.jsdelivr.net/npm/simple-icons/icons/phoenixframework.svg",
    "Django": "https://cdn.jsdelivr.net/npm/simple-icons/icons/django.svg",
    "Spring Boot": "https://cdn.jsdelivr.net/npm/simple-icons/icons/springboot.svg",
    "NestJS": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nestjs.svg",
    "Redis": "https://cdn.jsdelivr.net/npm/simple-icons/icons/redis.svg",
    "Cassandra": "https://cdn.jsdelivr.net/npm/simple-icons/icons/cassandra.svg",
    "MariaDB": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mariadb.svg",
    "Helm": "https://cdn.jsdelivr.net/npm/simple-icons/icons/helm.svg",
    "Ansible": "https://cdn.jsdelivr.net/npm/simple-icons/icons/ansible.svg",
    "Pulumi": "https://cdn.jsdelivr.net/npm/simple-icons/icons/pulumi.svg",
    "WebAssembly": "https://cdn.jsdelivr.net/npm/simple-icons/icons/webassembly.svg",
    "Kafka": "https://cdn.jsdelivr.net/npm/simple-icons/icons/apachekafka.svg",
    "RabbitMQ": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rabbitmq.svg",
    "gRPC": "https://cdn.jsdelivr.net/npm/simple-icons/icons/grpc.svg",
    "FastAPI": "https://cdn.jsdelivr.net/npm/simple-icons/icons/fastapi.svg",
    "Prometheus": "https://cdn.jsdelivr.net/npm/simple-icons/icons/prometheus.svg",
    "Grafana": "https://cdn.jsdelivr.net/npm/simple-icons/icons/grafana.svg",
    "C": "https://cdn.jsdelivr.net/npm/simple-icons/icons/c.svg",
    "PHP": "https://cdn.jsdelivr.net/npm/simple-icons/icons/php.svg",
    "Dart": "https://cdn.jsdelivr.net/npm/simple-icons/icons/dart.svg",
    "Haskell": "https://cdn.jsdelivr.net/npm/simple-icons/icons/haskell.svg",
    "Ruby on Rails": "https://cdn.jsdelivr.net/npm/simple-icons/icons/rubyonrails.svg",
    "Laravel": "https://cdn.jsdelivr.net/npm/simple-icons/icons/laravel.svg",
    ".NET": "https://cdn.jsdelivr.net/npm/simple-icons/icons/dotnet.svg",
    "Express.js": "https://cdn.jsdelivr.net/npm/simple-icons/icons/express.svg",
    "Gin": "https://cdn.jsdelivr.net/npm/simple-icons/icons/gin.svg",
    "SQLite": "https://cdn.jsdelivr.net/npm/simple-icons/icons/sqlite.svg",
    "Neo4j": "https://cdn.jsdelivr.net/npm/simple-icons/icons/neo4j.svg",
    "CockroachDB": "https://cdn.jsdelivr.net/npm/simple-icons/icons/cockroachlabs.svg",
    "Vault": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vault.svg",
    "Jenkins": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jenkins.svg",
    "GitLab CI": "https://cdn.jsdelivr.net/npm/simple-icons/icons/gitlab.svg",
    "OpenTofu": "https://cdn.jsdelivr.net/npm/simple-icons/icons/opentofu.svg",
    "Istio": "https://cdn.jsdelivr.net/npm/simple-icons/icons/istio.svg",
    "Envoy": "https://cdn.jsdelivr.net/npm/simple-icons/icons/envoy.svg",
    "Serverless Framework": "https://cdn.jsdelivr.net/npm/simple-icons/icons/serverless.svg",
    "Cypress": "https://cdn.jsdelivr.net/npm/simple-icons/icons/cypress.svg",
    "Jest": "https://cdn.jsdelivr.net/npm/simple-icons/icons/jest.svg",
    "Puppet": "https://cdn.jsdelivr.net/npm/simple-icons/icons/puppet.svg",
    "Bazel": "https://cdn.jsdelivr.net/npm/simple-icons/icons/bazel.svg",
    "Zero Trust": "https://cdn.jsdelivr.net/npm/simple-icons/icons/zerotier.svg", // Placeholder, no direct icon
    "OAuth 2.0": "https://cdn.jsdelivr.net/npm/simple-icons/icons/oauth.svg",
    "Lua": "https://cdn.jsdelivr.net/npm/simple-icons/icons/lua.svg",
    "Erlang": "https://cdn.jsdelivr.net/npm/simple-icons/icons/erlang.svg",
    "Zig": "https://cdn.jsdelivr.net/npm/simple-icons/icons/zig.svg",
    "Flutter": "https://cdn.jsdelivr.net/npm/simple-icons/icons/flutter.svg",
    "Vite": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vite.svg",
    "Lit": "https://cdn.jsdelivr.net/npm/simple-icons/icons/lit.svg",
    "Deno": "https://cdn.jsdelivr.net/npm/simple-icons/icons/deno.svg",
    "Azure Cosmos DB": "https://cdn.jsdelivr.net/npm/simple-icons/icons/azurecosmosdb.svg",
    "Amazon DynamoDB": "https://cdn.jsdelivr.net/npm/simple-icons/icons/amazondynamodb.svg",
    "HCL": "https://cdn.jsdelivr.net/npm/simple-icons/icons/hcl.svg",
    "Nomad": "https://cdn.jsdelivr.net/npm/simple-icons/icons/nomad.svg",
    "Chef": "https://cdn.jsdelivr.net/npm/simple-icons/icons/chef.svg",
    "Vagrant": "https://cdn.jsdelivr.net/npm/simple-icons/icons/vagrant.svg",
    "Babel": "https://cdn.jsdelivr.net/npm/simple-icons/icons/babel.svg",
    "Webpack": "https://cdn.jsdelivr.net/npm/simple-icons/icons/webpack.svg",
    "Chakra UI": "https://cdn.jsdelivr.net/npm/simple-icons/icons/chakraui.svg",
    "Material UI (MUI)": "https://cdn.jsdelivr.net/npm/simple-icons/icons/mui.svg",
    "OpenID Connect (OIDC)": "https://cdn.jsdelivr.net/npm/simple-icons/icons/openid.svg",
    "ArgoCD": "https://cdn.jsdelivr.net/npm/simple-icons/icons/argo.svg",
    "KEDA": "https://cdn.jsdelivr.net/npm/simple-icons/icons/keda.svg",
    "Linkerd": "https://cdn.jsdelivr.net/npm/simple-icons/icons/linkerd.svg",
    "Spinnaker": "https://cdn.jsdelivr.net/npm/simple-icons/icons/spinnaker.svg",
    "Solidity": "https://cdn.jsdelivr.net/npm/simple-icons/icons/solidity.svg",
    "Memcached": "https://cdn.jsdelivr.net/npm/simple-icons/icons/memcached.svg",
    "GraphQL": "https://cdn.jsdelivr.net/npm/simple-icons/icons/graphql.svg"
};

let cardContainer = document.querySelector(".card-container");
let dados = [];
let currentIndex = -1;

window.addEventListener('load', async function() {
    try {
        let resposta = await fetch("data.json");
        dados = await resposta.json();

        document.getElementById("busca-input").addEventListener("input", iniciarBusca);
        document.getElementById("botao-busca").addEventListener("click", iniciarBusca);
        document.addEventListener("keydown", handleKeyDown);

    } catch (error) {
        console.error("Erro ao carregar dados:", error);
    }
});

function iniciarBusca() {
    let termoBusca = document.getElementById("busca-input").value.toLowerCase();

    if (termoBusca.trim() === '') {
        cardContainer.style.display = 'none';
        return;
    } else {
        cardContainer.style.display = 'block';
    }

    let dadosFiltrados = dados.filter(dado =>
        dado.nome.toLowerCase().includes(termoBusca) ||
        dado.descricao.toLowerCase().includes(termoBusca)
    );

    renderizarCards(dadosFiltrados);
}

function renderizarCards(dadosParaRenderizar) {
    cardContainer.innerHTML = "";
    dadosParaRenderizar.forEach((dado, index) => {
        let article = document.createElement("article");
        article.classList.add("card");
        article.dataset.index = index;

        const logoUrl = logoMap[dado.nome] || 'https://cdn.jsdelivr.net/npm/simple-icons/icons/question.svg';

        article.innerHTML = `
            <h2><img src="${logoUrl}" alt="${dado.nome} logo" class="logo"> ${dado.nome}</h2>
            <p><strong>Ano de Criação:</strong> ${dado.data_criacao}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link || dado.link_oficial}" target="_blank">Saiba mais</a>
        `;

        setTimeout(() => {
            article.style.opacity = 1;
            article.style.transform = "translateY(0)";
        }, index * 100);

        cardContainer.appendChild(article);
    });
}

function handleKeyDown(event) {
    const cards = document.querySelectorAll('.card');
    if (cards.length === 0) return;

    let newIndex = currentIndex;

    if (event.key === "ArrowDown") {
        newIndex = (currentIndex + 1) % cards.length;
    } else if (event.key === "ArrowUp") {
        newIndex = (currentIndex - 1 + cards.length) % cards.length;
    } else {
        return;
    }

    if (currentIndex !== -1) {
        cards[currentIndex].classList.remove('highlight');
    }

    cards[newIndex].classList.add('highlight');
    cards[newIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    currentIndex = newIndex;
}
