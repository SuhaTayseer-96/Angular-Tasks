using System;
using System.Collections.Generic;

namespace ang1.Server.Models;

public partial class Subscription
{
    public int SubscriptionId { get; set; }

    public string? SubscriptionName { get; set; }

    public string? SubscriptionAmount { get; set; }

    public string? SubscriptionDescription { get; set; }

    public virtual ICollection<UserSubscription> UserSubscriptions { get; set; } = new List<UserSubscription>();
}
