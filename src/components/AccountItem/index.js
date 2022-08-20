import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/297472290_602782664550979_1083879751604081522_n.jpg?stp=c0.78.304.304a_dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=da31f3&_nc_ohc=zC07vNSH6f0AX9yZb4I&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-MD4OJKI3g0-SaPEUGi2nNFB55fHtMlWwJurvoFaK0bQ&oe=6306CB2F"
                alt="avata"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usename')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
