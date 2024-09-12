namespace webApi.DTOs;

public class AddFileRequest
{

    public required string PropertyName { get; set; }

    public required int SalePrice { get; set; }

    public required int PropertyLiasonAgentId { get; set; }

}

public class AddNoteRequest
{
    public required string Description { get; set; }

}

public class StatusUpdateRequest
{
    public required int Status { get; set; }

}

public class SaleStatusUpdateRequest
{
    public required int Status { get; set; }

}

