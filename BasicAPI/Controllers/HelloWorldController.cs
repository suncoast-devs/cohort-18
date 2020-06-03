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
        public string SayHello()
        {
            // This is the response
            return "Hello, World.";
        }
    }
}