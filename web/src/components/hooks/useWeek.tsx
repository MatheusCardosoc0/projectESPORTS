import { useState } from "react";

export function useWeek(){
  const [weekDays, setWeekDays] = useState<string[]>([])


  return {
    weekDays,
    setWeekDays
  }
}