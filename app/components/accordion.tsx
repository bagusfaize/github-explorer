import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GithubUserProps } from '../types/types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ProfileCard from './profile-card';

type AccordionProps = {
    isOpen: boolean,
    i: number | boolean,
    user: GithubUserProps,
    children: React.ReactNode,
    setExpanded: (value: number | boolean) => void,
}

export default function Accordion({ i, setExpanded, user, children, isOpen }: AccordionProps) {
    return (
        <div className="col-span-1">
            <header
                onClick={() => setExpanded(isOpen ? false : i)}
            >
                <ProfileCard
                    user={user}
                    isOpen={isOpen}
                />
            </header>
            <AnimatePresence>
                {isOpen && (
                    <motion.section
                        key="answer"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        exit={{ opacity: 0 }}
                    >
                        {children}
                    </motion.section>
                )}
            </AnimatePresence>
        </div>
    )
}
