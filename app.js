import { rand } from "./rand.js";

import data from "./data.json" assert { type: "json" };

const days = 2;
const mealsPerDay = 2;
let total = [];

for (const category_name in data) {
  data[category_name].items.sort(() => rand() - 0.5);
  data[category_name].index = 0;
}

for (let day = 0; day < days; day++) {
  console.log(`Day ${day}`);
  let dailyItems = [];
  for (const category_name in data) {
    let items = [];
    for (let i = 0; i < data[category_name].quantity; i++) {
      items.push(
        data[category_name].items[data[category_name].index % data[category_name].items.length],
      );
      data[category_name].index++;
    }

    items = items.map((item) => {
      return {
        name: item,
        category: category_name,
        serving: data[category_name].serving,
      };
    });
    dailyItems = dailyItems.concat(items);
  }

  let dailyMeals = Array.from({ length: mealsPerDay }, () => []);
  for (let i = 0; i < dailyItems.length; i++) {
    dailyMeals[i % mealsPerDay].push(dailyItems[i]);
    total.push(dailyItems[i]);
  }

  let row = table.insertRow(-1);
  row.className = "day";
  let cell = row.insertCell(0);
  cell.colSpan = 3;
  cell.innerText = `Day ${day + 1}`;

  for (let meal in dailyMeals) {
    let row = table.insertRow(-1);
    row.className = "meal";
    let cell = row.insertCell(0);
    cell.colSpan = 3;
    cell.innerText = `Meal ${+meal + 1}`;

    for (let item in dailyMeals[meal]) {
      let row = table.insertRow(-1);
      let cell = row.insertCell(0);
      cell.innerText = dailyMeals[meal][item].name;

      cell = row.insertCell(1);
      cell.innerText = dailyMeals[meal][item].category;

      cell = row.insertCell(2);
      cell.innerText = dailyMeals[meal][item].serving;
    }
  }
}

let row = table.insertRow(-1);
row.className = "meal";
let cell = row.insertCell(0);
cell.colSpan = 3;
cell.innerText = `Total `;
total = total.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));

for (let item in total) {
  let row = table.insertRow(-1);
  let cell = row.insertCell(0);
  cell.innerText = total[item].name;

  cell = row.insertCell(1);
  cell.innerText = total[item].category;

  cell = row.insertCell(2);
  cell.innerText = total[item].serving;
}
