import { motion } from "framer-motion"
import "./navbar.scss"
import Sidebar from "../sidebar/Sidebar"

export default function Navbar() {
  return (
    <div className="navbar">
        {/*Sidebar*/}
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
                initial={{opacity:0 , scale:0.5}} 
                animate={{opacity:1 , scale:1}} 
                transition={{duration:0.5}}
                >
                    OFL
            </motion.span>
            <div className="social">
                <a target="blank" href="https://t.me/Olimov15"><img src="/facebook.png" alt="" /></a>
                <a target="blank" href="https://www.instagram.com/ofl_15/"><img src="/instagram.png" alt="" /></a>
                <a target="blank" href="https://www.youtube.com/@LamaDev"><img src="youtube.png" alt="" /></a>
                <a href="#"><img src="/dribbble.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}
