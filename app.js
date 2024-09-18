import { Sortable, MultiDrag } from "sortablejs";

import data from "./data.json" assert { type: "json" };

for (const category_name in data) {
  const category = data[category_name];
  let items = category.items.sort(() => Math.random() - 0.5).slice(0, category.quantity);

  for (const item of items) {
    let tr = document.createElement("tr");

    let td = document.createElement("td");
    td.innerText = item;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = category["best served"];
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerText = category.serving;
    tr.appendChild(td);

    source.appendChild(tr);
  }
}

Sortable.mount(new MultiDrag());
Sortable.create(source, {
  group: "shared",
  multiDrag: true,
  selectedClass: "selected",
  filter: "th",
});
Sortable.create(meal1, {
  group: "shared",
  multiDrag: true,
  selectedClass: "selected",
  filter: "th",
});
Sortable.create(meal2, {
  group: "shared",
  multiDrag: true,
  selectedClass: "selected",
  filter: "th",
});
