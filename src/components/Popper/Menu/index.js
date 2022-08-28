import Tippys from '@tippyjs/react/headless';

import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import classNames from 'classnames/bind';
import style from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(style);

const defaultFc = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFc }) {
    const [history, setHistore] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistore((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippys
            delay={[0, 700]} // delay ẩn hiện
            interactive // sự dụng đc hover
            placement="bottom-end" // vị trí
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-wrapper')}>
                        {history.length > 1 && (
                            <Header
                                title={'Language'}
                                onBack={() => setHistore((prev) => prev.slice(0, prev.length - 1))}
                            />
                        )}
                        {renderItems()}
                    </PopperWrapper>
                </div>
            )}
            // khi ẩn đi set lại
            onHide={() => setHistore((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippys>
    );
}

export default Menu;
