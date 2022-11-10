const mynavbar=`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="#">Books</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="index.html">Home</a>
  </li>
    <li class="nav-item active">
      <a class="nav-link" href="categ.html">Kategóriák</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="books.html">Könyvek</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="selByCateg.html">Szűrés</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="updateBook.html">Módosítás</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="delBook.html">Törlés</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="newBook.html">Új könyv bevetetése</a>
  </li>
  </ul>
</div>
</nav>
`
document.querySelector('header').insertAdjacentHTML('beforebegin',mynavbar)