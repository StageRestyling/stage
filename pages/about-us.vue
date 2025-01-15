<template>
  <section id="about-us" class="about-us">
    <NavBar />
    <div class="about-us_section">
      <div class="about-us-content">
        <h1>About Stage Restyling</h1>
        <p>
          Welcome to <strong>Stage Restyling</strong>, your trusted partner in car wraps,
          window tinting, and protective films in Edmonton, Alberta. Our mission is to
          transform vehicles into unique masterpieces while providing exceptional
          protection against the elements.
        </p>
        <p>
          Located in the heart of Edmonton, we are proud to serve customers from all
          neighborhoods, including Downtown, Southside, North Edmonton, and beyond.
          Whether you need a sleek vinyl wrap, premium paint protection, or
          high-quality ceramic coatings, Stage Restyling has you covered.
        </p>
        <p>
          With years of experience and a team dedicated to excellence, we guarantee
          professional service and outstanding results. Let us help you redefine your
          car's style and performance.
        </p>
        <p>
          Visit us at <a href="https://maps.app.goo.gl/FpbSkztcWAzM7xM77" target="_blank">4412 118 Ave NW, Edmonton</a>,
          or contact us today to learn more about our services.
        </p>
      </div>
      <div class="about-us-image">
        <img src="~assets/images/about-us.jpeg" alt="Stage Restyling in Edmonton" />
      </div>
    </div>
    <FooterSection class="footer" />
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "About Us - Stage Restyling | Edmonton, Alberta",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Learn about Stage Restyling, the premier destination for car wraps, window tinting, and protective films in Edmonton, Alberta. Transform your vehicle today!",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "car wraps Edmonton, window tinting Edmonton, paint protection Edmonton, Stage Restyling, ceramic coatings Edmonton",
        },
        { property: "og:title", content: "About Us - Stage Restyling | Edmonton, Alberta" },
        { property: "og:description", content: "Your trusted partner in car wraps and protective films in Edmonton." },
        { property: "og:image", content: "https://www.stagerestyling.ca/assets/images/about-us.jpg" },
        { property: "og:url", content: "https://www.stagerestyling.ca/about-us" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
};
</script>

<style scoped>
.about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.about-us_section {
  margin: 150px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 0 10%;
  width: 100%;
  gap: 30px;
}
.footer {
  width: 100%;
  margin-bottom: 0;
}

.about-us-content {
  flex: 1;
  max-width: 50%;
}

.about-us-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
}

.about-us-content p {
  font-size: 1.2rem;
  margin-bottom: 15px;
  line-height: 1.6;
  color: #555;
}

.about-us-content a {
  color: #007bff;
  text-decoration: none;
}

.about-us-content a:hover {
  text-decoration: underline;
}

.about-us-image img {
  width: 100%;
  height: auto;
  max-width: 500px; /* Увеличить максимальную ширину изображения */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 0 auto; /* Центрирование изображения */
}
.about-us-image {
  display: flex;
  justify-content: center; /* Центрируем изображение */
  flex: 1;
}

@media (max-width: 1024px) {
  .about-us_section {
    flex-direction: column;
    text-align: center;
  }

  .about-us-content {
    max-width: 100%;
  }

  .about-us-image {
    margin-top: 30px;
  }
}
</style>
