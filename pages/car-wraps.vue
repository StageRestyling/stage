<template>
  <div>
    <NavBar />
    <div class="page-header">
      <div id="particles-js"></div>
      <div class="header-content">
        <h1 class="header-title">Car Wrap Services</h1>
        <p class="header-description">
          Premium car wrap services in Edmonton. Protect and enhance your vehicle with custom vinyl wraps.
        </p>
      </div>
    </div>

    <section class="content-section">
      <div class="container">
        <!-- Первый блок: текст слева, фото справа -->
        <section id="ppf-section" class="ppf-section">
          <!-- Заголовок, текст и кнопка -->
          <div class="services_intro">
            <h2>Protect Your Vehicle with <span class="highlight">PPF</span></h2>
            <p>
              Our <strong>Paint Protection Film (PPF)</strong> offers unparalleled defense against scratches,
              rock chips, and environmental hazards. With its <span class="highlight">self-healing properties</span>
              and crystal-clear finish, your car's original paint stays immaculate while maintaining a showroom look.
              Ideal for anyone who values long-lasting <strong>protection</strong> and <span class="highlight">pristine aesthetics</span>.
            </p>
            <button class="cta-button" @click="isModalOpen = true" >Get a Quote</button>
            <ModalComponent :is-open="isModalOpen" @close="isModalOpen = false" />
          </div>

          <!-- Фото и текст в одном ряду -->
          <div class="ppf-content">
            <img src="../assets/images/services/car_wrap2.JPG" alt="PPF Protection Example" class="ppf-image" />
            <p>
              At <strong>Stage Restyling</strong>, we use industry-leading brands like <strong>3M</strong> and <strong>Xpel</strong>
              to ensure your car receives the highest quality care. Our expert team applies the film with precision,
              guaranteeing a seamless finish that enhances your vehicle’s look and protects it for years to come.
            </p>
          </div>
          <!-- Карточки с преимуществами -->
          <div class="ppf-benefits">
            <h3>Key Benefits of PPF</h3>
            <div class="benefit-cards">
              <div class="card">
                <h4>Self-Healing</h4>
                <p>Scratches and minor damages disappear with heat exposure.</p>
              </div>
              <div class="card">
                <h4>UV Protection</h4>
                <p>Prevents paint fading caused by harmful UV rays.</p>
              </div>
              <div class="card">
                <h4>Rock Chip Defense</h4>
                <p>Protects against road debris and small rock impacts.</p>
              </div>
              <div class="card">
                <h4>Invisible Finish</h4>
                <p>Crystal-clear film maintains your car’s original appearance.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="vinyl-wrap-section" class="vinyl-wrap-section">
          <!-- Заголовок, текст и кнопка -->
          <div class="services_intro">
            <h2>Transform Your Car with <span class="highlight">Vinyl Wraps</span></h2>
            <p>
              Our premium <strong>Vinyl Wraps</strong> allow you to customize your car’s appearance with stunning colors,
              textures, and finishes. Whether you want a sleek matte black, vibrant gloss, or unique chrome effect,
              <span class="highlight">Stage Restyling</span> can bring your vision to life.
            </p>
            <button class="cta-button" @click="isModalOpen = true" >Get a Quote</button>
          </div>

          <!-- Фото и текст в одном ряду -->
          <div class="vinyl-wrap-content">
            <img src="../assets/images/services/car_wrap.JPG" alt="Vinyl Wrap Example" class="vinyl-wrap-image" />
            <p>
              Our experienced technicians use only top-quality vinyl films from leading brands like <strong>3M</strong>
              and <strong>Avery Dennison</strong>. We guarantee a seamless application that protects your car’s original paint
              and allows for easy removal when you’re ready for a new look.
            </p>
          </div>

          <!-- Карточки с преимуществами -->
          <div class="vinyl-wrap-benefits">
            <h3>Key Benefits of Vinyl Wraps</h3>
            <div class="benefit-cards">
              <div class="card">
                <h4>Unlimited Customization</h4>
                <p>Choose from a variety of colors, textures, and finishes.</p>
              </div>
              <div class="card">
                <h4>Paint Protection</h4>
                <p>Shields your car's original paint from scratches and minor damages.</p>
              </div>
              <div class="card">
                <h4>Cost-Effective</h4>
                <p>More affordable than a full paint job with similar results.</p>
              </div>
              <div class="card">
                <h4>Easy Removal</h4>
                <p>Change your car's look anytime without damaging the original paint.</p>
              </div>
            </div>
          </div>
        </section>
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
    };
  },
  head() {
    return {
      title: "Car Wrap Services - Stage Restyling | Edmonton, Alberta",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Discover premium car wrap services in Edmonton. Enhance and protect your vehicle with Stage Restyling's custom vinyl wraps.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "car wraps Edmonton, vinyl wraps Edmonton, car customization, matte wraps Edmonton, gloss wraps Edmonton, Stage Restyling",
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
.container {
  width: 100%;
  padding: 0 5%;
  margin: 50px auto 50px;
}
.ppf-section {
  padding: 50px 0;
}

.services_intro {
  text-align: center;
  margin-bottom: 40px;
}

.services_intro h2 {
  font-size: 2rem;
  color: #555;
  margin-bottom: 20px;
}

.services_intro .highlight {
  color: #9f0000;
  font-weight: bold;
}

.services_intro p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 20px;
}
 strong {
  color: #9f0000;
}

.services_intro .cta-button {
  background-color: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.services_intro .cta-button:hover {
  background-color: #430000;
}

.ppf-content,
.vinyl-wrap-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}
.vinyl-wrap-content {
 flex-direction: row-reverse;
}
.ppf-content img,
.vinyl-wrap-content img {
  width: 30%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.ppf-content p,
.vinyl-wrap-content p{
  width: 60%;
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

.ppf-benefits {
  text-align: center;
}

.ppf-benefits h3 {
  font-size: 1.8rem;
  color: #430000;
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
  color: #430000;
  margin-bottom: 10px;
}

.card p {
  font-size: 1rem;
  color: #555;
}

.vinyl-wrap-benefits {
  text-align: center;
}

.vinyl-wrap-benefits h3 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .ppf-content,
  .vinyl-wrap-content{
    flex-direction: column;
  }
  .ppf-content img,
  .vinyl-wrap-content img {
    width: 100%;
    height: 300px;
    object-fit: cover; /* Обеспечивает обрезку изображения, сохраняя пропорции */
    object-position: center;
    margin-bottom: 30px;
  }
  .ppf-content p,
  .vinyl-wrap-content p{
    width: 100%;
  }
}
</style>
