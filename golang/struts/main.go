package main

import "fmt"

type contactInfo struct {
	email   string
	zipCode int
}

type person struct {
	firstName string
	lastName  string
	contactInfo
}

func main() {
	p := person{firstName: "Alex", lastName: "Anderson"}
	p.print()

	var damon person
	damon.firstName = "Damon"
	damon.lastName = "Xu"
	damon.contactInfo.email = "test@test.com"
	damon.contactInfo.zipCode = 123456
	damon.print()

	var zoe person
	zoe = person{
		firstName: "Zoe",
		lastName:  "Liang",
		contactInfo: contactInfo{
			email:   "zoe@test.com",
			zipCode: 654321,
		},
	}
	zoe.print()
	// pPointer := &p
	// pPointer.updateName("Elodie")
	p.updateName("Elodie")
	p.print()
}

func (p *person) updateName(newFirstName string) {
	(*p).firstName = newFirstName
}

func (p person) print() {
	fmt.Printf("%+v\n", p)
}
