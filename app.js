"use strict";
console.log("cookie stand check");
// Cookie stand lab

//Each shop should have 
// site name

//minCookies
//maxCookies
//averageRequired

const container = document.getElementById("container")

const hours = ["6am","7am", "8am","9am","10am","11am","12noon","1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];
console.log(hours.length);

const seatle = {
    storeName:"seatle",
    minCustomersPerHour: 23,
    maxCustomersPerHous: 65,
    avgCookiesPerCust: 6.3,
    customersEachHour: [49,49,49,49,49,49,49,49,49,49,49,49,49],
    cookiesEachHour: [16,20,35,48,56,77,93,144,119,84,61,23,42,57],
    totalDailyCookies: 875,
    getCustomers: function () {
        const article = document.createElement("article");
        container.appendChild("article");

        const h3 = document.createElement("h3");
        h3.textContent = this.storeName;
        article.appendChild("h3");

        const ul = document.createElement("ul");
        article.appendChild("ul");

        for (i = 0; i < hours.length; i++) {
            const li = document.createElement("li");
            li.textContent = `${hours[i]}: ${this.cookiesEachHour[i]} cookies`;
            ul.appendChild("li")
        }

      }, 

};

