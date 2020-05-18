namespace Blackjack
{
    class Card
    {
        // These two properties need to be GET-ed by the world
        // and we SET-them when we make a new card.
        public string Face { get; set; }
        public string Suit { get; set; }

        // Name: Value
        // input: none (void)
        // output: int (the point value of this card)
        public int Value()
        {
            // PEDAC
            //
            // Problem: given a Face, figure out the point value of this card.
            //
            // Examples:
            // 2 => 2 points
            // Jack => 10 points
            // Ace => 11 points
            //
            // Data: strings (face) - int (value)

            switch (Face)
            {
                case "10":
                case "Jack":
                case "Queen":
                case "King":
                    return 10;

                case "Ace":
                    return 11;

                default:
                    return int.Parse(Face);
            }
        }
    }
}
