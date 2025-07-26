using System;
using Application.Activities.DTOs;
using Application.Core;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity
{
    public class Command : IRequest<Result<Unit>>
    {
        public required EditActivityDTO activityDTO { get; set; }
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command, Result<Unit>>
    {
        public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
        {
           var activity = await context.Activities
            .FindAsync([request.activityDTO.Id], cancellationToken);
           
            if (activity == null) return Result<Unit>.Failure("Activity Not Found", 404);

            mapper.Map(request.activityDTO, activity);

            var result = await context.SaveChangesAsync(cancellationToken) > 0;
            if (!result) return Result<Unit>.Failure("Failed to Update Activity", 400);
            return Result<Unit>.Success(Unit.Value);
        }
    }
}
