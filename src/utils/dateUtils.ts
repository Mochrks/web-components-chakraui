import { format } from "date-fns"

export const formatDate = (date: Date | undefined, dateFormat: string = "dd MMM yyyy") => {
  if (!date) return ""
  return format(date, dateFormat)
}
