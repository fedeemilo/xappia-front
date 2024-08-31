import { ICONS } from '../constants/icons'
import { AiOutlineHome } from 'react-icons/ai'

export const getNavItems = () => [
    {
        id: 1,
        icon: <img src={ICONS.XAPPIA_LOGO} alt="xappia" style={{ width: '6rem' }} />,
        classes: 'nav-link',
        to: '/'
    }
]
