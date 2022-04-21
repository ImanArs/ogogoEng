import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface InputProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	placeholder?: string
	type?: string
	required?: any
	name: string
}
