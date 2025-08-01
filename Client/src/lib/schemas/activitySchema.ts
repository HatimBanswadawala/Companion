import { z } from 'zod';

const requiredString = (fieldName:string) =>
    z.string({message:`${fieldName} is required`})
    .min(1,{message: `${fieldName} is required`})

export const activitySchema = z.object({
    title: requiredString("Title"),
    description: requiredString("Description"),
    category: requiredString("Category"),
    date: z.coerce.date<Date>({
        message: 'Date is Required'
    }),
    location: z.object({
        venue: requiredString("Venue"),
        city: z.string().optional(),
        latitude: z.coerce.number<number>(),
        longitude: z.coerce.number<number>()
    } , {message:'Pls enter to select from dropdown '} )
    
});

export type ActivitySchema = z.infer<typeof activitySchema>;