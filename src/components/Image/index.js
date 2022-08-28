import { forwardRef, useState } from 'react';
import images from '~/assets/images';

import classNames from 'classnames';
import style from './Image.module.scss';

function Image({ src, alt, className, fallback: customfallback = images.noimage, ...prop }, ref) {
    const [fallback, setFallback] = useState();
    // customfallback nhận từ prop chuyền vào có fallback thì nhận src ko thì lấy noimg
    const handleOnErr = () => {
        setFallback(customfallback);
    };
    return (
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...prop}
            onError={handleOnErr}
        />
    );
}

export default forwardRef(Image);
