namespace Methods
{
    class Employee
    {
        // public means "this can be seen outside of the class
        // |
        // |   Type
        // |   |
        // |   |      Name of property
        // |   |      |
        // |   |      |      We can get the data and set the data
        // |   |      |      |
        // v   v      v      v
        public string Name { get; set; }
        public int Department { get; set; }
        public int Salary { get; set; }
        public int MonthlySalary()
        {
            return Salary / 12;
        }
    }
}