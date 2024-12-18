

export type LinkTypes ={
     id:number,
     url:string,
     text:string
}


export type SoshialsType = Omit<LinkTypes,"text"> & {
  icons:React.ReactNode
}