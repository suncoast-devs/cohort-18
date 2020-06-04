using System;

public class Game
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Host { get; set; }
    public string Address { get; set; }
    public DateTime When { get; set; }
    public int MinimumPlayers { get; set; }
    public int MaximumPlayers { get; set; }
}