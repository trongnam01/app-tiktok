import Button from '~/components/Button';

import classNames from 'classnames/bind';
import style from './Menu.module.scss';

const cx = classNames.bind(style);

function MenuItem({ data }) {
    return (
        <Button LeftIcon={data.icon} to={data.to} className={cx('menu-item')}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
