import React from 'react';
import classNames from 'classnames';
import './Button.scss';




function Button({children, size}){
    return <button className={classNames('Button', size)}>{children}</button>
    // 여기서 {children}은 하위 컴포넌트의 내용을 그대로 가져오는 용도
}

Button.defaultProps = {
    size: 'medium',

};

export default Button;