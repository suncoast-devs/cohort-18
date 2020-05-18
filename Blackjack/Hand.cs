using System;
using System.Collections.Generic;

namespace Blackjack
{
    class Hand
    {
        // PEDAC
        //
        // Hand has a list of cards that it is holding.
        public List<Card> CardsBeingHeld = new List<Card>();

        //
        // Algorithm for Accept
        // - Take the card we are given
        public void Accept(Card cardWeAreGivenToHold)
        {
            // - Add it to the list of hards we hold.
            CardsBeingHeld.Add(cardWeAreGivenToHold);
        }

        // Shows the cards to the console
        public void ShowCards()
        {
            // PEDAC
            //
            // Problem: Have a lists cards, print their details one at a time to the console
            //
            // Example: 2 of Clubs, 10 of Hearts, and the Ace of Diamonds.
            // Print:
            // 2 of Clubs
            // 10 of Hearts
            // Ace of Diamonds
            //
            // Data: our CardsBeingHeld list, and the Console
            //
            // Algorithm:
            // - For each card in the list of cards in CardsBeingHeld
            foreach (var card in CardsBeingHeld)
            {
                //   - Print to the console, Face of Suit
                Console.WriteLine($"{card.Face} of {card.Suit}");
            }
        }

        // name: TotalValue
        // input: none
        // output: int (being the total value of all cards added up)
        public int TotalValue()
        {
            // PEDAC
            //
            // Problem: Given a list cards go through each card, totalling up those card values.
            //
            // Example: 2 of Clubs, 10 of Hearts, and the Ace of Diamonds.
            // Result: 23
            //
            // Example: empty
            // Results: 0
            //
            // Data: List of cards, an integer to keep track of the total
            //
            // Algorithm:
            // - Start with a total equal to 0
            var total = 0;
            // - For each card in our list
            foreach (var card in CardsBeingHeld)
            {
                //   - get the value of that card
                var cardValue = card.Value();

                //   - Add that value to total, making a new total
                // total += cardValue;
                total = total + cardValue;
            }

            // - return total
            return total;
        }

    }
}
