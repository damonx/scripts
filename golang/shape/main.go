package main

import (
	"fmt"
)

type triangle struct {
	base, height float64
	name         string
}
type square struct {
	sideLength float64
	name       string
}
type shape interface {
	getArea() float64
	getName() string
}

func (s square) getName() string {
	return s.name
}

func (t triangle) getName() string {
	return t.name
}

func (t triangle) getArea() float64 {
	return 0.5 * t.base * t.height
}

func (s square) getArea() float64 {
	return s.sideLength * s.sideLength
}

func printArea(s shape) {
	fmt.Printf("Shape %s area is: %f\n", s.getName(), s.getArea())
}

func main() {
	printArea(triangle{base: 3, height: 4, name: "Triangle"})
	printArea(square{sideLength: 5, name: "Square"})
}
