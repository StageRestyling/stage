<template>
  <div id="service" class="service">
    <h2>Services</h2>
    <div class="carousel">
      <div class="carousel-track" :style="{ transform: `translateX(${translateX}%)` }">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="carousel-item"
          :class="{ 'is-expanded': expandedIndex === index }"
        >
          <img :src="service.image" :alt="service.title" class="carousel-image" />
          <div class="carousel-content">
            <h4 class="carousel-title">{{ service.title }}</h4>
            <p class="carousel-description">{{ service.description }}</p>
            <p v-if="expandedIndex === index" class="carousel-full-text">
              {{ service.text }}
            </p>
            <button class="read-more-btn" @click="toggleExpand(index)">
              {{ expandedIndex === index ? 'Read Less' : 'Read More' }}
            </button>
          </div>
        </div>
      </div>
      <div class="carousel-test">
        <div class="carousel-indicator">
          <div
            class="carousel-progress"
            :style="{ width: `${progressWidth}%` }"
          ></div>
        </div>
        <div class="nav-btn-container">
          <button class="nav-btn" @click="prevSlide">←</button>
          <button class="nav-btn" @click="nextSlide">→</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'ServiceSection',
  data() {
    return {
      currentIndex: 0,
      itemsPerView: 3,
      expandedIndex: null,
      services: [
        {
          title: "Window tinting",
          description: "Enhance privacy and reduce heat with professional window tinting.",
          text: "Our premium window tinting services protect your car’s interior from UV rays, reduce heat, and provide enhanced privacy. Enjoy a cooler, more comfortable ride with a sleek look.",
          image: require('@/assets/images/windowtinting.jpg'),
        },
        {
          title: "Paint protection film",
          description: "Keep your car’s paint flawless with durable protective films.",
          text: "Protect your car’s paintwork from scratches, chips, and other damage with our high-quality paint protection films. Transparent and long-lasting, they preserve your vehicle’s original finish.",
          image: require('@/assets/images/protectionFilm.jpg'),
        },
        {
          title: "Vinyl wraps",
          description: "Transform your car’s appearance with custom vinyl wraps.",
          text: "Custom vinyl wraps offer a variety of colors and textures to completely change your car’s look. They also protect the surface from minor damage and can be easily removed without residue.",
          image: require('@/assets/images/vinyl.jpg'),
        },
        {
          title: "Ceramic coating",
          description: "Shield your car and maintain its shine with advanced ceramic coatings.",
          text: "Ceramic coating provides a long-lasting, glossy finish while protecting your car from dirt, UV rays, and water. It’s the perfect solution for preserving your vehicle’s pristine condition with minimal maintenance.",
          image: require('@/assets/images/ceramic.jpg'),
        },
      ],
    };
  },
  computed: {
    translateX() {
      return -(this.currentIndex * (100 / this.itemsPerView));
    },
    progressWidth() {
      const totalSlides = this.services.length - this.itemsPerView + 1;
      return (this.currentIndex / (totalSlides - 1)) * 100 || 0;
    },
  },
  mounted() {
    this.updateItemsPerView(); // Установить начальные параметры
    window.addEventListener("resize", this.updateItemsPerView);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateItemsPerView);
  },
  methods: {
    toggleExpand(index) {
      this.expandedIndex = this.expandedIndex === index ? null : index;
    },
    nextSlide() {
      if (this.currentIndex < this.services.length - this.itemsPerView) {
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
        this.itemsPerView = 1;
      } else {
        this.itemsPerView = 1;
      }
      if (this.currentIndex > this.services.length - this.itemsPerView) {
        this.currentIndex = this.services.length - this.itemsPerView;
      }
    },
  },
};
</script>

<style scoped>
.service {
  padding: 0 10%;
}
.service h2 {
  font-size:40px;
  font-weight: 600;
  margin-top: 100px;
  margin-bottom: 10px;
}
.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  margin: 0;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  gap: 20px;
}
.carousel-item {
  flex: 0 0 calc(100% / var(--itemsPerView, 3) - 20px);
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  transition: height 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  height: 100%;
}

.carousel-item.is-expanded {
  height: auto;
}

.carousel-full-text {
  font-size: 0.9rem;
  color: #666;
  margin-top: 10px;
}

.read-more-btn {
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  font-size: 0.9rem;
  color: white;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.read-more-btn:hover {
  background-color: #555;
}

.carousel-indicator {
  position: relative;
  height: 4px;
  background: #e0e0e0;
  width: 100%;
  margin-right: 30px;
  border-radius: 2px;
  overflow: hidden;
}
.carousel-progress {
  height: 100%;
  background: #000;
  transition: width 0.5s ease-in-out;
}

.nav-btn-container {
  display: flex;
  justify-content: center;
  gap: 5px;
}
.carousel-test {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
.carousel-image {
  width: 100%;
  border-radius: 10px;
}

.carousel-title {
  font-size: 20px;
  font-weight: bold;
  color: #9F0000;
}

.carousel-description {
  font-size: 15px;
  font-weight: 600;
  color: #666;
  margin: 20px auto;
}

@media (max-width: 1024px) {
  .carousel-item {
    flex: 0 0 calc(100% / var(--itemsPerView, 2) - 20px);
  }
}

@media (max-width: 768px) {
  .carousel-item {
    flex: 0 0 calc(100% - 20px);
  }
  .service h2 {
    font-size: 25px;
    font-weight: 600;
    margin: 0 auto 20px;
    text-align: center;
  }
}
</style>
