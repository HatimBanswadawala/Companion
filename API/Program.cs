using Application.Activities.Queries;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using System;
using Persistence;
using FluentValidation;
using Application.Activities.Validators;
using Microsoft.AspNetCore.Identity.Data;
using API.Middlewares;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors();

builder.Services.AddMediatR(x =>
{
    x.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>();
    x.AddOpenBehavior(typeof(ValidationBehavior<,>));
}
);

builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);
builder.Services.AddValidatorsFromAssemblyContaining<CreateActivityValidator>();
builder.Services.AddTransient<ExceptionMiddleware>();


// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi

var app = builder.Build();


app.UseMiddleware<ExceptionMiddleware>();

app.UseHttpsRedirection();
// Configure the HTTP request pipeline.
app.UseCors(options =>
{
    options.AllowAnyHeader().AllowAnyMethod()
    .WithOrigins("http://localhost:3000", "https://localhost:3000");
});

app.MapControllers();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<AppDbContext>();
    await context.Database.MigrateAsync();
    await DbInitializer.SeedData(context);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occured during Migration.");
}

app.Run();
