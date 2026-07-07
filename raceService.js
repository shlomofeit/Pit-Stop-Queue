import { getRaceData } from "./raceData.js";

export function welcomeMessage() {
  const message = `Pit Stop Queue - Race Team Management System\nRace engineer: "Let's check the current queue status on the pit wall."`;

  console.log(message);
}

export async function queueData() {
  console.log("Loading queue data...\n");

  try {
    const data = await getRaceData();
    const queue = `
    Race: ${data.raceName}
    Lap: ${data.currentLap} / ${data.totalLaps}
    Total cars in race: ${data.cars.length}
    Pit stop completed: ${data.cars.filter((car) => car.status === "done").length}\n`;

    console.log("========== PIT STOP QUEUE ==========\n");
    console.log(queue);

    return;
  } catch (err) {
    console.log(err.message);
  }
}

export function searchCarPrint() {
  const title = "\n--- Search for a car by number ---";
  console.log(title);
}
async function getWaitingCars() {
  try {
    const data = await getRaceData();

    const waitingCars = data.cars.filter((car) => car.status === "waiting");

    return waitingCars;
  } catch (err) {
    throw new Error(err);
  }
}

async function getNextCar() {
  try {
    const waitingCars = await getWaitingCars();
    const nextCar = waitingCars[0];

    return nextCar;
  } catch (err) {
    throw new Error(err);
  }
}

export async function printWaitingCars() {
  try {
    const waitingCars = await getWaitingCars();

    console.log("Cars waiting for pit stop:\n");

    for (const car of waitingCars) {
      const carPrint = `- Car #${car.carNumber} | Driver: ${car.driverName}`;
      console.log(carPrint);
    }

    return;
  } catch (err) {
    throw new Error(err);
  }
}
export async function printNextCar() {
  try {
    const nextCar = await getNextCar();

    console.log("\nNext car to enter the pit:");
    const car = `>> Car #${nextCar.carNumber} | Driver: ${nextCar.driverName}`;

    console.log(car);
    console.log("=====================================\n");

    return;
  } catch (err) {
    throw new Error(err);
  }
}

export async function radioMessage() {
  try {
    const nextCar = await getNextCar();

    const message = `Radio message to car #${nextCar.carNumber}: "Box box box, ${nextCar.driverName}, pit this lap!"`;

    console.log(message);
    return;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getCarByNumber(carNum) {
  try {
    const data = await getRaceData();

    const findCar = data.cars.find((car) => {
      return car.carNumber === carNum;
    });

    if (!findCar) {
      throw new Error(
        `Error: No car found with number #${carNum} in the current race.`,
      );
    }

    const result = `Found car #${findCar.carNumber} | Driver: ${findCar.driverName} | Status: ${findCar.status}`;

    return result;
  } catch (err) {
    console.log(err.message);
  }
}
