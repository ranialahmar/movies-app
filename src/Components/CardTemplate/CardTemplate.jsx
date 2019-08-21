/* @flow */
import React from 'react'
import {Card,  Rate} from 'antd'
import cancel from './../../icons/cancel.svg'
import like from './../../icons/like.svg'
import dislike from './../../icons/dislike.svg'
type Props = {
  title: String,
 category: string,
  vote: number,
  image: number,
  likes:number,
  dislikes:number,
  id: number
}
const CardTamplate = ({ title,category,likes,dislikes}: Props) => (

    <Card style={{ width: 240 }} bodyStyle={{ padding: 5}}>

      <div className='custom-image'>
        <img alt={title} width='100%' src={require(`./../../icons/${title}.jpg`)} />
      </div>
      <div className='custom-card'>
        <h1>{title}</h1>
        <h2> <b>{category}</b></h2>
          <img alt={""} width="8%" src={like}/> {likes} { }
          <img alt={""} width="8%" src={dislike}/> {dislikes}
          <br/>
        <Rate className='rate' value={likes} /><br/>
          <img className="cancel" width="10%"src={cancel} alt=""/>
      </div>
    </Card>

)

export default CardTamplate
