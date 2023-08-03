<!-- Adicione antes da tag de fechamento </body> -->
<script>
    // Função para rolagem suave ao clicar nos links do menu
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Adicione o evento de clique a cada link do menu
    const menuLinks = document.querySelectorAll("nav ul li a");
    menuLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const sectionId = link.getAttribute("href").replace("#", "");
            scrollToSection(sectionId);
        });
    });
</script>
