const titlePageHeader = document.querySelector("#title_page_header");
const lineStyleTitle = document.querySelector("#line_style_title");

const effectColor = (classname, time) => {
    setInterval(() => {
        const index = [titlePageHeader, lineStyleTitle];
        index.forEach((i) => i.classList.toggle(classname));
    }, time)
};

effectColor("effect_color", 3000);

const acessPageButton = document.querySelectorAll(".link");

acessPageButton.forEach((button) => {
    button.addEventListener("click", (e) => e.preventDefault());
})

const messageForFlexbox = document.querySelector("#message_for_flexbox");
const buttonSendMessage = document.querySelector("#button_send");

buttonSendMessage.addEventListener("click", () => {
    messageForFlexbox.value = '';
})

const menuMobile = document.querySelector("#icon_menu_mobile");
const navbar = document.querySelector("#navbar_container")

menuMobile.addEventListener("click", () => {
    navbar.classList.toggle("active_menu")
})