import React from 'react';
import classNames from 'classnames';
import './Button.scss';




function Button({children, size, color, outline, fullWidth, ...rest}){
    return (
  
     <button 
        className={classNames('Button', size, color, {outline,fullWidth})}
        {...rest}
     >  
     {children}  
    </button>
    // 여기서 {children}은 하위 컴포넌트의 내용을 그대로 가져오는 용도
    
    )
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue',
};

export default Button;