using Microsoft.EntityFrameworkCore.Migrations;

namespace TacoTuesday.Migrations
{
    public partial class AddUpAndDownVoteCountsToRestaurants : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DownvoteCount",
                table: "Restaurants",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UpvoteCount",
                table: "Restaurants",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DownvoteCount",
                table: "Restaurants");

            migrationBuilder.DropColumn(
                name: "UpvoteCount",
                table: "Restaurants");
        }
    }
}
