package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"strings"
)

func main() {
	// line -> set of filenames
	filesByLine := make(map[string]map[string]bool)

	for _, filename := range os.Args[1:] {
		data, err := ioutil.ReadFile(filename)
		if err != nil {
			fmt.Fprintf(os.Stderr, "dup2: %v\n", err)
			continue
		}

		for _, line := range strings.Split(string(data), "\n") {
			if filesByLine[line] == nil {
				filesByLine[line] = make(map[string]bool)
			}
			filesByLine[line][filename] = true
		}
	}

	for line, files := range filesByLine {
		if len(files) > 1 {
			fmt.Printf("Line: %q\n", line)
			fmt.Println("  Files:")
			for filename := range files {
				fmt.Printf("    %s\n", filename)
			}
		}
	}
}
