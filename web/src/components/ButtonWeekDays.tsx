import {HtmlHTMLAttributes} from 'react'
import * as TogleGroup from '@radix-ui/react-toggle-group'
import { useWeek } from './hooks/useWeek'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: string
  id: string
  className?: string
}

export function ButtonWeekdays({className,id,children, ...rest}: ButtonProps){


  return(
    <TogleGroup.Item value={id} className={` bg-zinc-700 text-violet-500 w-8 hover:brightness-75 rounded h-8 ${className} `}
     {...rest}>{children}</TogleGroup.Item>
  )
}