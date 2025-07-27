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
          <img src="" alt="Bizning binomiz" />
          <div class="image-overlay"></div>
        </div>

        <div class="contact-info">
          <div class="info-section">
            <h3>Urgut tuman, Do'stlik MFY, Navqijahon ko'chasi 120-uy</h3>
          </div>

          <div class="info-section">
            <div class="info-label">Mo'ljal:</div>
            <p>Hamkorbank yonidagi Uzgorsug'urta binosining 2-qavati</p>
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
          <div class="search-bar">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Google Xaritalardan qidiruv" readonly>
            <div class="map-controls">
              <button class="map-btn">
                <i class="fas fa-directions"></i>
              </button>
              <button class="map-btn">
                <i class="fas fa-expand"></i>
              </button>
              <button class="map-btn">
                <i class="fas fa-layer-group"></i>
              </button>
            </div>
          </div>
        </div>

        <div class="map-content">
          <!-- Placeholder for Google Maps -->
          <div class="map-placeholder">
            <div class="map-marker">
              <i class="fas fa-map-marker-alt"></i>
              <div class="marker-pulse"></div>
            </div>
            <div class="map-overlay-text">
              <h4>IT Center</h4>
              <p>Urgut, Samarqand</p>
            </div>
          </div>
          
          <!-- Google Maps attribution -->
          <div class="map-attribution">
            <img src="https://developers.google.com/maps/documentation/images/google_on_white.png" alt="Google" class="google-logo">
          </div>
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
      // Можно добавить reactive данные если нужно
    }
  },
  methods: {
    openDirections() {
      // Открытие маршрута в Google Maps
      const address = "Urgut tuman, Do'stlik MFY, Navqijahon ko'chasi 120-uy, Uzbekistan";
      const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
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
  background: linear-gradient( #667eea 0%, #764ba2 100%);
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
  background: linear-gradient(135deg, #0ff, #00d4ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
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
  color: white;
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
  color: #44e0ff;
  margin-bottom: 0.5rem;
}

.info-section p {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
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
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem 1rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.phone-link:hover {
  background: rgba(0, 212, 255, 0.2);
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  transform: translateX(5px);
}

.phone-link i {
  font-size: 1.1rem;
  color: #00d4ff;
}

/* Map Container */
.map-container {
  background:  linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.map-header {
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.search-bar {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  padding: 0.8rem 1rem;
  gap: 1rem;
}

.search-bar i {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
}

.search-bar input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: white;
  font-size: 0.9rem;
}

.search-bar input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.map-controls {
  display: flex;
  gap: 0.5rem;
}

.map-btn {
  width: 35px;
  height: 35px;
  border-radius: 0.5rem;
  background: rgba(0, 212, 255, 0.1);
  border: 1px solid rgba(0, 212, 255, 0.3);
  color: #00d4ff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-btn:hover {
  background: rgba(0, 212, 255, 0.2);
  box-shadow: 0 0 15px rgba(0, 212, 255, 0.3);
}

/* Map Content */
.map-content {
  height: 400px;
  position: relative;
  background: linear-gradient(135deg, #4a90e2, #357abd);
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-placeholder {
  position: relative;
  text-align: center;
  z-index: 2;
}

.map-marker {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.map-marker i {
  font-size: 3rem;
  color: #ff4444;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
  z-index: 2;
  position: relative;
}

.marker-pulse {
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 68, 68, 0.3);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}

.map-overlay-text {
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.map-overlay-text h4 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.map-overlay-text p {
  font-size: 1rem;
  opacity: 0.9;
}

.map-attribution {
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 3;
}

.google-logo {
  height: 20px;
  opacity: 0.8;
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
  
  .card-header h2 {
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
}
</style>