using System;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Activities.Queries;

public class GetActivityList
{
    public class Query : IRequest<Result<List<Activity>>> { }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Result<List<Activity>>>
    {
        public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var activities = await context.Activities.ToListAsync(cancellationToken);
            if (activities==null) return Result<List<Activity>>.Failure("Failed to fetch Activity", 400);
            return Result<List<Activity>>.Success(activities);
        }
    }
}
