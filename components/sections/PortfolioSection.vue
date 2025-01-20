<template>
  <section id="portfolio" class="gallery-section">
    <div class="gallery-header">
      <h2>Gallery</h2>
      <a
        href="/portfolio"
        target="_blank"
        rel="noopener noreferrer"
        class="gallery-more"
        aria-label="View more photos on Facebook"
      >
        <p>More <span class="arrow">→</span></p>
      </a>
    </div>
    <div class="gallery-grid">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="image.class"
        class="gallery-item"
      >
        <img :src="image.src" :alt="'Gallery image of car ' + (index + 1)" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PortfolioSection",
  data() {
    return {
      images: [
        { src: require("assets/images/car1.jpg"), class: "wide" },
        { src: require("assets/images/car2.jpg"), class: "tall" },
        { src: require("@/assets/images/car3.JPG"), class: "wide" },
      ],
    };
  },
};
</script>

<style scoped>
.gallery-section {
  padding: 20px 10%;
  background-color: #f9f9f9;
}
.gallery-header {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 25px;
}
h2 {
  font-size: 40px;
  font-weight: 600;
  text-align: left;
}
.gallery-more {
  text-decoration: none;
}
.gallery-more p {
  font-size: 24px;
  position: relative;
  color: #000;
  cursor: pointer;
}
.gallery-more p::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: #000;
  transition: width 0.3s ease;
}
.gallery-more p:hover::after {
  width: 100%;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  max-height: 300px;
}
.gallery-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
.gallery-grid img:hover {
  transform: scale(1.1);
}
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  .gallery-header {
    align-items: center;
  }
  h2 {
    font-size: 35px;
  }
  .gallery-more p {
    font-size: 20px;
  }
  .gallery-item {
    max-height: 250px;
  }
}
@media (max-width: 425px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  .gallery-item {
    max-height: 200px;
  }
}
</style>
