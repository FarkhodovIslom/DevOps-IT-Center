<style scoped>
  .loader-container {
    width: 100%;
    height: 100%;
    background-color: #f9fcfc;
    position: fixed;
    top: 0; bottom: 0; left: 0; right: 0;
    z-index: 1200;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 0.8s ease-out, visibility 0.8s ease-out;
  }
  
  .loader-container.fade-out {
    opacity: 0;
    visibility: hidden;
  }
  
  .loader {
    width: 110px;
    height: 50px;
    position: relative;
  }

  .loader-text {
    position: absolute;
    top: 0;
    padding: 0;
    margin: 0;
    color: #C8B6FF;
    animation: text_713 3.5s ease both infinite;
    font-size: 1rem;
    letter-spacing: 1px;
  }

  .load {
    background-color: #9A79FF;
    border-radius: 50px;
    display: block;
    height: 16px;
    width: 16px;
    bottom: 0;
    position: absolute;
    transform: translateX(64px);
    animation: loading_713 3.5s ease both infinite;
  }

  .load::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #D1C2FF;
    border-radius: inherit;
    animation: loading2_713 3.5s ease both infinite;
  }

  @keyframes text_713 {
    0% {
      letter-spacing: 1px;
      transform: translateX(0px);
    }

    40% {
      letter-spacing: 2px;
      transform: translateX(26px);
    }

    80% {
      letter-spacing: 1px;
      transform: translateX(32px);
    }

    90% {
      letter-spacing: 2px;
      transform: translateX(0px);
    }

    100% {
      letter-spacing: 1px;
      transform: translateX(0px);
    }
  }

  @keyframes loading_713 {
    0% {
      width: 16px;
      transform: translateX(0px);
    }

    40% {
      width: 100%;
      transform: translateX(0px);
    }

    80% {
      width: 16px;
      transform: translateX(64px);
    }

    90% {
      width: 100%;
      transform: translateX(0px);
    }

    100% {
      width: 16px;
      transform: translateX(0px);
    }
  }

  @keyframes loading2_713 {
    0% {
      transform: translateX(0px);
      width: 16px;
    }

    40% {
      transform: translateX(0%);
      width: 80%;
    }

    80% {
      width: 100%;
      transform: translateX(0px);
    }

    90% {
      width: 80%;
      transform: translateX(15px);
    }

    100% {
      transform: translateX(0px);
      width: 16px;
    }
  }
</style>

<template>
  <div id="loader-container" class="loader-container" :class="{ 'fade-out': isHiding }">
    <div class="loader">
      <span class="loader-text">loading</span>
      <span class="load"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  data() {
    return {
      isHiding: false
    }
  },
  mounted() {
    // Запускаем исчезновение через 1.2 сек
    setTimeout(() => {
      this.isHiding = true;
      
      // Удаляем элемент из DOM после завершения анимации
      setTimeout(() => {
        this.$el.remove();
      }, 800); // 800ms = время transition
    }, 1200);
  }
}
</script>