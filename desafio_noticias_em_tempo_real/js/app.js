const noticia = document.getElementById('noticia')

fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3b0d12292eee4f1db3d62c06dd588264')
  .then(res => res.json())
  .then(data => {
    data.articles.forEach(article => {
      const col = document.createElement('div')
      col.className = 'col-md-6 col-lg-4 mb-4'

      const card = `
        <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden">
            <img src="${article.urlToImage}" class="card-img-top img-fluid" alt="Imagem da notícia" style="height: 200px; object-fit: cover;">
            <div class="card-body d-flex flex-column p-3">
                <h5 class="card-title fw-semibold text-dark mb-2" style="min-height: 3rem;">${article.title}</h5>
                <p class="card-text text-muted small mb-3">${article.description || ''}</p>
                <a href="${article.url}" target="_blank" class="btn btn-danger w-100 mt-auto">Ler notícia completa</a>
            </div>
        </div>
      `
      col.innerHTML = card
      noticia.appendChild(col)
    })
  })
  .catch(err => {
    noticia.innerHTML = '<p class="text-danger">Erro ao carregar as notícias.</p>'
    console.error(err)
  })
