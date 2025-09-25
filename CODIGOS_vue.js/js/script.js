// Base de livros de exemplo
const livros = [
  { titulo: "Dom Casmurro", autor: "Machado de Assis" },
  { titulo: "Memórias Póstumas de Brás Cubas", autor: "Machado de Assis" },
  { titulo: "O Alienista", autor: "Machado de Assis" },
  { titulo: "Capitães da Areia", autor: "Jorge Amado" },
  { titulo: "Gabriela, Cravo e Canela", autor: "Jorge Amado" },
  { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" },
  { titulo: "A Hora da Estrela", autor: "Clarice Lispector" },
  { titulo: "Perto do Coração Selvagem", autor: "Clarice Lispector" },
];

// Função de busca
function buscarLivros() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = "";

  // Filtrar por título ou autor
  const resultados = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(input) ||
    livro.autor.toLowerCase().includes(input)
  );

  if (resultados.length === 0) {
    resultadosDiv.innerHTML = "<p>Nenhum livro encontrado.</p>";
    return;
  }

  resultados.forEach(livro => {
    const livroDiv = document.createElement("div");
    livroDiv.classList.add("livro");
    livroDiv.innerHTML = `<h3>${livro.titulo}</h3><p><b>Autor:</b> ${livro.autor}</p>`;
    resultadosDiv.appendChild(livroDiv);
  });
}
