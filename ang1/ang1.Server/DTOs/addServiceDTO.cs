namespace ang1.Server.DTOs
{
    public class addServiceDTO
    {
        public string ServiceName { get; set; } = null!;

        public string? ServiceDescription { get; set; }

        public IFormFile? ServiceImage { get; set; }
    }
}
