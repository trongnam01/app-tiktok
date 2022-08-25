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
                src="https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-6/300961032_1036146863729149_6019658082040520200_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=YmtrG3LHhwsAX8KLszl&_nc_ht=scontent.fhan2-2.fna&oh=00_AT_G7iAAalioqSfvpE_Akg4uY56Cma6ZbUnMYBadNmn4Tw&oe=630C626B"
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
