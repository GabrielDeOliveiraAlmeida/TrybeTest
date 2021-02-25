import React from 'react'
import { Link } from '@material-ui/core'

export type MyLinkUrlProps = {
  url: string
}

const MyLinkUrl: React.FC<MyLinkUrlProps> = ({ url }: MyLinkUrlProps) => {
  return (
        <Link href={url} target='_blank' noWrap>
            {url}
        </Link>
  )
}

export default MyLinkUrl
