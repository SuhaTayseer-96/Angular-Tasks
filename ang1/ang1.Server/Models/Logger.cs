using System;
using System.Collections.Generic;

namespace ang1.Server.Models;

public partial class Logger
{
    public int LogId { get; set; }

    public int? UserId { get; set; }

    public string? LogMessage { get; set; }

    public string? LogLevel { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual User? User { get; set; }
}
