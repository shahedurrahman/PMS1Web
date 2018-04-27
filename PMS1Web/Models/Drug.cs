using System.ComponentModel.DataAnnotations;

namespace PMS1Web.Models
{
    public class Drug
    {
        public int DrugId { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public decimal Price { get; set; }
    }
}
