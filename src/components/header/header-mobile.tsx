import { useEffect, useRef } from 'react';

import { motion, useCycle } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { MENU_SIDEBAR } from '@/constant/menu';
import MenuToggle from './menu-toggle';
import MenuItemWithSubMenu from './menu-item-submenu';
import MenuItem from './menu-item';

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(0px at 100% 0)',
        transition: {
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

export default function HeaderMobile() {
    const { pathname } = useLocation();
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const [isOpen, toggleOpen] = useCycle(false, true);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
            className={`fixed inset-0 z-50 w-full md:hidden ${isOpen ? '' : 'pointer-events-none'
                }`}
            ref={containerRef}
        >
            <motion.div
                className="absolute inset-0 right-0 w-full bg-white"
                variants={sidebar}
            />
            <motion.ul
                variants={variants}
                className="absolute grid w-full gap-3 px-10 py-16"
            >
                {MENU_SIDEBAR.map((item, idx) => {
                    const isLastItem = idx === MENU_SIDEBAR.length - 1; // Check if it's the last item

                    return (
                        <div key={idx}>
                            {item.hasChildren ? (
                                <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
                            ) : (
                                <MenuItem>
                                    <Link
                                        to={item.path}
                                        onClick={() => toggleOpen()}
                                        className={`flex w-full text-2xl ${item.path === pathname ? 'font-bold' : ''
                                            }`}
                                    >
                                        {item.title}
                                    </Link>
                                </MenuItem>
                            )}

                            {!isLastItem && (
                                <MenuItem className="my-3 h-px w-full bg-gray-300" />
                            )}
                        </div>
                    );
                })}
            </motion.ul>
            <MenuToggle toggle={toggleOpen} />
        </motion.nav>
    );
};



const variants = {
    open: {
        transition: { staggerChildren: 0.02, delayChildren: 0.15 },
    },
    closed: {
        transition: { staggerChildren: 0.01, staggerDirection: -1 },
    },
};

const useDimensions = (ref: any) => {
    const dimensions = useRef({ width: 0, height: 0 });

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth;
            dimensions.current.height = ref.current.offsetHeight;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);

    return dimensions.current;
};
