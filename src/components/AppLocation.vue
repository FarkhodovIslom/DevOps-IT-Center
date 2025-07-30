<template>
  <div class="location-container">
    <!-- Floating background elements -->
    <div class="floating-bg">
      <div class="floating-element"></div>
      <div class="floating-element"></div>
    </div>

    <div class="location-content">
      <!-- Contact Info Card -->
      <div class="contact-card">
        <div class="card-header">
          <h2>Bizning manzilimiz</h2>
        </div>

        <div class="building-image">
          <img src="../../public/assets/images/itcenter-building__location-image.png" alt="Bizning binomiz" />
          <div class="image-overlay"></div>
        </div>

        <div class="contact-info">
          <div class="info-section">
            <h3>Urgut tuman, Do'stlik MFY, Navoiyshox ko'chasi 120-uy</h3>
          </div>

          <div class="info-section">
            <div class="info-label">Mo'ljal:</div>
            <p>Hamkorbank yonidagi Uzagrosug'urta binosining 2-qavati</p>
          </div>

          <div class="info-section">
            <div class="info-label">Ish vaqti:</div>
            <p>Dushanbadan Jumagacha<br>08:00 dan 18:00 gacha</p>
          </div>

          <div class="info-section">
            <div class="info-label">Telefon:</div>
            <div class="phone-numbers">
              <a href="tel:+998957281199" class="phone-link">
                <i class="fas fa-phone"></i>
                +998 95 728 11 99
              </a>
              <a href="tel:+998885781199" class="phone-link">
                <i class="fas fa-phone"></i>
                +998 88 578 11 99
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Container -->
      <div class="map-container">
        <div class="map-header">
          <h3>Xaritada ko'rish</h3>
          <button @click="openDirections" class="directions-btn">
            <i class="fas fa-directions"></i>
            Yo'nalish
          </button>
        </div>

        <div class="map-content">
          <!-- Real Google Maps iframe -->
          <iframe
            :src="mapSrc"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLocation',
  data() {
    return {
      latitude: 39.3967,
      longitude: 66.6983,
      address: "Urgut tuman, Do'stlik MFY, Navoiyshox ko'chasi 120-uy, Uzbekistan"
    }
  },
  computed: {
    mapSrc() {
      
      const baseUrl = 'https://www.google.com/maps/embed/v1/place';
      const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';  
      const query = encodeURIComponent(this.address);
      
      return `https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d385.2625426295737!2d67.23878918272594!3d39.42185539191596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e2!4m3!3m2!1d39.4218799!2d67.2387475!4m0!5e0!3m2!1sru!2s!4v1753847595784!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`;
    }
  },
  methods: {
    openDirections() {
      
      const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(this.address)}`;
      window.open(url, '_blank');
    },
    callPhone(number) {
      window.location.href = `tel:${number}`;
    }
  }
}
</script>

<style scoped>
.location-container {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Floating background */
.floating-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

.floating-element {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(0, 212, 255, 0.1), rgba(118, 75, 162, 0.1));
  animation: float 8s ease-in-out infinite;
}

.floating-element:nth-child(1) {
  width: 180px;
  height: 180px;
  top: 20%;
  left: -5%;
  animation-delay: 0s;
}

.floating-element:nth-child(2) {
  width: 120px;
  height: 120px;
  top: 70%;
  right: -3%;
  animation-delay: 3s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(180deg); }
}

/* Main Content */
.location-content {
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 2rem;
  align-items: start;
}

/* Contact Card */
.contact-card {
  background: linear-gradient( #fcfcfc 0%, #f9f8fae0 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  animation: slideInLeft 0.8s ease-out;
}

.contact-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(118, 75, 162, 0.05));
  z-index: -1;
}

.card-header h2 {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #475dc0, #643693);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
}

/* Building Image */
.building-image {
  width: 100%;
  height: 200px;
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.building-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.contact-card:hover .building-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-card:hover .image-overlay {
  opacity: 1;
}

/* Contact Info */
.contact-info {
  color: #523aa3;
}

.info-section {
  margin-bottom: 1.5rem;
}

.info-section h3 {
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.4;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.info-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #475dc0;
  margin-bottom: 0.5rem;
}

.info-section p {
  font-size: 0.95rem;
  color: #0f0f0fe6;
  line-height: 1.5;
}

/* Phone Numbers */
.phone-numbers {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.phone-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: #523aa3;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  background: #475dc04a;
  border: 1px solid #523aa3;
  border-radius: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.phone-link:hover {
  background: #556dda66;
  box-shadow: 0 0 5px #475dc03e;
  transform: translateX(5px);
}

.phone-link i {
  font-size: 1.1rem;
  color: #475dc0;
}

/* Map Container - Updated with same style as contact-card */
.map-container {
  background: linear-gradient( #fdfbff 0%, #f9f8fae9 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  animation: slideInRight 0.8s ease-out;
}

.map-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(118, 75, 162, 0.05));
  z-index: -1;
}

.map-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.map-header h3 {
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #475dc0, #643693);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.directions-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #e0e3ee4d;
  border: 1px solid #523aa3;
  color: #523aa3;
  padding: 0.8rem 1.2rem;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.directions-btn:hover {
  background: #556dda66;
  box-shadow: 0 0 5px #475dc03e;
  transform: translateY(-2px);
}

.directions-btn i {
  color: #475dc0;
}

/* Map Content */
.map-content {
  height: 400px;
  position: relative;
  border-radius: 0 0 2rem 2rem;
  overflow: hidden;
}

.map-content iframe {
  border-radius: 0 0 2rem 2rem;
  filter: saturate(0.9) contrast(1.1);
}

/* Animations */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .location-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-card {
    max-width: 500px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .location-container {
    padding: 1rem 0.5rem;
  }
  
  .contact-card, .map-container {
    padding: 1.5rem;
  }
  
  .map-header {
    padding: 1.5rem;
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
  
  .card-header h2, .map-header h3 {
    font-size: 1.5rem;
  }
  
  .map-content {
    height: 300px;
  }
  
  .phone-numbers {
    gap: 0.6rem;
  }
  
  .phone-link {
    padding: 0.6rem 0.8rem;
    font-size: 0.9rem;
  }
  
  .directions-btn {
    justify-content: center;
  }
}
</style>