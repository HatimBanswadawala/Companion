import { format, type DateArg } from "date-fns";
import z from "zod";

export default function formatDate(date:DateArg<Date>) {
  return (
    format(date ,'dd MMM yyyy hh:mm a')
  )
}


export const requiredString = (fieldName:string) =>
    z.string({message:`${fieldName} is required`})
    .min(1,{message: `${fieldName} is required`})