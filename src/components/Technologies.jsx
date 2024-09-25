import { BiLogoNodejs } from "react-icons/bi"
import { DiMongodb, DiMysql } from "react-icons/di"
import { RiReactjsLine } from "react-icons/ri"
import { SiExpress } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import {animate, motion} from "framer-motion"

const iconVarients = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [ 10, -10],
        ttransition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeateType: "reverse",

        }

    }
})

const Technologies = () => {
    return (
        <div className="pb-24">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl"
          >
            Technologies
          </motion.h2>
      
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div initial="initial" animate="animate" variants={iconVarients(2.5)}>
              <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
      
            <motion.div initial="initial" animate="animate" variants={iconVarients(2.5)} className="p-4">
              <TbBrandNextjs className="text-7xl" />
            </motion.div>
      
            <motion.div initial="initial" animate="animate" variants={iconVarients(3)} className="p-4">
              <DiMongodb className="text-7xl text-green-300" />
            </motion.div>
      
            <motion.div initial="initial" animate="animate" variants={iconVarients(5)} className="p-4">
              <BiLogoNodejs className="text-7xl text-green-400" />
            </motion.div>
      
            <motion.div initial="initial" animate="animate" variants={iconVarients(6)} className="p-4">
              <SiExpress className="text-7xl text-white" />
            </motion.div>
      
            <motion.div initial="initial" animate="animate" variants={iconVarients(4)} className="p-4">
              <DiMysql className="text-7xl text-sky-600" />
            </motion.div>
          </motion.div>
        </div>
      );
      
  
}

export default Technologies
