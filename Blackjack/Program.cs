using System;

namespace Blackjack
{

    class Program
    {
        static void Main(string[] args)
        {
            var keepPlaying = true;

            while (keepPlaying)
            {
                var game = new Game();
                game.Play();

                // 21. Ask the user if they want to play again.
                Console.Write("Play again? (Y/N): ");
                var playAgainString = Console.ReadLine();

                // if (playAgainString == "Y")
                // {
                //     keepPlaying = true;
                // }
                // else
                // {
                //     keepPlaying = false;
                // }

                // This one line is equivalent to the above lines
                keepPlaying = (playAgainString == "Y");
            }

            // 22. Show the user "Thanks for playing"
            Console.WriteLine();
            Console.WriteLine("Thanks for playing");
        }
    }
}
