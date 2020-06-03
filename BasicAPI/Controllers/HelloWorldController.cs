using System;
using Microsoft.AspNetCore.Mvc;

namespace BasicAPI.Controllers
{
    // We speak JSON here!
    [ApiController]
    // This endpoint is at /HelloWorld because
    // our controller class name is HelloWorldController
    // and we chop off the word Controller to get the name.
    [Route("[controller]")]
    public class HelloWorldController : ControllerBase
    {
        // This is the code to run for a GET
        // ... and there is no other part of the URL
        //
        // If you do GET https://localhost:5001/HelloWorld
        // you'll get *THIS* code.
        [HttpGet]
        public string SayHello(string who)
        {
            // This is the response
            var theTimeRightNow = DateTime.Now;

            string whoOrWorld;

            // If there wasn't a "who" query parameter
            if (who == null)
            {
                // Use this as our greeting
                whoOrWorld = "World";
            }
            else
            {
                // Otherwise, use the query parameter
                whoOrWorld = who;
            }

            // This is a one-liner of the above
            // string whoOrWorld = who == null ? "World" : who;

            return $"Hello, {whoOrWorld}. It is currently {theTimeRightNow}. Have a great day.";
        }
    }
}