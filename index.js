// Code your solution here
function findMatching(drivers, name) {
    let filterDrivers = drivers.filter( function (driverName) {
        //console.log("driver", driverName)
        return driverName.toUpperCase() === name.toUpperCase();
    });
    //console.log("filterDrivers", filterDrivers);
    return filterDrivers;
}


function fuzzyMatch(drivers, firstLetters) {
    let filter2 = drivers.filter( function (driverName) {
        return driverName.indexOf(firstLetters) === 0
    });
    return filter2;
}

function matchName(drivers, name) {
    let driveFilter = drivers.filter( function (element) {
        return element.name === "Bobby";
    });
    return driveFilter;
};