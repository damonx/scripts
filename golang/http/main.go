package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
	resp, err := http.Get("https://www.spark.co.nz")
	if err != nil {
		fmt.Println("Error:", err)
		os.Exit(1)
	}
	// fmt.Println("Response Status:", resp.Status)
	// fmt.Println("Response Headers:", resp.Header)
	// fmt.Println("Response Protocol:", resp.Proto)
	// fmt.Println("Response Body:", resp.Body)
	// print the html content of the response
	// bs := make([]byte, 99999)
	// resp.Body.Read(bs)
	// fmt.Println(string(bs))

	io.Copy(os.Stdout, resp.Body)
}
