// Code your solution in this file!
const driver = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(){
     const [first, second] = driver
     return [first, second]
}

const returnLastTwoDrivers = function(){
      return driver.slice(-2);
}

const selectingDrivers = [
      returnFirstTwoDrivers,
      returnLastTwoDrivers
]

const createFareMultiplier = function(integer) {
      return function(fare) {
        return fare * integer;
      };
    };

const fareDoubler = function createFareMultiplier(fare){
      return fare * 2
}

const fareTripler = function createFareMultiplier(fare){
      return fare * 3
}
 function selectDifferentDrivers (driver, selectDriver) {
      return selectDriver(driver)
 }
