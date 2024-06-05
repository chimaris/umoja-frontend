<template>
    <div class="beta-testing-sign">
      <div class="text-container">
        <span class="text">Beta Testing</span>
      </div>
    </div>
  </template>
  
  <style scoped>
  .beta-testing-sign {
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 0, 0, 0.8);
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    z-index: 1000;
    user-select: none;
    /* border-radius: 0 20px 20px 0; */
    overflow: hidden;
  }
  
  .text-container {
    display: inline-block;
    white-space: nowrap;
  }
  
  .text {
    display: inline-block;
    padding-left: -100%;
    animation: scrollText 5s linear infinite;
  }
  
  @keyframes scrollText {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
  </style>
  