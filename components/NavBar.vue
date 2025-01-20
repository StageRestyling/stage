<template>
  <div :class="['navigation', isScrollingUp ? 'visible' : 'hidden']">
    <img class="stage_restyling_logo" src="~assets/icons/stage_restyling_logo.svg" alt="Stage Restyling Logo" />
    <ul class="navigation_links">
      <li class="navigation_links_link"><a href="/">Home</a></li>
      <li class="navigation_links_link"><a href="/about-us">About Us</a></li>
      <li
        class="navigation_links_link dropdown"

      >
        <a href="/services-page">Services</a>
        <img
          class="dropdown-icon"
          :class="{ open: dropdownOpen }"
          src="~assets/icons/arrow-down.png"
          alt="Dropdown Icon"
        />
        <ul class="dropdown-menu" :class="{ open: dropdownOpen }">
          <li><a href="/car-wraps">Car Wraps</a></li>
          <li><a href="/window-tinting">Window Tinting</a></li>
          <li><a href="/ceramic-coating">Ceramic Coatings</a></li>
        </ul>
      </li>
      <li class="navigation_links_link"><a href="/portfolio-page">Portfolio</a></li>
      <li class="navigation_links_link"><a href="/contact-page">Contact</a></li>
    </ul>
    <button class="burger-button" @click="toggleMenu">
      <span :class="menuOpen ? 'burger-line open' : 'burger-line'"></span>
      <span :class="menuOpen ? 'burger-line open' : 'burger-line'"></span>
      <span :class="menuOpen ? 'burger-line open' : 'burger-line'"></span>
    </button>
    <nav :class="menuOpen ? 'menu open' : 'menu'">
      <ul>
        <li><a href="/" @click="toggleMenu">Home</a></li>
        <li><a href="/about-us" @click="toggleMenu">About Us</a></li>
        <li>
          <div class="services-wrapper" @click="toggleDropdown">
            <a>Services</a>
            <img
              class="dropdown-icon"
              :class="{ open: dropdownOpen }"
              src="~assets/icons/arrow-down-white.png"
              alt="Dropdown Icon"
            />
          </div>
          <ul
            class="dropdown-mobile"
            :class="{ open: dropdownOpen }">
            <li><a href="/services-page">All services</a></li>
            <li><a href="/car-wraps" @click="toggleMenu">Car Wraps</a></li>
            <li><a href="/window-tinting" @click="toggleMenu">Window Tinting</a></li>
            <li><a href="/ceramic-coating" @click="toggleMenu">Ceramic Coatings</a></li>
          </ul>
        </li>
        <li><a href="/portfolio-page" @click="toggleMenu">Portfolio</a></li>
        <li><a href="/contact-page" @click="toggleMenu">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menuOpen: false,
      dropdownOpen: false,
      isScrollingUp: true,
      lastScrollY: 0,
    };
  },
  mounted() {
    this.lastScrollY = window.scrollY;
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isScrollingUp = currentScrollY < this.lastScrollY || currentScrollY < 10;
      this.lastScrollY = currentScrollY;
    },
  },
};
</script>

<style scoped>
/* Основные стили */
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  padding: 10px 5%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.navigation.hidden {
  transform: translateY(-100%);
}

.navigation.visible {
  transform: translateY(0);
}
.stage_restyling_logo {
  width: 150px;
}

.navigation_links {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navigation_links li {
  margin-right: 20px;
  position: relative;
}

.navigation_links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  display: inline-block;
  transition: color 0.3s ease;
}

.navigation_links a:hover {
  color: #007bff;
}
.navigation_links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: #007bff;
  transition: width 0.3s ease;
}

.navigation_links a:hover::after {
  width: 100%;
}

/* Dropdown */
.dropdown {
  position: relative;
  display: flex;
  align-content: center;
  align-items: center;
}
.dropdown-icon {
  width: 12px;
  height: 12px;
  margin-left: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.dropdown-icon.open {
  transform: rotate(180deg);
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: -50px;
  background: #f7f7f7;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 20px;
  z-index: 10;
}

.dropdown:hover .dropdown-menu {
  display: block;
  width: 200px;
  background: #f7f7f7;
}

.dropdown-menu li {
  margin: 10px 0;
}

.dropdown-menu li a {
  color: #333;
  text-decoration: none;
}

.dropdown-menu li a:hover {
  color: #007bff;
}

/* Мобильное меню */
.burger-button {
  width: 30px;
  height: 30px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 25;
}

.burger-line {
  width: 100%;
  height: 4px;
  background-color: gray;
  transition: all 0.3s ease;
}

.burger-line.open:nth-child(1) {
  transform: rotate(45deg) translate(11px, 12px);
}

.burger-line.open:nth-child(2) {
  opacity: 0;
}

.burger-line.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -8px);
}

.menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: right 0.3s ease;
  z-index: 20;
}

.menu.open {
  right: 0;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}

.menu ul li {
  margin: 20px 0;
}

.menu ul li a {
  text-decoration: none;
  font-size: 1.5rem;
  color: #fff;
  transition: color 0.3s ease;
}

.menu ul li a:hover {
  color: #007bff;
}

.dropdown-mobile {
  overflow: hidden; /* Скрываем элементы до раскрытия */
  max-height: 0; /* Начальная высота — 0 */
  transition: max-height 0.3s ease-out, padding 0.3s ease-out; /* Добавляем анимацию */
  padding: 0; /* Убираем внутренний отступ */
}

.dropdown-mobile.open {
  max-height: 300px; /* Задаем высоту для раскрытого состояния (подберите оптимальное значение) */
  padding: 10px 20px; /* Внутренний отступ при раскрытии */
}
.services-wrapper {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
}
@media (max-width: 768px) {
  .navigation_links {
    display: none;
  }
  .burger-button {
    display: flex;
  }
}
</style>
