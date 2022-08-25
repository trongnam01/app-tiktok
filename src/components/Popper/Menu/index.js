import Tippys from '@tippyjs/react/headless';

import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(style);

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippys
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>{renderItems()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippys>
    );
}

export default Menu;
