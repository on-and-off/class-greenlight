import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import ColorButton from '../ColorButton';

const CreateForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <FormItem>
          <label htmlFor="className">수업명 : </label>
          <Input
            placeholder=""
            {...register('className', {
              required: '수업명을 입력해주세요',
              minLength: {
                value: 2,
                message: '두글자 이상 입력해주세요',
              },
            })}
          />
          {errors.className && <ErrorMsg>{errors.className.message}</ErrorMsg>}
        </FormItem>
        <FormItem>
          <label htmlFor="teacherName">강사명 : </label>
          <Input
            placeholder=""
            {...register('teacherName', {
              required: '강사명을 입력해주세요',
              minLength: {
                value: 2,
                message: '두글자 이상 입력해주세요',
              },
            })}
          />
          {errors.teacherName && (
            <ErrorMsg>{errors.teacherName.message}</ErrorMsg>
          )}
        </FormItem>
        <FormItem>
          <label htmlFor="studentNumber">수업 정원: </label>
          <Input
            placeholder=""
            type="number"
            {...register('studentNumber', {
              required: '수업 정원을 숫자로 입력해주세요',
            })}
          />
          {errors.studentNumber && (
            <ErrorMsg>{errors.studentNumber.message}</ErrorMsg>
          )}
        </FormItem>
      </FormGroup>
      <ColorButton type="submit">만들기</ColorButton>
    </FormContainer>
  );
};

export default CreateForm;

const FormContainer = styled.form`
  text-align: center;
`;

const FormGroup = styled.div`
  margin: 2.5rem 0;
`;

const FormItem = styled.div`
  margin: 0.5rem 0;
  min-height: 3.5rem;
  text-align: right;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0 0.5rem;
  border-radius: 0.2rem;
  border: 0.1rem #c4c4c4 solid;
`;

const ErrorMsg = styled.p`
  font-size: 0.4rem;
  color: red;
  margin-right: 0.9rem;
`;
