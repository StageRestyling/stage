<template>
  <div>
    <NavBar />
    <!-- Блок с заголовком -->
    <div class="page-header">
      <div id="particles-js"></div>
      <div class="header-content">
        <h1 class="header-title">Ceramic Coating</h1>
        <p class="header-description">
          Protect your car's paint and achieve a stunning glossy finish with premium ceramic coating services in Edmonton.
        </p>
      </div>
    </div>

    <!-- Блок с общей информацией -->
    <section class="ceramic-coating-intro">
      <h2>What is Ceramic Coating?</h2>
      <p>
        Ceramic coating is a revolutionary solution that provides unparalleled protection for your car’s paint while enhancing its shine.
        At <strong>Stage Restyling</strong>, we use advanced ceramic coating technology to create a durable and hydrophobic layer that
        protects against dirt, UV rays, and minor scratches.
        Say goodbye to constant waxing and hello to a low-maintenance, high-performance finish that lasts for years.
      </p>
      <button class="cta-button" @click="isModalOpen = true" >Get a Quote</button>
      <ModalComponent :is-open="isModalOpen" @close="isModalOpen = false" />
    </section>

    <!-- Блок с текстом и фото -->
    <section class="ceramic-coating-content">
      <img src="../assets/images/ceramic.jpg" alt="Ceramic Coating Example" class="ceramic-coating-image" />
      <p>
        Ceramic coating provides long-lasting protection and unparalleled gloss. It repels water and dirt, making it easier to maintain
        your car’s pristine look. With ceramic coating, your vehicle will always look like it just rolled out of the showroom. At <strong>Stage Restyling</strong>, we use only premium-grade ceramic coatings from trusted brands, ensuring the best results
        for your car. Whether you want to protect your daily driver or your luxury vehicle, we’ve got you covered.
      </p>
    </section>

    <!-- Блок с преимуществами -->
    <section class="ceramic-coating-benefits">
      <h3>Benefits of Ceramic Coating</h3>
      <div class="benefit-cards">
        <div class="card">
          <h4>Unmatched Durability</h4>
          <p>Protect your car’s paint from scratches, UV rays, and environmental damage with a long-lasting coating.</p>
        </div>
        <div class="card">
          <h4>Water and Dirt Repellent</h4>
          <p>Keep your car cleaner for longer with hydrophobic properties that repel water and dirt.</p>
        </div>
        <div class="card">
          <h4>Enhanced Gloss</h4>
          <p>Achieve a showroom-like finish with a deep, mirror-like gloss that lasts for years.</p>
        </div>
        <div class="card">
          <h4>Preserves Resale Value</h4>
          <p>Protect your car’s paint and maintain its value over time with durable ceramic coating.</p>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<script>
import NavBar from "~/components/NavBar.vue";
import FooterBar from "~/components/FooterSection.vue";
import ModalComponent from "~/components/ModalComponent.vue";

export default {
  components: {
    NavBar,
    FooterBar,
    ModalComponent
  },
  data() {
    return {
      isModalOpen: false,
    }
  },
  head() {
    return {
      title: "Ceramic Coating - Stage Restyling | Edmonton, Alberta",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Professional ceramic coating services in Edmonton. Protect your car’s paint and achieve a glossy finish with Stage Restyling.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "ceramic coating Edmonton, car paint protection, hydrophobic coating, gloss finish, Stage Restyling, paint sealant Edmonton",
        },
        {
          property: "og:title",
          content: "Ceramic Coating - Stage Restyling | Edmonton, Alberta",
        },
        {
          property: "og:description",
          content:
            "Enhance and protect your car with premium ceramic coating services in Edmonton. Long-lasting protection and unbeatable shine.",
        },
        {
          property: "og:image",
          content: "https://www.stagerestyling.ca/assets/images/ceramic-coating-example.jpg",
        },
        {
          property: "og:url",
          content: "https://www.stagerestyling.ca/ceramic-coating",
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
/* Заголовок */
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

/* Интро */
.ceramic-coating-intro {
  padding: 50px 10%;
  text-align: center;
}

.ceramic-coating-intro h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.ceramic-coating-intro p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}
.ceramic-coating-intro .cta-button {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.ceramic-coating-intro .cta-button:hover {
  background-color: #430000;
}
strong {
  color: #9f0000;
}
/* Блок с текстом и фото */
.ceramic-coating-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 5%;
}

.ceramic-coating-content img {
  width: 30%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.ceramic-coating-content p {
  width: 60%;
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

/* Преимущества */
.ceramic-coating-benefits {
  text-align: center;
  padding: 50px 10%;
}

.ceramic-coating-benefits h3 {
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
  .ceramic-coating-content{
    flex-direction: column;
  }
  .ceramic-coating-content img {
    width: 100%;
    height: 300px;
    object-fit: cover; /* Обеспечивает обрезку изображения, сохраняя пропорции */
    object-position: center;
    margin-bottom: 30px;
  }
  .ceramic-coating-content p{
    width: 100%;
  }
}
</style>
