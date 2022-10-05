import React from 'react'
import { Paragrafo } from './styles'

export default function TextoComum({children}) {
  return (
    <div>
        <Paragrafo>
            {children}
        </Paragrafo>
    </div>
  )
}
