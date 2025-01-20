<template>
  <div>
    <NavBar />
    <!-- Блок с описанием -->
    <div class="page-header">
      <div id="particles-js"></div>
      <div class="header-content">
        <h1 class="header-title">Portfolio</h1>
        <p class="header-description">
          Discover the stunning transformations we've achieved for our clients in car wraps, window tinting, and ceramic coatings. Explore our portfolio and get inspired!
        </p>
      </div>
    </div>

    <!-- Фильтр услуг -->
    <section class="filter-section">
      <div class="container">
        <label for="service-filter">Choose a service to filter:</label>
        <select id="service-filter" v-model="selectedService" @change="filterPortfolio">
          <option value="Car Wrap">Car Wrap</option>
          <option value="Window Tinting">Window Tinting</option>
          <option value="Ceramic Coating">Ceramic Coating</option>
        </select>
      </div>
    </section>

    <!-- Слайдер -->
    <section class="portfolio-slider">
      <div class="carousel">
        <div class="carousel-track" :style="{ transform: `translateX(${translateX}%)` }">
          <div
            v-for="(image, index) in filteredImages"
            :key="index"
            class="carousel-item"
          >
            <img :src="image.src" :alt="image.alt" class="carousel-image" />
          </div>
        </div>
        <div class="carousel-controls">
          <button class="nav-btn" @click="prevSlide">←</button>
          <button class="nav-btn" @click="nextSlide">→</button>
        </div>
      </div>
    </section>

    <!-- Ссылки на соцсети -->
    <section class="social-links">
      <div class="container">
        <p>Follow our latest projects on:</p>
        <a href="https://www.facebook.com/profile.php?id=100089192395615" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/stage.restyling/" target="_blank">Instagram</a>
      </div>
    </section>

    <!-- Призыв к действию -->
    <section class="cta-section">
      <div class="container">
        <button class="cta-button" @click="isModalOpen = true" >Get a Quote</button>
        <ModalComponent :is-open="isModalOpen" @close="isModalOpen = false" />
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterSection.vue";
import ModalComponent from '~/components/ModalComponent.vue'

export default {
  components: { NavBar, FooterBar, ModalComponent },
  data() {
    return {
      selectedService: "Car Wrap",
      currentIndex: 0,
      itemsPerView: 3,
      portfolioImages: [
        { src: require('@/assets/images/car_wrap/car_wrap.jpg'), alt: "Car Wrap Project", service: "Car Wrap" },
        { src: require('@/assets/images/car_wrap/car_wrap2.jpg'), alt: "Car Wrap Project", service: "Car Wrap" },
        { src: require('@/assets/images/car_wrap/car_wrap3.jpg'), alt: "Car Wrap Project", service: "Car Wrap" },
        { src: require('@/assets/images/car_wrap/car_wrap4.jpg'), alt: "Car Wrap Project", service: "Car Wrap" },
        { src: require('@/assets/images/tinting/tinting.jpg'), alt: "Window Tinting Project", service: "Window Tinting" },
        { src: require('@/assets/images/tinting/tinting1.jpg'), alt: "Window Tinting Project", service: "Window Tinting" },
        { src: require('@/assets/images/tinting/tinting2.jpg'), alt: "Window Tinting Project", service: "Window Tinting" },
        { src: require('@/assets/images/tinting/tinting3.jpg'), alt: "Window Tinting Project", service: "Window Tinting" },
        { src: require('@/assets/images/ceramic/ceramic.jpg'), alt: "Ceramic Coating Project", service: "Ceramic Coating" },
        { src: require('@/assets/images/ceramic/ceramic1.jpg'), alt: "Ceramic Coating Project", service: "Ceramic Coating" },
        { src: require('@/assets/images/ceramic/ceramic2.jpg'), alt: "Ceramic Coating Project", service: "Ceramic Coating" },
        { src: require('@/assets/images/ceramic/ceramic3.jpg'), alt: "Ceramic Coating Project", service: "Ceramic Coating" },
      ],
      filteredImages: [],
      isModalOpen: false,
    };
  },
  computed: {
    translateX() {
      return -(this.currentIndex * (100 / this.itemsPerView));
    },
  },
  mounted() {
    this.initParticles();
    this.filterPortfolio();
    this.updateItemsPerView();
    window.addEventListener("resize", this.updateItemsPerView);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateItemsPerView);
  },
  methods: {
    filterPortfolio() {
      this.filteredImages = this.portfolioImages.filter(
        (image) => image.service === this.selectedService
      );
      this.currentIndex = 0; // Reset slide position after filtering
    },
    nextSlide() {
      if (this.currentIndex < this.filteredImages.length - this.itemsPerView) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
    updateItemsPerView() {
      const width = window.innerWidth;
      if (width >= 1024) {
        this.itemsPerView = 3;
      } else if (width >= 768) {
        this.itemsPerView = 2;
      } else {
        this.itemsPerView = 1;
      }
    },
    initParticles() {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/particles.js";
      script.onload = () => {
        window.particlesJS("particles-js", {
          particles: {
            number: { value: 100 },
            size: { value: 2 },
            move: { speed: 2 },
            line_linked: { enable: true, opacity: 0.2 },
            color: { value: "#ffffff" },
          },
        });
      };
      document.head.appendChild(script);
    },
  },
};
</script>

<style scoped>
/* Основные стили */
.page-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  background: linear-gradient(135deg, #111, #333);
  color: white;
  text-align: center;
  overflow: hidden;
}

#particles-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.header-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
}

.header-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.header-description {
  font-size: 1.2rem;
  line-height: 1.5;
  color: #ddd;
}

.filter-section {
  padding: 20px 10%;
  text-align: center;
}

.filter-section select {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.portfolio-slider {
  padding: 20px 5%;
}

.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  flex: 0 0 calc(100% / var(--itemsPerView, 3) - 20px);
  border-radius: 10px;
  overflow: hidden;
}

.carousel-item img {
  width: 80%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
}

.carousel-controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
}

.nav-btn {
  background: #000;
  color: #fff;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}

.nav-btn:hover {
  background: #430000;
}
.social-links {
  padding: 20px 10%;
  text-align: center;
}

.social-links a {
  margin: 0 10px;
  text-decoration: none;
  color: #9f0000;
  font-weight: bold;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: #430000;
}

.cta-section {
  padding: 20px 10%;
  text-align: center;
}

.cta-button {
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background: #430000;
}


@media (max-width: 768px) {
  .carousel-item {
    flex: 0 0 calc(100% - 20px);
  }
}
</style>
