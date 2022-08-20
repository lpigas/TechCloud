import React from 'react'

export default function Shop({message}) {
    // alert(message)
  return (
    <div>
    <h1>{message}</h1>
</div>
  )
}


export function getServerSideProps() {
    return {
        props: { message: 1 },
    };
}