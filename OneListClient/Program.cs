using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using ConsoleTables;

namespace OneListClient
{
    class Item
    {
        // The next property I declare no matter what *I* call it
        // YOU should get it from the `id` JSON key.
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("text")]
        public string Text { get; set; }

        [JsonPropertyName("complete")]
        public bool Complete { get; set; }

        [JsonPropertyName("created_at")]
        public DateTime CreatedAt { get; set; }

        [JsonPropertyName("updated_at")]
        public DateTime UpdatedAt { get; set; }

        // This is a CUSTOM property
        public string CompletedStatus
        {
            get
            {
                // Complete is either true -- or its false
                // if (some boolean value)
                // if (name.Length == 5)
                // if (name == "Gavin")
                if (Complete)
                {
                    return "completed";
                }
                else
                {
                    return "not completed";
                }
            }
        }
    }

    class Program
    {
        private static async Task GetOneItemAsync(string accessToken, int id)
        {
            try
            {
                var client = new HttpClient();

                // Generate a URL specifically referencing the endpoint for getting a single
                // todo item and provide the id we were supplied
                var url = $"https://one-list-api.herokuapp.com/items/{id}?access_token={accessToken}";

                var responseAsStream = await client.GetStreamAsync(url);

                // Supply that *stream of data* to a Deserialize that will interpret it as a *SINGLE* `Item`
                var item = await JsonSerializer.DeserializeAsync<Item>(responseAsStream);

                var table = new ConsoleTable("ID", "Description", "Created At", "Updated At", "Completed");

                // Add one row to our table
                table.AddRow(item.Id, item.Text, item.CreatedAt, item.UpdatedAt, item.CompletedStatus);

                // Write the table
                table.Write(Format.Minimal);
            }
            catch (HttpRequestException)
            {
                Console.WriteLine("That ID does not exist");
            }
        }

        static async Task ShowAllItemsAsync(string token)
        {
            var client = new HttpClient();

            var responseAsStream = await client.GetStreamAsync(
              $"https://one-list-api.herokuapp.com/items?access_token={token}"
            );

            // This is a list of Item
            var items = await JsonSerializer.DeserializeAsync<List<Item>>(responseAsStream);

            var table = new ConsoleTable("Id", "Description");

            // Go through them one at a time
            foreach (var item in items)
            {
                // Add one row to our table
                table.AddRow(
                  item.Id,
                  item.Text);
            }

            // Write the table
            table.Write(Format.Minimal);
        }

        static async Task AddOneItem(string token, Item newItem)
        {
            var client = new HttpClient();

            // Generate a URL specifically referencing the endpoint for getting a single
            // todo item and provide the id we were supplied
            var url = $"https://one-list-api.herokuapp.com/items?access_token={token}";

            // Take the `newItem` and serialize it into JSON
            var jsonBody = JsonSerializer.Serialize(newItem);

            // We turn this into a StringContent object and indicate we are using JSON
            // by ensuring there is a media type header of `application/json`
            var jsonBodyAsContent = new StringContent(jsonBody);
            jsonBodyAsContent.Headers.ContentType = new MediaTypeHeaderValue("application/json");

            // Send the POST request to the URL and supply the JSON body
            var response = await client.PostAsync(url, jsonBodyAsContent);

            // Get the response as a stream.
            var responseJson = await response.Content.ReadAsStreamAsync();

            // Supply that *stream of data* to a Deserialize that will interpret it as a *SINGLE* `Item`
            var item = await JsonSerializer.DeserializeAsync<Item>(responseJson);

            // Make a table to output our new item.
            var table = new ConsoleTable("ID", "Description", "Created At", "Updated At", "Completed");

            // Add one row to our table
            table.AddRow(item.Id, item.Text, item.CreatedAt, item.UpdatedAt, item.CompletedStatus);

            // Write the table
            table.Write(Format.Minimal);
        }

        static async Task Main(string[] args)
        {
            var accessToken = "";

            if (args.Length == 0)
            {
                Console.Write("What is the name of the name of the list? ");
                accessToken = Console.ReadLine();
            }
            else
            {
                accessToken = args[0];
            }

            var keepGoing = true;
            while (keepGoing)
            {
                Console.Write("Get (A)ll todo, (O)ne item, (C)reate an item, or (Q)uit: ");
                var choice = Console.ReadLine().ToUpper();

                switch (choice)
                {
                    case "Q":
                        keepGoing = false;
                        break;

                    case "A":
                        await ShowAllItemsAsync(accessToken);
                        break;

                    case "O":
                        Console.Write("Enter the ID of the item to show: ");
                        var id = int.Parse(Console.ReadLine());

                        await GetOneItemAsync(accessToken, id);

                        Console.WriteLine("Press ENTER to continue");
                        Console.ReadLine();
                        break;

                    case "C":
                        Console.Write("Enter the description of your new todo: ");
                        var text = Console.ReadLine();

                        var newItem = new Item
                        {
                            Text = text
                        };

                        await AddOneItem(accessToken, newItem);

                        Console.WriteLine("Press ENTER to continue");
                        Console.ReadLine();
                        break;

                }
            }

        }

    }
}
