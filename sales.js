"use strict";
console.log("it is working");

const newStoreForm = document.getElementById("new-store-form");

//random numbers 
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

// an array for stores when created to push
const allStores = [];

/*storeDetails = [["Seatle",23,65,6.3], ["Tokyo",3,24,1.2],["Dubai",11,38,3.7],["Paris",20,38,2.3],["Lima",2,16,4.6]];*/



function CookieStore(storeName, minCustomersPerHour, maxCustomersPerHour, averageCookiesPerHour ) {
  this.storeName = storeName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.averageCookiesPerHour = averageCookiesPerHour;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailyCookies = 0;
  this.pushStore();
  this.render();
}

const tableHeader = ["Location", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "Daily Total"];

/* introduce a table here  */
const cookieStand = document.getElementById("cookieStand");

/* const storeContainer = document.getElementById("storeContainer"); */
const table = document.createElement("table");


  //connect this table to page
  cookieStand.appendChild(table);
 // const trr =document.createElement("tr");
  //table.appendChild(trr);
  // table header row

  function headerRow() {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = "Store Location";
    tr.appendChild(th)

    for(let i=0; i< hours.length; i++) {
      const th = document.createElement("th");
      th.textContent = hours[i];
      tr.appendChild(th)
    }
    const storeTotalHeaderCell = document.createElement("th");
    storeTotalHeaderCell.textContent = "Store Daily Total";
    tr.appendChild(storeTotalHeaderCell);
    table.appendChild(tr);
  }

  headerRow();
/*
  // create table row
  const trow = document.createElement("tr"); 
  table.appendChild(trow);

  // 1st row

  for( let i = 0; i <tableHeader.length; i++) {
    const td = document.createElement("td");
    td.textContent = tableHeader[i]
    trow.appendChild(td)

  }

*/


//calc customers each hour

CookieStore.prototype.calcCustomersEachHour = function () {
    for (let i = 0; i< hours.length; i++){
        this.customersEachHour.push(randomNum(this.minCustomersPerHour,this.maxCustomersPerHour));
    }
    
};

// cookies each hour

CookieStore.prototype.calcCookiesEachHour = function () {
    for (let i = 0; i <hours.length; i++) {
        const oneHourCookies = Math.ceil((this.customersEachHour[i]) * this.averageCookiesPerHour);
        this.cookiesEachHour.push(oneHourCookies);
        this.totalDailyCookies +=oneHourCookies;
    }
};

// prototype method to push a new instance of Cookie store in the all store array as it is created
CookieStore.prototype.pushStore = function (){
  allStores.push(this);
};

// render figures to tables

CookieStore.prototype.render = function () {
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();

    const tr1 = document.createElement("tr");
    table.appendChild(tr1);
    const tda = document.createElement("td");

    tr1.appendChild(tda) ;
    tda.textContent = this.storeName;

    for( let i = 0; i<tableHeader.length-2; i++){
      const td = document.createElement("td");
      td.textContent = this.cookiesEachHour[i];
      tr1.appendChild(td)
    }
 
    const td1 = document.createElement("td");
    td1.textContent = this.totalDailyCookies;
    tr1.appendChild(td1)
}

 
const seatle = new CookieStore("seatle",23,65,6.3);
const tokyo = new CookieStore("Tokyo",3,24,1.2);
const dubai = new CookieStore("Dubai",11,38,3.7);
const paris = new CookieStore("Paris",20,38,2.3);
const lima = new CookieStore("Lima",2,16,4.6);


// hourly totals - to remain under the above 5 stores
function hourlyTotal () {
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.textContent = "Hourly Totals";
  tr.appendChild(th)

  for (let i = 0; i<hours.length; i++){
    const th = document.createElement("th");
    let hourlyTotals = 0;
    for(let j=0; j<allStores.length; j++){
      const hourlyAmount = allStores[j].cookiesEachHour[i];
      hourlyTotals +=hourlyAmount;
    }
    th.textContent = hourlyTotals;
    tr.appendChild(th);
  }
 let totalTotal = 0;
  for (let i = 0; i<allStores.length; i++){
    totalTotal +=allStores[i].totalDailyCookies;
  }
const totalTotalCell = document.createElement("th");
totalTotalCell.textContent = totalTotal;
tr.appendChild(totalTotalCell);
table.appendChild(tr);
}
hourlyTotal();

//Form creation

newStoreForm.addEventListener("submit", function (event) {
event.preventDefault();
table.innerHTML = "";
headerRow();

for(let i = 0; i < allStores.length; i++) {
  allStores[i].render();
}

const storeNameInput = event.target.name.value;
const minCustomersPerHourInput = event.target.minCustomersPerHour.value;
const maxCustomersPerHourInput = event.target.maxCustomersPerHour.value;
const averageCookiesPerHourInput = event.target.averageCookiesPerHour.value;

const store = new CookieStore(storeNameInput, minCustomersPerHourInput,maxCustomersPerHourInput,averageCookiesPerHourInput);
hourlyTotal()
newStoreForm.reset();

}
)