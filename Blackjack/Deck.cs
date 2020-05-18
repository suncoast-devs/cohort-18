using System;
using System.Collections.Generic;

namespace Blackjack
{
    class Deck
    {
        // This is a List of Card objects.
        //
        //   List<of what>
        // var scores = new List<int>();
        // var names  = new List<string>();
        // var temperatures = new List<double>();
        //
        // var cards = new List<Card>();

        //
        // This property cannot be seen outside of any code belonging to Deck
        //  |
        //  |   Data type is a List <but of Card>
        //  |   |
        //  |   |          Name of the property
        //  v   v          |
        //                 |       What is it's value when we make a new Deck
        //                 |       |
        //                 |       |
        //                 v       v
        private List<Card> Cards = new List<Card>();

        public void MakeCards()
        {
            // PEDAC problem here. How to make our 52 cards? and shuffle.

            // Problem: Make a list of 52 cards with every combination of Face and Suit:
            // "Club", "Diamond", "Heart", or "Spade"
            // 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, or Ace.
            // ... and make sure they are shuffled.

            // Examples:   2 Clubs, 3 Hearts, Ace of Clubs, 7 of Spades ... 52 total.

            // Data:
            //    Arrays of suits
            //    Array of faces
            //    Card object
            //    List of Cards

            // Algorithm:
            //
            // Ensure we have a new empty list.
            // for every suit in our list of suits do this:
            var suits = new string[] { "Clubs", "Diamonds", "Hearts", "Spades" };
            var faces = new string[] { "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace" };

            foreach (var suit in suits)
            {
                //    for every face in our list of faces do this:
                foreach (var face in faces)
                {
                    //      make a new card who's face is the current face and who's suit is the current suit
                    var newCard = new Card
                    {
                        // Here we can assign default values for properties
                        Suit = suit,
                        Face = face,
                    };

                    // This is equivalent to above
                    // var alternateWayToMakeCard = new Card();
                    // alternateWayToMakeCard.Suit = suit;
                    // alternateWayToMakeCard.Face = face;

                    //      add that card to our list
                    Cards.Add(newCard);
                }
            }

            // Use Fisher Yates shuffle to shuffle the list.

            // Make a new object that can generate random numbers for us
            var randomNumberGenerator = new Random();

            for (var index = Cards.Count - 1; index >= 1; index--)
            {
                var otherIndex = randomNumberGenerator.Next(index);

                var firstCard = Cards[index];
                var otherCard = Cards[otherIndex];

                Cards[index] = otherCard;
                Cards[otherIndex] = firstCard;
            }
        }

        // Name     Deal
        // input    none
        // output   a single Card
        public Card Deal()
        {
            // PEDAC
            //
            // Algorithm
            // - Get the first card from the list (at index 0)
            // - Store that in a variable for safe keeping
            var card = Cards[0];

            // - Remove that card from the list
            Cards.Remove(card);

            // - return that card
            return card;
        }
    }
}
