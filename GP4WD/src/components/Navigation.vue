<template>
    <nav class="navbar">
      <div class="logo">
        <!-- <img src="@/assets/logo.png" alt="Logo" /> -->
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/books">Books</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.toggle("active");
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #777777;
    padding: 10px 20px;
    width: 100%; 
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000; 
  }

  .logo img {
    height: 40px;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
  
  .nav-links li a:hover {
    background-color: #777777;
    color: #f0a500;
  }
  
  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .hamburger span {
    background-color: white;
    height: 4px;
    width: 25px;
    margin: 3px;
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 60px;
      background-color: #333;
      width: 100%;
      text-align: center;
    }
  
    .nav-links.active {
      display: flex;
    }
  
    .hamburger {
      display: flex;
    }
  
    .nav-links li {
      margin: 10px 0;
    }
  }
  </style>
  