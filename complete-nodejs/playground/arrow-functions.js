// const squar = (x) => x * x;

// console.log(squar(4));

const square = (x) => x * x;
console.log(square(4));

const evt = {
    name: 'Birthday Party',
    guestList: ['Damon', 'Jenna', 'Maggie'],
    printGuestList: () => {
        console.log('Guest list for ' + evt.name);
        evt.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + evt.name);
        });
    }
}

evt.printGuestList();                               