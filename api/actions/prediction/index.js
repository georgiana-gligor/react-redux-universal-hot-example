const initialPredictionList = [
  {
    id: 1,
    text: "Ala Bala Portocala"
  }
];

export function load(req) {
  console.log(req.query);

  // TODO load from Mongo
  return new Promise((resolve) => {
    resolve(initialPredictionList);
  });
}
