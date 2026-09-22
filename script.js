/* =========================================================
   DEBORINHA PSICOLOGIA
   JAVASCRIPT
========================================================= */


/* =========================================================
   CONFIGURAÇÃO DO WHATSAPP
========================================================= */

/*
    ========================================================
    MUDE SOMENTE ESTA LINHA
    ========================================================

    Coloque o número da psicóloga no formato:

    55 + DDD + número

    Exemplo:

    5511999999999

    Sem:
    +
    espaços
    parênteses
    hífen

    ========================================================
*/

const whatsappNumber = "5511952811071";


/*
    Mensagem que aparecerá automaticamente no WhatsApp.
*/

const whatsappMessage =
    "Olá, Deborah! Gostaria de saber mais sobre o atendimento psicológico e verificar os horários disponíveis para agendamento.";


/* =========================================================
   LINK DO WHATSAPP
========================================================= */

const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


/* =========================================================
   APLICA LINK A TODOS OS BOTÕES DO WHATSAPP
========================================================= */

const whatsappButtons =
    document.querySelectorAll("[data-whatsapp]");


whatsappButtons.forEach(button => {

    button.href = whatsappURL;

    button.target = "_blank";

    button.rel = "noopener noreferrer";

});


/* =========================================================
   NAVBAR INTELIGENTE
========================================================= */

const navbar =
    document.getElementById("navbar");


function updateNavbar() {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateNavbar
);


updateNavbar();


/* =========================================================
   MENU MOBILE
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");


menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


/* Fecha o menu ao clicar em algum link */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});


/* =========================================================
   FECHAR MENU AO CLICAR FORA
========================================================= */

document.addEventListener("click", event => {

    const clickedInsideMenu =
        mobileMenu.contains(event.target);

    const clickedToggle =
        menuToggle.contains(event.target);


    if (
        !clickedInsideMenu &&
        !clickedToggle
    ) {

        mobileMenu.classList.remove("open");

    }

});


/* =========================================================
   NAVBAR — LINK ATIVO
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveLink
);


updateActiveLink();


/* =========================================================
   ANIMAÇÕES AO ENTRAR NA TELA
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".specialty-card, " +
        ".process-step, " +
        ".testimonial-card, " +
        ".about-image, " +
        ".about-content"
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================================
   SCROLL SUAVE PARA LINKS INTERNOS
========================================================= */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) {

                return;

            }


            event.preventDefault();


            const navbarHeight =
                navbar.offsetHeight;


            const targetPosition =
                target.offsetTop -
                navbarHeight;


            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }
    );

});


/* =========================================================
   FECHAR MENU COM ESC
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            mobileMenu.classList.remove(
                "open"
            );

        }

    }
);


/* =========================================================
   PROTEÇÃO SIMPLES CONTRA CLIQUES DUPLOS
========================================================= */

let lastWhatsAppClick = 0;


whatsappButtons.forEach(button => {

    button.addEventListener(
        "click",
        event => {

            const now =
                Date.now();


            if (
                now - lastWhatsAppClick <
                800
            ) {

                event.preventDefault();

                return;

            }


            lastWhatsAppClick = now;

        }
    );

});


/* =========================================================
   CONSOLE DE DESENVOLVIMENTO
========================================================= */

console.log(
    "Deborinha Psicologia — site carregado com sucesso."
);