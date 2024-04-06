<template>
  <main class="contact-page bg-gradient-to-t from-blue-500 to-white flex flex-col md:flex-col items-center justify-center min-h-screen">
      <h1 class="text-4xl font-bold pb-10 text-green-500">Contact me</h1>
      <div class="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4 md:space-y-0 md:space-x-4 text-center text-white">
          <a href="https://t.me/leng_menge">
              <img 
                  class="rotate transform md:hover:translate-y-1 md:max-w-xs w-20 h-20" 
                  src="../assets/telegram.png" 
                  alt="tg" 
              >
              <p>Telegram</p>
          </a>
          <a href="www.linkedin.com/in/lengmenge">
              <img 
                  class="rotate transform md:hover:translate-y-1 md:max-w-xs w-20 h-20" 
                  src="../assets/linkin.png" 
                  alt="tg" 
              >
              <p>Linkined</p>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100015758539327&mibextid=ZbWKwL">
              <img 
                  class="rotate transform md:hover:translate-y-1 md:max-w-xs w-20 h-20" 
                  src="../assets/facebook.png" 
                  alt="fb" 
              >
              <p>Facebook</p>
          </a>
      </div>
  </main>
</template>

<script>
export default {
data() {
  return {
    isTelegramHover: false,
    isLinkedInHover: false,
    isFacebookInHover: false
  };
},
methods: {
  toggleTelegramHover() {
    this.isTelegramHover = !this.isTelegramHover;
  },
  toggleLinkedInHover() {
    this.isLinkedInHover = !this.isLinkedInHover;
  },
  toggleFacebookInHover() {
    this.isFacebookInHover = !this.isFacebookInHover;
  }
}
};
</script>

<style>
.rotate {
  transition: transform 0.2s ease-out;
}
</style>
