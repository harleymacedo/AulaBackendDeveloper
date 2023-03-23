
function printMileage(mileage: number | null | undefined) {
    console.log(`Mileage ${mileage ?? 'Not available'}`);
}

printMileage(null);
printMileage(0);