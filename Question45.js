function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car('Toyota', 'Camry', ['color', 'red']));
console.log(make_car('Honda', 'Accord', ['color', 'blue']));
console.log(make_car('Ford', 'Mustang', ['color', 'yellow']));
console.log(make_car('Chevrolet', 'Corvette', ['color', 'green']));
console.log(make_car('BMW', 'X5', ['color', 'black']));
console.log(make_car('Mercedes-Benz', 'C-Class', ['color', 'white']));
console.log(make_car('Audi', 'A4', ['color', 'silver']));
