namespace API.DTOs
{
    public class MessageDto
    {
        public int Id { get; set; }
        public string SenderId { get; set; }
        public String SenderUsername { get; set; }
        public String SenderPhotoUrl { get; set; }
        public int RecipientId { get; set; }
        public string RecipientUsername { get; set; }
        public String RecipientPhotoUrl { get; set; }
        public string Content { get; set; }
        public DateTime? DateRead { get; set; }
        public DateTime MessageSent { get; set; }
    }
}