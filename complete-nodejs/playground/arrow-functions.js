// const squar = (x) => x * x;

// console.log(squar(4));

const square = (x) => x * x;
console.log(square(4));

const evt = {
    name: 'Birthday Party',
    guestList: ['Damon', 'Jenna', 'Maggie'],
    printGuestList() {
        console.log('Guest list for ' + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        });
    }
}

evt.printGuestList();                               