import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'
import { useState } from 'react'
import { useRef } from 'react'
import ListItem from '../listitem/ListItem'
import './List.scss'

const List = () => {
    const [isMoved, setIsMoved] = useState(false)
    const [slideNunber, setSlideNumber] = useState(0)
    const listRef = useRef()

    const handleClick= (direction)=>{
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if(direction === "left" && slideNunber > 0){
            setSlideNumber(slideNunber-1)
            listRef.current.style.transform = `translateX(${230+distance}px)`
        }
        if(direction === "right" && slideNunber<5){
            setSlideNumber(slideNunber+1)
            listRef.current.style.transform = `translateX(${-230+distance}px)`
        }
    }
    return (
        <div className="list">
            <span className="listTitle">
                Continue to watch
            </span>
            <div className="wrapper">
                <ArrowBackIosOutlined style={{display: !isMoved && "none"}} className="silderArrow left" onClick={()=>handleClick("left")}></ArrowBackIosOutlined>
                <div className="container" ref={listRef}>
                    <ListItem index={0} />
                    <ListItem index={1} />
                    <ListItem index={2} />
                    <ListItem index={3} />
                    <ListItem index={4} />
                    <ListItem index={5} />
                    <ListItem index={6} />
                    <ListItem index={7} />
                    <ListItem index={8} />
                    <ListItem index={9} />
                </div>
                <ArrowForwardIosOutlined className="silderArrow right" onClick={()=>handleClick("right")}></ArrowForwardIosOutlined>
            </div>
        </div>
    )
}

export default List
