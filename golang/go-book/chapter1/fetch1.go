package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
)

func main() {
	for _, url := range os.Args[1:] {
		// Ensure the URL has the http:// prefix
		if !strings.HasPrefix(url, "http://") {
			url = "http://" + url
		}

		resp, err := http.Get(url)
		if err != nil {
			fmt.Fprintf(os.Stderr, "fetch: %v\n", err)
			os.Exit(1)
		}

		// Print the HTTP status code and text
		fmt.Printf("Status: %s\n", resp.Status)

		// Use io.Copy to stream directly to os.Stdout.
		// This avoids loading the entire response into memory.
		_, err = io.Copy(os.Stdout, resp.Body)

		// Close the body after copying to prevent resource leaks
		resp.Body.Close()

		if err != nil {
			fmt.Fprintf(os.Stderr, "fetch: reading %s: %v\n", url, err)
			os.Exit(1)
		}
	}
}
