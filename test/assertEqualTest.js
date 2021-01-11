// TEST CODE for assertEqual
const assertEqual = require('../assertEqual');
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(5, 1);
assertEqual("Lighthouse Labs", "lighthouse labs");
assertEqual(1, "boo");