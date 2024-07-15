// Skrypt do dynamicznego dodawania nawigacji

// Funkcja do tworzenia nawigacji
function createNavbar() {
    // Tworzymy element nawigacji
    const nav = document.createElement('nav');
    nav.className = 'navbar';
    
    // Tworzymy listę
    const ul = document.createElement('ul');
    
    // Lista linków do nawigacji
    const links = [
        { href: '#home', text: 'Strona Główna' },
        { href: '#about', text: 'O Nas' },
        { href: '#services', text: 'Usługi' },
        { href: '#contact', text: 'Kontakt' }
    ];
    
    // Tworzymy elementy listy i dodajemy je do listy
    links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.textContent = link.text;
        li.appendChild(a);
        ul.appendChild(li);
    });
    
    // Dodajemy listę do elementu nawigacji
    nav.appendChild(ul);
    
    // Dodajemy element nawigacji do kontenera na stronie
    const navbarContainer = document.getElementById('navbar-container');
    navbarContainer.appendChild(nav);
}

// Wywołujemy funkcję do utworzenia nawigacji, gdy strona zostanie załadowana
document.addEventListener('DOMContentLoaded', createNavbar);