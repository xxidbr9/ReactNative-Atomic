import React from 'react'
import Button from '@atoms/Button'
import Typograph from '@atoms/Typograph'

export default function App({ ...props }) {
    return (
        <Button >
            <Typograph fontScale="h1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima distinctio non nihil ipsam vero alias optio doloremque laborum impedit delectus dicta soluta, perspiciatis quam maxime suscipit voluptatibus a debitis esse?
            </Typograph>
        </Button>
    )
}
