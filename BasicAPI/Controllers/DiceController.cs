using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace BasicAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DiceController : ControllerBase
    {
        // This is a GET request, but there is more in the URL
        //
        //        This is the more of the URL
        //        |
        //        |
        //        v
        [HttpGet("{sides}")]
        //
        // Examples:
        //    GET /Dice/6       <= sides = 6
        //    GET /Dice/20      <= sides = 20
        //
        public List<int> Roll(int sides, int count = 1)
        //                    ^          ^
        //                    url param  query param
        //
        {
            var randomNumberGenerator = new Random();

            // Build a list of integers
            var rolls = new List<int>();

            // Do this loop *count* times.
            for (var rollNumber = 0; rollNumber < count; rollNumber++)
            {
                // generate a random number between 1 and sides (inclusive)
                // example: between 1 and 6
                // example: between 1 and 20

                var roll = randomNumberGenerator.Next(sides) + 1;

                // Add that roll to our list
                rolls.Add(roll);
            }

            // We return lists of rolls
            return rolls;
        }
    }
}