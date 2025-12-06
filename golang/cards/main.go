package main

import "fmt"

func main() {
	cards := newDeck()
	cards.print()
	fmt.Println("---- Dealing 5 cards ----")
	hand, remainingCards := deal(cards, 5)
	fmt.Println("Your hand:")
	hand.print()
	fmt.Println("Remaining cards in deck:")
	remainingCards.print()
}
