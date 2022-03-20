class MobileNavbar{
    constructor(mobileMenu, menuitens, menulinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.menuitens = document.querySelector(menuitens);
        this.menulinks = document.querySelectorAll(menulinks);
        this.activeClass = "active";


        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        this.menuitens.classList.toggle(this.activeClass);
    }


    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".menu-itens",
    ".menu-itens li",
);
mobileNavbar.init();