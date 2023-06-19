"use strict";
console.log("salmon cookies");
//set the object
// random number generator

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    console.log();
}

// I tried to console.log


const containerSettle = document.getElementById("containerSeattle");
const containerTokyo = document.getElementsByClassName("containerTokyo");
const cDubai = document.getElementsByClassName("containerDubai");
const cParis = document.getElementsByClassName("containerParis");
const cLima = document.getElementsByClassName("containerLima");

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

console.log(hours.length);

const seattle = {
  storeName: "seattle",
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerHour: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,

  calcCustomersEachHour: function () {
    for (let i = 0; i< hours.length; i++){
        this.customersEachHour.push(randomNum(this.minCustPerHour,this.maxCustPerHour));
    }
    console.log(this.customersEachHour);
  },

  calcCookiesEachHour:function () {
    for (let i = 0; i <hours.length; i++){
        const oneHourCookies = Math.ceil((this.customersEachHour[i]) * this.avgCookiesPerHour);
        console.log(oneHourCookies);
        this.cookiesEachHour.push(oneHourCookies);
        this.totalDailyCookies +=oneHourCookies;
    }
    console.log(this.totalDailyCookies);

 
  },
    render: function () {
        this.calcCustomersEachHour()
        this.calcCookiesEachHour()

        const article = document.createElement("article");
        containerSeattle.appendChild(article);
    
        const h3 = document.createElement("h3");
        h3.textContent = this.storeName;
        article.appendChild(h3)
        

        const ul = document.createElement("ul");
        article.appendChild(ul);

        for (let i=0; i<hours.length; i++) {
            const li = document.createElement("li");
            li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
            ul.appendChild(li);
        }
    }
}

seattle.render()

// Tokyo
const tokyo = {
    storeName: "tokyo",
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookiesPerHour: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
  
    calcCustomersEachHour: function () {
      for (let i = 0; i< hours.length; i++){
          this.customersEachHour.push(randomNum(this.minCustPerHour,this.maxCustPerHour));
      }
      console.log(this.customersEachHour);
    },
  
    calcCookiesEachHour:function () {
      for (let i = 0; i <hours.length; i++){
          const oneHourCookies = Math.ceil((this.customersEachHour[i]) * this.avgCookiesPerHour);
          console.log(oneHourCookies);
          this.cookiesEachHour.push(oneHourCookies);
          this.totalDailyCookies +=oneHourCookies;
      }
      console.log(this.totalDailyCookies);
  
   
    },
      render: function () {
          this.calcCustomersEachHour();
          this.calcCookiesEachHour();
  
          const article = document.createElement("article");
          containerTokyo.appendChild(article);
      
          const h3 = document.createElement("h3");
          h3.textContent = this.storeName;
          article.appendChild(h3)
          
  
          const ul = document.createElement("ul");
          article.appendChild(ul);
  
          for (let i=0; i<hours.length; i++) {
              const li = document.createElement("li");
              li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
              ul.appendChild(li);
          }
      }
  }
  
  tokyo.render();

// Dubai

const dubai = {
    storeName: "dubai",
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookiesPerHour: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
  
    calcCustomersEachHour: function () {
      for (let i = 0; i< hours.length; i++){
          this.customersEachHour.push(randomNum(this.minCustPerHour,this.maxCustPerHour));
      }
      console.log(this.customersEachHour);
    },
  
    calcCookiesEachHour:function () {
      for (let i = 0; i <hours.length; i++){
          const oneHourCookies = Math.ceil((this.customersEachHour[i]) * this.avgCookiesPerHour);
          console.log(oneHourCookies);
          this.cookiesEachHour.push(oneHourCookies);
          this.totalDailyCookies +=oneHourCookies;
      }
      console.log(this.totalDailyCookies);
  
   
    },
      render: function () {
          this.calcCustomersEachHour()
          this.calcCookiesEachHour()
  
          const article = document.createElement("article");
          containerDubai.appendChild(article);
      
          const h3 = document.createElement("h3");
          h3.textContent = this.storeName;
          article.appendChild(h3)
          
  
          const ul = document.createElement("ul");
          article.appendChild(ul);
  
          for (let i=0; i<hours.length; i++) {
              const li = document.createElement("li");
              li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
              ul.appendChild(li);
          }
      }
  }
  
  dubai.render();

  //Paris


const paris = {
    storeName: "paris",
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookiesPerHour: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
  
    calcCustomersEachHour: function () {
      for (let i = 0; i< hours.length; i++){
          this.customersEachHour.push(randomNum(this.minCustPerHour,this.maxCustPerHour));
      }
      console.log(this.customersEachHour);
    },
  
    calcCookiesEachHour:function () {
      for (let i = 0; i <hours.length; i++){
          const oneHourCookies = Math.ceil((this.customersEachHour[i]) * this.avgCookiesPerHour);
          console.log(oneHourCookies);
          this.cookiesEachHour.push(oneHourCookies);
          this.totalDailyCookies +=oneHourCookies;
      }
      console.log(this.totalDailyCookies);
  
   
    },
      render: function () {
          this.calcCustomersEachHour()
          this.calcCookiesEachHour()
  
          const article = document.createElement("article");
          containerParis.appendChild(article);
      
          const h3 = document.createElement("h3");
          h3.textContent = this.storeName;
          article.appendChild(h3)
          
  
          const ul = document.createElement("ul");
          article.appendChild(ul);
  
          for (let i=0; i<hours.length; i++) {
              const li = document.createElement("li");
              li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
              ul.appendChild(li);
          }
      }
  }
  
  paris.render();

  // Lima
 
const lima = {
    storeName: "lima",
    minCustPerHour: 3,
    maxCustPerHour: 24,
    avgCookiesPerHour: 1.2,
    customersEachHour: [],
    cookiesEachHour: [],
    totalDailyCookies: 0,
  
    calcCustomersEachHour: function () {
      for (let i = 0; i< hours.length; i++){
          this.customersEachHour.push(randomNum(this.minCustPerHour,this.maxCustPerHour));
      }
      console.log(this.customersEachHour);
    },
  
    calcCookiesEachHour:function () {
      for (let i = 0; i <hours.length; i++){
          const oneHourCookies = Math.ceil((this.customersEachHour[i]) * this.avgCookiesPerHour);
          console.log(oneHourCookies);
          this.cookiesEachHour.push(oneHourCookies);
          this.totalDailyCookies +=oneHourCookies;
      }
      console.log(this.totalDailyCookies);
  
   
    },
      render: function () {
          this.calcCustomersEachHour()
          this.calcCookiesEachHour()
  
          const article = document.createElement("article");
          containerLima.appendChild(article);
      
          const h3 = document.createElement("h3");
          h3.textContent = this.storeName;
          article.appendChild(h3)
          
  
          const ul = document.createElement("ul");
          article.appendChild(ul);
  
          for (let i=0; i<hours.length; i++) {
              const li = document.createElement("li");
              li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
              ul.appendChild(li);
          }
      }
  }
  
  lima.render();
//console.log(seattle.customersEachHour.length);
//console.log(seattle.cookiesEachHour.length); 