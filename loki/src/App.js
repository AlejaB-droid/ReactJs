import React from "react";

const lokis = [
  {
    name: "Old Loki",
    age: "3000 years",
    nexus: "being alive",
    img: "assets/img/loki_old.jpg",
  },
  {
    name: "Child Loki",
    age: "100 years",
    nexus: "killed Thor",
    img: "assets/img/loki_child.jpg",
  },
  {
    name: "Alligator Loki",
    age: "unknown",
    nexus: "ate the cat of the wrong neighbor",
    img: "assets/img/loki_alligator.jpg",
  },
  {
    name: "Party Loki",
    age: "1200 years",
    nexus: "defeated Captain America and Iron Man. Claimed the infinity stones",
    img: "assets/img/loki_party.jpg",
  },
  {
    name: "President Loki",
    age: "1500 years",
    nexus: "Became president of the United States of America",
    img: "assets/img/loki_president.jpeg",
  },
  {
    name: "Sylvie Loki",
    age: "1500 years",
    nexus: "Realized she had good inside of her",
    img: "assets/img/loki_silvi.jpg",
  },
  {
    name: "2012 Loki",
    age: "1500 years",
    nexus: "Escaped from the avengers",
    img: "assets/img/loki.jpg",
  },
];
function List({ data = [], renderItem, renderEmpty }) {
  return !data.length ? (
    renderEmpty()
  ) : (
    <header className="header text-center fixed-top">
      <h1> Loki variants</h1>
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {data.map((item, i) => (
          <div key={i}>{renderItem(item)}</div>
        ))}
      </div>
    </header>
  );
}
const RenderItem = (item) => {
  return (
    <div
      className="card  m-3 text-white text-center bg-secondary mb-3"
      style={{ width: "18rem" }}
    >
      <img src={item.img} className="card-img-top" alt={item.name} />
      <div className="card-body text-center">
                <h5 className="card-title">Name: {item.name}</h5>
                <p className="card-text">Age: {item.age}</p>
                <p className="card-text"> Nexus event: {item.nexus}</p>
              </div>
    </div>
  );
};
const RenderEmpty = () => {
  return <p>No Lokis to show :c</p>;
};
export default function App() {
  return (
    <List data={lokis} renderItem={RenderItem} renderEmpty={RenderEmpty} />
  );
}
