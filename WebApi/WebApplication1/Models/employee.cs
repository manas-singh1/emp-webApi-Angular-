using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models
{
    public class employee
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public string Designation { get; set; }
        public int Salary { get; set; }
    }
}
