using Application.Activities.Commands;
using Application.Activities.DTOs;
using Application.Activities.Queries;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class ActivitiesController() : BaseApiController
{
    [AllowAnonymous]
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return HandleResult(await Mediator.Send(new GetActivityList.Query()));
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetails(string id)
    {
        return HandleResult(await Mediator.Send(new GetActivityDetails.Query { Id = id }));    
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(CreateActivityDTO activityDTO)
    {
        return HandleResult(await Mediator.Send(new CreateActivity.Command { activityDTO = activityDTO }));
    }

    [HttpPut]
    public async Task<ActionResult> EditActivity(EditActivityDTO activityDTO)
    {
        return HandleResult(await Mediator.Send(new EditActivity.Command { activityDTO = activityDTO }));
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity(string id)
    {
        return HandleResult(await Mediator.Send(new DeleteActivity.Command { Id = id }));
    }
}
