import {
  welcomeMessage,
  queueData,
  printWaitingCars,
  printNextCar,
  radioMessage,
  searchCarPrint,
  getCarByNumber,
} from "./raceService.js";

async function main() {
  try {
    welcomeMessage();

    await queueData();

    await printWaitingCars();

    await printNextCar();

    await radioMessage();

    searchCarPrint();

    const findCar1 = await getCarByNumber(44);
    const findCar2 = await getCarByNumber(99);

    console.log(findCar1);
  } catch (err) {
    console.log(err.message);
  }
}

main();
