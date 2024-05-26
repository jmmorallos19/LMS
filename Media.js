const mediaQuery = window.matchMedia('(max-width: 330px)');

if (mediaQuery.matches) {
    const button = document.getElementById("button1");

    button.textContent = "Admin";
}