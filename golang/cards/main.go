package main

import "fmt"

func main() {
	cards := newDeck()
	fmt.Println("---- Shuffling cards ----")
	cards.shuffle()
	cards.print()
	// fmt.Println("---- Saving cards to file ----")
	// cards.saveToFile("my_cards")
	// fmt.Println("---- Loading cards from file ----")
	// cardsFromFile := newDeckFromFile("my_cards")
	// cardsFromFile.print()
	// cards.print()
	// fmt.Println("---- Dealing 5 cards ----")
	// hand, remainingCards := deal(cards, 5)
	// fmt.Println("Your hand:")
	// hand.print()
	// fmt.Println("Remaining cards in deck:")
	// remainingCards.print()
	// fmt.Println("---- DAMONX ----")
	// fmt.Println("Hello World! value in bytes:", []byte("Hello World!"))
}
