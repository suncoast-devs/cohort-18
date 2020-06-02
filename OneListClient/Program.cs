using System;
using System.Collections.Generic;
using System.Net.Http;
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
        static async Task Main(string[] args)
        {
            var client = new HttpClient();

            var responseAsStream = await client.GetStreamAsync(
              "https://one-list-api.herokuapp.com/items?access_token=sdg-handbook"
            );

            // This is a list of Item
            var items = await JsonSerializer.DeserializeAsync<List<Item>>(responseAsStream);

            var table = new ConsoleTable("Description", "Created At", "Completed");

            // Go through them one at a time
            foreach (var item in items)
            {
                // Add one row to our table
                table.AddRow(
                  item.Text,
                  item.CreatedAt,
                  item.CompletedStatus);
            }

            // Write the table
            table.Write();
        }
    }
}
