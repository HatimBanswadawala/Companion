using System;
using Application.Activities.Commands;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.Validators;

public class EditActivityValidator
        : BaseActivityValidator<EditActivity.Command, EditActivityDTO>

{
    public EditActivityValidator(): base(x=>x.activityDTO)
    {
        RuleFor(x => x.activityDTO.Id).NotEmpty().WithMessage("ID is Required");
    }
}
