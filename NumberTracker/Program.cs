using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using CsvHelper;

namespace NumberTracker
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to Number Tracker");

            // Make an empty list
            var numbers = new List<int>();

            // If the file exists
            if (File.Exists("numbers.csv"))
            {
                // This object knows how to read characters from a file
                var reader = new StreamReader("numbers.csv");

                // And we give that file reading object to the CSV reading object
                var csvReader = new CsvReader(reader, CultureInfo.InvariantCulture);
                // And tell it we have no headers
                csvReader.Configuration.HasHeaderRecord = false;

                // Ask the csv reading object to get records that are `int`
                // and give them back to us as a List.
                numbers = csvReader.GetRecords<int>().ToList();
            }

            // Controls if we are still running our loop asking for more numbers
            var isRunning = true;

            // While we are running
            while (isRunning)
            {
                // Show the list of numbers
                Console.WriteLine("------------------");
                foreach (var number in numbers)
                {
                    Console.WriteLine(number);
                }
                Console.WriteLine("------------------");

                // Ask for a new number or the word quit to end
                Console.Write("Enter a number to store, or 'quit' to end: ");
                var input = Console.ReadLine().ToLower();

                if (input == "quit")
                {
                    // If the input is quit, turn off the flag to keep looping
                    isRunning = false;
                }
                else
                {
                    // Parse the number and add it to the list of numbers
                    var number = int.Parse(input);
                    numbers.Add(number);
                }
            }

            // An object that knows how to write data to the file "numbers.csv"
            var fileWriter = new StreamWriter("numbers.csv");

            // An object that knows how to take a collection/enumerable and
            // format it into CSV and send it to some kind of Stream.
            var csvWriter = new CsvWriter(fileWriter, CultureInfo.InvariantCulture);

            // Send the numbers collection to the csv writer object who in turn
            // will take each number, turn it into CSV format, and send it to
            // the stream which in turn sends it to a file.
            csvWriter.WriteRecords(numbers);

            // Close the file so anything in the stream is completed
            fileWriter.Close();
        }
    }
}
