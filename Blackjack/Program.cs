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
    }

    class Card
    {
        // These two properties need to be GET-ed by the world
        // and we SET-them when we make a new card.
        public string Face { get; set; }
        public string Suit { get; set; }
    }

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

    class Program
    {
        static void Main(string[] args)
        {
            // # Blackjack Problem

            // Blackjack is a card game played between a Player and a Dealer.

            // It is played with a single Deck of 52 Cards.

            // Cards have a Suit of either: "Club", "Diamond", "Heart", or "Spade"
            // Cards have a Face of either: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, or Ace.
            // The Cards have a Value based on their Face according to:

            // | Face  | Value |
            // | ----- | ----- |
            // | 2     | 2     |
            // | 3     | 3     |
            // | 4     | 4     |
            // | 5     | 5     |
            // | 6     | 6     |
            // | 7     | 7     |
            // | 8     | 8     |
            // | 9     | 9     |
            // | 10    | 10    |
            // | Jack  | 10    |
            // | Queen | 10    |
            // | King  | 10    |
            // | Ace   | 11    |

            // Both the Player and the Dealer have their own Hand of Cards. The Hand starts out empty at the start of the Game. The Dealer is dealt two cards from the deck and placed into its hand. The Player is dealt two cards from the deck and placed into their hand.

            // The total value of a hand is the sum of the values of all the cards in the hand.

            // When the game starts the Player is given a choice to Hit or Stand.

            // If the player Hits a card is dealt from the deck and placed in the player's Hand.

            // This continues while the player keeps on choosing Hit or if the player's hand Value exceeds 21 and the player busts and the game ends.

            // If the player Stands (not Hit) and the player has not busted then the dealer plays.

            // The dealer will continuously be dealt cards from the deck until it's hand value exceeds 17.

            // If the Dealers hand is more than 21 it has Busted and the game ends.

            // We compare the Value of the Players Hand to the Dealer Hand and whomever has a higher value, but not more than 21, wins.

            // # Examples

            // The player's hand contains 3H, 4C for a total value of 7. The player hits and is given the 10S. Hand value is now 17. Player STANDS. Dealer reveals a hand consisting of the 7D and the 5H for a total value of 12. The dealer HITs and is dealt a 10C. Dealer hand value is now 22. Dealer busts and game is over.

            // The player's hand contains 10H and the AH (Ace of Hearts) for a total value of 21 (Blackjack). The player stands. The dealer is dealt the 7S and the 7H for 14. The dealer hits and is dealt a 6C for a total of 20. Since this is more than 17 the Dealer stays. The Player's Hand is 21 and the dealer Hand is 20 so the Player wins.

            // ## More examples

            // # Data Structure

            // The following Nouns exist in the description of the "P"roblem:

            // - Deck
            // - Card
            // - Hand
            // - Player
            // - Dealer

            // These have the following STATE (properties) and BEHAVIOR (methods)

            // - Deck

            //   - Properties: A list of 52 cards
            //   - Behavior: Make a new deck of 52 shuffled cards. Deal one card out of the deck.

            // - Card

            //   - Properties: The Face of the card, the Suit of the card
            //   - Behavior: The Value of the card according to the table in the "P"roblem part

            // - Hand

            //   - Properties: A list of individual Cards
            //   - Behavior: a TotalValue representing the sum of the individual Cards in the list. Add a card to the hand

            // - Player

            //   - Properties: a single Hand

            // - Dealer

            //   - Properties: a single Hand

            // - Game
            //   - Properties: the Dealer, the Player, the Deck
            //   - Behavior: Play

            // Notes: Since the Player and the Dealer just have one property we may not need those and we could skip them and just use the Hand.

            // Notes: We might put all the logic for the game into a `Game` class and have it be able to play.

            // # Algorithm

            // 1. Create a new deck
            var deck = new Deck();

            // 2. Ask the deck to make a new shuffled 52 cards
            deck.MakeCards();

            // 3. Create a player hand
            var playerHand = new Hand();

            // 4. Create a dealer hand
            var dealerHand = new Hand();

            // 5. Ask the deck for a card and place it in the player hand
            var firstCard = deck.Deal();
            Console.WriteLine($"Our first card is {firstCard.Face} of {firstCard.Suit}");
            playerHand.Accept(firstCard);

            // 6. Ask the deck for a card and place it in the player hand
            var secondCard = deck.Deal();
            playerHand.Accept(secondCard);

            // 7. Ask the deck for a card and place it in the dealer hand
            var firstCardForDealer = deck.Deal();
            dealerHand.Accept(firstCardForDealer);

            // 8. Ask the deck for a card and place it in the dealer hand
            var secondCardForDealer = deck.Deal();
            dealerHand.Accept(secondCardForDealer);

            // 9. Show the player the TotalValue of their Hand
            // 10. If they have BUSTED, then goto step 15
            // 11. Ask the player if they want to HIT or STAND
            // 12. If HIT

            // - Ask the deck for a card and place it in the player hand
            // - goto step 10

            // 13. If STAND continue on
            // 14. Show the dealer's hand TotalValue
            // 15. If the dealer has busted then goto step 17
            // 16. If the dealer has less than 17
            //     - Ask the deck for a card and place it in the dealer hand
            //     - goto step 14
            // 17. If the player busted show "COMPUTER WINS"
            // 18. If the dealer busted show "PLAYER WINS"
            // 19. If the dealer's hand is more than the player's hand then show "DEALER WINS", else show "PLAYER WINS"
            // 20. -- Hmm, what to do if they are even?
            // 21. Ask the user if they want to play again.

            // - If yes, goto step 1

            // 22. Show the user "Thanks for playing"
        }
    }
}
