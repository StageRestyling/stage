<template>
  <div>
    <NavBar />
    <!-- Блок с заголовком -->
    <div class="page-header">
      <div id="particles-js"></div>
      <div class="header-content">
        <h1 class="header-title">Window Tinting</h1>
        <p class="header-description">
          Enhance your driving experience and protect your car's interior with our premium window tinting solutions.
        </p>
      </div>
    </div>

    <!-- Блок с общей информацией -->
    <section class="window-tinting-intro">
      <h2>Why Choose Window Tinting?</h2>
      <p>
        At <strong>Stage Restyling</strong>, we offer professional <span class="highlight">window tinting</span> services
        that not only enhance the aesthetics of your car but also provide practical benefits. Our films reduce glare,
        protect your interior from UV damage, and improve privacy.
      </p>
      <button class="cta-button" @click="isModalOpen = true" >Get a Quote</button>
      <ModalComponent :is-open="isModalOpen" @close="isModalOpen = false" />
    </section>

    <!-- Блок с текстом и фото -->
    <section class="window-tinting-content">
      <img src="../assets/images/services/window-tinting.jpg" alt="Window Tinting Example" class="window-tinting-image" />
      <p>
        Adding window tint to your vehicle not only improves its appearance but also provides significant practical advantages.
        <span class="highlight">UV protection</span> blocks up to 99% of harmful rays, preserving your car's interior and protecting
        your skin during long drives. Additionally, window tinting helps reduce heat buildup, creating a more comfortable
        environment inside your car even during the hot summer months in Edmonton.
      </p>
    </section>

    <!-- Блок с преимуществами -->
    <section class="window-tinting-benefits">
      <h3>Key Benefits of Window Tinting</h3>
      <div class="benefit-cards">
        <div class="card">
          <h4>UV Protection</h4>
          <p>Blocks up to 99% of harmful UV rays, protecting your skin and car interior.</p>
        </div>
        <div class="card">
          <h4>Heat Reduction</h4>
          <p>Keeps your car cooler, reducing the need for air conditioning.</p>
        </div>
        <div class="card">
          <h4>Enhanced Privacy</h4>
          <p>Provides privacy by reducing visibility into your car.</p>
        </div>
        <div class="card">
          <h4>Improved Safety</h4>
          <p>Helps hold shattered glass together in case of an accident.</p>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import FooterBar from "~/components/FooterSection.vue";
import ModalComponent from '~/components/ModalComponent.vue'

export default {
  components: {
    NavBar,
    FooterBar,
    ModalComponent
  },
  data() {
    return {
      isModalOpen: false
    }
  },
  head() {
    return {
      title: "Window Tinting - Stage Restyling | Edmonton, Alberta",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Professional window tinting services in Edmonton, Alberta. Enhance privacy, reduce heat, and protect your car's interior with Stage Restyling.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "window tinting Edmonton, car tinting Edmonton, UV protection tinting, privacy tinting, Stage Restyling window tinting",
        },
        {
          property: "og:title",
          content: "Window Tinting - Stage Restyling | Edmonton, Alberta",
        },
        {
          property: "og:description",
          content:
            "Enhance your car with premium window tinting services in Edmonton. Reduce glare, improve privacy, and protect your car's interior.",
        },
        {
          property: "og:image",
          content: "https://www.stagerestyling.ca/assets/images/window-tinting-example.jpg",
        },
        {
          property: "og:url",
          content: "https://www.stagerestyling.ca/window-tinting",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
    };
  },
  mounted() {
    this.initParticles();
  },
  methods: {
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
/* Общие стили для заголовка */
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

/* Блок с информацией */
.window-tinting-intro {
  text-align: center;
  padding: 50px 10%;
}

.window-tinting-intro h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.window-tinting-intro .highlight {
  color: #9f0000;
  font-weight: bold;
}
strong {
  color: #9f0000;
}

.window-tinting-intro p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}

.window-tinting-intro .cta-button {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.window-tinting-intro .cta-button:hover {
  background-color: #430000;
}

/* Текст и фото */
.window-tinting-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 5%;
}

.window-tinting-content img {
  width: 30%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.window-tinting-content p {
  width: 60%;
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

/* Преимущества */
.window-tinting-benefits {
  text-align: center;
  padding: 50px 10%;
}

.window-tinting-benefits h3 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

.benefit-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.card h4 {
  font-size: 1.2rem;
  color: #9f0000;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  color: #555;
}
@media (max-width: 768px) {
  .window-tinting-content{
    flex-direction: column;
  }
  .window-tinting-content img {
    width: 100%;
    height: 300px;
    object-fit: cover; /* Обеспечивает обрезку изображения, сохраняя пропорции */
    object-position: center;
    margin-bottom: 30px;
  }
  .window-tinting-content p{
    width: 100%;
  }
}
</style>
