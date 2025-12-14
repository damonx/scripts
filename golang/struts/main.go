package main

import "fmt"

type person struct {
	firstName string
	lastName  string
}

func main() {
	p := person{firstName: "Alex", lastName: "Anderson"}
	fmt.Println("p:", p)

	

}
