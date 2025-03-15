// Toggle Dark Mode
function toggleDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Change Language (Simple Translation Switch)
function changeLanguage() {
    const lang = document.getElementById('language').value;
    const aboutText = document.getElementById('aboutText');

    if (lang === 'en') {
        aboutText.textContent = "My name is M. Akbar Rosyid, a novelist focusing on love stories, especially love triangles filled with emotions and tension. I am also active as a freelance writer.";
    } else {
        aboutText.textContent = "Nama saya M. Akbar Rosyid, seorang penulis novel yang fokus pada cerita cinta, terutama cinta segitiga yang penuh dengan emosi dan ketegangan. Saya juga aktif sebagai freelancer di bidang penulisan kreatif.";
    }
}

// Initial setup for dark mode
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (localStorage.getItem('darkMode') === 'enabled') {
        darkModeToggle.checked = true;
        document.body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        if (darkModeToggle.checked) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});