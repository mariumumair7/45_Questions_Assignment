function make_car(manufacturer: string, model: string, ...options: [string,any][]) :
Object {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car('Toyota', 'Camry', ['color', 'red']));
console.log(make_car('Honda', 'Accord', ['color', 'blue']));
console.log(make_car('Ford', 'Mustang', ['color', 'yellow']));
console.log(make_car('Chevrolet', 'Corvette', ['color', 'green']));
console.log(make_car('BMW', 'X5', ['color', 'black']));
console.log(make_car('Mercedes-Benz', 'C-Class', ['color', 'white']));
console.log(make_car('Audi', 'A4', ['color', 'silver']));


