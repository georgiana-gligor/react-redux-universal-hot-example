const initialPredictionList = {
  data: [
  {id: 1, text: "Ala Bala Portocala"},
  {id: 2, text: "Frankie goes to Hollywood"}
]
};

export function load(req) {
  console.log(req.query);

  // TODO load from Mongo
  return new Promise((resolve, reject) => {
    resolve(initialPredictionList);
  });
}
