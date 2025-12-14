package main

import (
	"fmt"
	"math/rand"
	"os"
	"strings"
	"time"
)

// Create a new type of 'deck'
// which is a slice of strings
type deck []string

func newDeck() deck {
	cards := deck{}
	cardSuits := []string{"Spades", "Diamonds", "Hearts", "Clubs"}
	cardValues := []string{"Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"}
	for _, suit := range cardSuits {
		for _, value := range cardValues {
			cards = append(cards, fmt.Sprintf("%s of %s", value, suit))
		}
	}
	return cards

}

func (d deck) print() {
	for i, card := range d {
		fmt.Println(i+1, card)
	}
}

func deal(d deck, handSize int) (deck, deck) {
	return d[:handSize], d[handSize:]
}

func (d deck) toString() string {
	return strings.Join([]string(d), ",")
}

func (d deck) saveToFile(filename string) error {
	// Deprecated: ioutil package is deprecated, use os package instead
	//return ioutil.WriteFile(filename, []byte(d.toString()), 0666)
	return os.WriteFile(filename, []byte(d.toString()), 0666)
}

func newDeckFromFile(filename string) deck {
	// Deprecated: ioutil package is deprecated, use os package instead
	//bs, err := ioutil.ReadFile(filename)
	// bs stands for byte slicef
	bs, err := os.ReadFile(filename)
	if err != nil {
		// Option 1: log the error and return a call to newDeck()
		// Option 2: log the error and quit the program
		fmt.Println("Error:", err)
		os.Exit(1)
	}
	sliceOfStrings := strings.Split(string(bs), ",")
	return deck(sliceOfStrings)
}

func (d deck) shuffle() {
	source := rand.NewSource(time.Now().UnixNano())
	rand := rand.New(source)

	for i := range d {
		newPosition := rand.Intn(len(d) - 1)
		d[i], d[newPosition] = d[newPosition], d[i]
	}
}
