<template>
  <div>
    <NavBar />
    <!-- Блок с заголовком -->
    <div class="page-header">
      <div id="particles-js"></div>
      <div class="header-content">
        <h1 class="header-title">Our Services</h1>
        <p class="header-description">
          Explore the premium car customization and protection services we offer in Edmonton, Alberta.
          From car wraps to ceramic coatings, we've got you covered.
        </p>
      </div>
    </div>

    <!-- Основной контент -->
    <section class="services-overview">
      <div class="container">
        <h2>Comprehensive Vehicle Services in Edmonton</h2>
        <p>
          At Stage Restyling, we specialize in providing top-notch services that enhance both the appearance and protection of your vehicle.
          Located in Edmonton, Alberta, our services are tailored to meet your unique needs.
        </p>

        <div class="service-cards">
          <div class="service-card">
            <h3>Car Wraps</h3>
            <p>
              Transform your vehicle's look with custom vinyl wraps. Choose from a variety of colors and finishes for a unique style.
            </p>
            <a href="/car-wraps" class="service-button">Learn More</a>
          </div>

          <div class="service-card">
            <h3>Window Tinting</h3>
            <p>
              Improve privacy, reduce heat, and protect your interior with our high-quality window tinting services.
            </p>
            <a href="/window-tinting" class="service-button">Learn More</a>
          </div>

          <div class="service-card">
            <h3>Ceramic Coatings</h3>
            <p>
              Protect your vehicle's finish with our premium ceramic coatings, offering long-lasting shine and durability.
            </p>
            <a href="/services/ceramic-coatings" class="service-button">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import FooterBar from "~/components/FooterSection.vue";

export default {
  components: {
    NavBar,
    FooterBar,
  },
  head() {
    return {
      title: "Our Services - Stage Restyling | Edmonton, Alberta",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Discover the full range of car customization and protection services offered by Stage Restyling in Edmonton, Alberta. Car wraps, window tinting, paint protection film, and ceramic coatings.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "car wraps Edmonton, window tinting Edmonton, paint protection Edmonton, ceramic coatings Edmonton, car customization Edmonton, Stage Restyling services",
        },
        {
          property: "og:title",
          content: "Our Services - Stage Restyling | Edmonton, Alberta",
        },
        {
          property: "og:description",
          content:
            "Explore Stage Restyling's car wraps, window tinting, paint protection film, and ceramic coating services in Edmonton, Alberta.",
        },
        {
          property: "og:image",
          content: "https://www.stagerestyling.ca/assets/images/services.jpg",
        },
        {
          property: "og:url",
          content: "https://www.stagerestyling.ca/services",
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

.services-overview {
  padding: 50px 10%;
  background: #f9f9f9;
  color: #333;
  line-height: 1.6;
}

.services-overview h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.services-overview p {
  margin-bottom: 30px;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.service-card {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.service-card p {
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.5;
}

.service-button {
  display: inline-block;
  padding: 10px 20px;
  background: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.service-button:hover {
  background: #430000;
}
</style>
