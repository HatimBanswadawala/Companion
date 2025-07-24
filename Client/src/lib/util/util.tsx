import { format, type DateArg } from "date-fns";

export default function formatDate(date:DateArg<Date>) {
  return (
    format(date ,'dd MMM yyyy hh:mm a')
  )
}
