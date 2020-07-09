using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Identity;

namespace TacoTuesday.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string FullName { get; set; }

        [Required]
        public string Email { get; set; }

        [JsonIgnore]
        public string HashedPassword { get; set; }

        // Define a property for being able to _set_ a password
        public string Password
        {
            // Define only the `set` aspect of the property
            set
            {
                // When set, use the PasswordHasher to encrypt the password
                // and store the result in our HashedPassword
                this.HashedPassword = new PasswordHasher<User>().HashPassword(this, value);
            }
        }

        // Add a method that can validate this user's password
        public bool IsValidPassword(string password)
        {
            // Look to see if this password, and the user's hashed password can match
            var passwordVerification = new PasswordHasher<User>().VerifyHashedPassword(this, this.HashedPassword, password);
            // Return True if the verification was a success
            return passwordVerification == PasswordVerificationResult.Success;
        }
    }
}