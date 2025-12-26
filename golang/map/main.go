package main

import "fmt"

func main() {

	colors := map[string]string{
		"red":   "#ff0000",
		"green": "#00ff00",
		"blue":  "#0000ff",
		"white": "#ffffff",
	}

	printMap(colors)

	// for color, hex := range colors {
	// 	fmt.Printf("The hex code for %s is %s\n", color, hex)
	// }

	// //var colorsToPring map[string]string
	// colorsToPrint := make(map[string]string)
	// colorsToPrint["cyan"] = "#00ffff"
	// colorsToPrint["magenta"] = "#ff00ff"
	// colorsToPrint["yellow"] = "#ffff00"

	// delete(colorsToPrint, "cyan")

	// for color, hex := range colorsToPrint {
	// 	fmt.Printf("The hex code for %s is %s\n", color, hex)
	// }

}

func printMap(m map[string]string) {
	for color, hex := range m {
		fmt.Printf("The hex code for %s is %s\n", color, hex)
	}
}
