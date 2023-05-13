import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  useQuery,
} from '@tanstack/react-query'

type Props = {}

function Form({ }: Props) {

  type Inputs = {
    example: string;
    exampleRequired: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log('onSubmit:', data);
  console.log('watch:', watch('example')); // watchは引数に渡した名前の入力値を監視する
  console.log('exampleRequired:', watch('exampleRequired'));

  return (
    <div>
      <div >
        <form className="flex p-2 flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input className="border p-2 my-2 rounded" defaultValue="test" {...register('example')} />
          <input className="border p-2  my-2 rounded " {...register('exampleRequired', { required: true })} />
          {errors.exampleRequired && (
            <span style={{ color: 'red' }}>This field is required</span>
          )}
          <button className="btn bg-white text-black my-2  h-11 py-1 px-4 rounded border" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Form