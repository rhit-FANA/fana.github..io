function forLoops(){
    for(let i = 2; i <= 10; i+=2){
        console.log(i);
    }
    for(let i = 5; i > 0; i--){
        console.log(i);
    }
}
function forOfLoops(){
    const nums1 = [1,2,3,4,5];
    for(const nums of nums1){
        console.log(nums);
    }
    const colors = ['red', 'green', 'blue', 'yellow'];
    for(const color of colors){
        console.log(color);
    }
    let retVal = 0;
    const nums2 = [1, 2, 3, 4, 5];
    for(const nums of nums2){
        retVal+=nums;
    }
    console.log(retVal);
}
function forInLoops(){
    const student = {Name: 'John', Age: 20,Grade: 'A'};
    for(const key in student){
        console.log(`${key}: ${student[key]}`);
    }
    const book = {Title:'Harry Potter',Author:'J.K. Rowling',Year:'1987'};
    for(const key in book){
        console.log(`${key}: ${book[key]}`);
    }
}
function toCelsius(num){
    num= (5/9)*(num-32);
    console.log(num);   
}
function cityPop(cities){
    
    console.log(`${cities}: ${populations[key]}`);
}
function forEachLoops(){
    const temperatures = [32, 68, 75, 82, 56];
    temperatures.forEach(toCelsius);
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston'];
    const populations = { 'New York': 8398748, 'Los Angeles': 3990456, 'Chicago': 2705994, 'Houston': 2320268 };
    cities.forEach((city) => {
    console.log(`${city}, ${populations[city]}`)
    });
}

forLoops();
forOfLoops();
forInLoops();
forEachLoops();