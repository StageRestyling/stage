<template>
  <div class="navigation">
    <img class="stage_restyling_logo" src="~assets/icons/stage_restyling_logo.svg" alt="">
    <ul :class="['navigation_links', isDarkSection ? 'dark-links' : 'light-links']">
      <li class="navigation_links_link"><a href="/">Home</a></li>
      <li class="navigation_links_link"><a href="about-us">About Us</a></li>
      <li class="navigation_links_link"><a href="#service" @click.prevent="scrollTo('service')">Services</a></li>
      <li class="navigation_links_link"><a href="#portfolio" @click.prevent="scrollTo('portfolio')">Portfolio</a></li>
      <li class="navigation_links_link"><a href="#contact" @click.prevent="scrollTo('contact')">Contact</a></li>
    </ul>
    <button class="burger-button" @click="toggleMenu">
      <span :class="menuOpen ? 'burger-line open' : 'burger-line'"></span>
      <span :class="menuOpen ? 'burger-line open' : 'burger-line'"></span>
      <span :class="menuOpen ? 'burger-line open' : 'burger-line'"></span>
    </button>
    <nav :class="menuOpen ? 'menu open' : 'menu'">
      <ul>
        <li><a href="/" @click="toggleMenu">Home</a></li>
        <li><a href="about-us">About Us</a></li>
        <li><a href="#service" @click="toggleMenu">Services</a></li>
        <li><a href="#portfolio" @click="toggleMenu">Portfolio</a></li>
        <li><a href="#contact" @click="toggleMenu">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuOpen: false,
      isDarkSection: true, // Default to dark section
    };
  },
  mounted() {
    window.addEventListener('scroll', this.checkSection);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkSection);
  },
  methods: {
    scrollTo(id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    checkSection() {
      const sections = [
        { id: 'home', dark: true },
        { id: 'about', dark: false },
        { id: 'service', dark: false },
        { id: 'portfolio', dark: false },
        { id: 'contact', dark: false },
      ];

      const scrollPosition = window.scrollY;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetBottom - 50) {
            this.isDarkSection = section.dark;
            break;
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.navigation {
  position: fixed;
  z-index: 20;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
  backdrop-filter: blur(3px);

}

.stage_restyling_logo {
  width: 160px;
  margin: 20px 10%;
}

.navigation_links {
  display: flex;
  font-size: 15px;
  font-weight: 300;
  background: rgba(189, 189, 189, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 38px;
  padding: 10px 20px;
  margin-right: 10%;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark-links {
  background: white;
  color: black;
}

.light-links {
  background: black;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.navigation_links_link {
  margin-right: 20px;
  text-decoration: none;
  position: relative;
}

.navigation_links_link:last-child {
  margin-right: 0;
}

.navigation_links_link::after {
  position: absolute;
  content: '';
  left: 0;
  bottom: 0;
  display: block;
  width: 100%;
  height: 1px;
  background: currentColor;
}

.navigation_links_link::after {
  width: 0;
  transition: 0.3s;
}

.navigation_links_link:hover:after {
  width: 100%;
}

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
  z-index: 1000;
}

.burger-line {
  width: 100%;
  height: 4px;
  background-color: gray;
  transition: all 0.3s ease;
}

.burger-line.open:nth-child(1) {
  transform: rotate(45deg) translate(14px, 13px);
}

.burger-line.open:nth-child(2) {
  opacity: 0;
}

.burger-line.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.menu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: right 0.3s ease;
  z-index: 999;
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

@media (max-width: 768px) {
  .stage_restyling_logo {
    width: 120px;
  }
  .navigation_links {
    display: none;
  }
  .burger-button {
    display: flex;
    margin: 10px 10%;
  }
  .navigation {
    padding: 0;
    margin: 0;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  .stage_restyling_logo {
    margin: 10px 10%;
  }
}
</style>
