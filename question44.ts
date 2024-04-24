function make_sandwich(...items: string[]) {
    console.log("Making a sandwich with the following items: ");
    for (let item of items) {
        console.log("- " + item);
    }
}
make_sandwich("bread", "cheese", "tomato");
make_sandwich("bread", "cheese");
make_sandwich("bread");
