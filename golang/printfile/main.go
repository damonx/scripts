package main

import (
	"fmt"
	"io"
	"os"
)

type fileWriter struct{}

func main() {
	if len(os.Args) < 2 {
		fmt.Println("No argument provided")
		os.Exit(1)
	}
	f, err := os.Open(os.Args[1])
	if err != nil {
		fmt.Println("Error opening file:", err)
		os.Exit(1)
	}
	//io.Copy(os.Stdout, f)
	io.Copy(fileWriter{}, f)
}

func (fileWriter) Write(bs []byte) (n int, err error) {
	fmt.Println(string(bs))
	fmt.Println("Number of bytes written:", len(bs))
	return len(bs), nil
}
