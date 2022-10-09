import styles from './SideBar.module.scss';
import className from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
    HomeIcon,
    HomeActionIcon,
    LiveIcon,
    LiveActionIcon,
    UserGroupIcon,
    UserGroupActionIcon,
} from '~/components/Icons';

const cx = className.bind(styles);

function SiderBar() {
    return (
        <aside className={cx('wapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} active={<HomeActionIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    active={<UserGroupActionIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} active={<LiveActionIcon />} />
            </Menu>
        </aside>
    );
}

export default SiderBar;
