import React, { InputHTMLAttributes } from 'react';
import { Container, Content, InputContainer } from './styles';
import { IconBaseProps } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  icon: React.ComponentType<IconBaseProps>;
  register?: any;
  label?: string;
  errors?: any;
}

const Input: React.FC<InputProps> = (props) => {
  const {
    name,
    type,
    register,
    label,
    placeholder,
    errors,
    icon: Icon,
  } = props;

  return (
    <Container>
      {label && <label htmlFor={name}>{label}</label>}
      <Content>
        <InputContainer>
          {Icon && <Icon size={20} />}
          <input {...register(name)} placeholder={placeholder} type={type} />
        </InputContainer>
      </Content>
      {errors && <p className="error_message">{errors.message}</p>}
    </Container>
  );
};

export default Input;
