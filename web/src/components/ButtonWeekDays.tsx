import {HtmlHTMLAttributes} from 'react'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {}

export function ButtonWeekdays(props: ButtonProps){
  return(
    <button className='bg-zinc-700 text-violet-500 w-8 hover:bg-purple-500 hover:text-white rounded h-8'
     {...props}></button>
  )
}