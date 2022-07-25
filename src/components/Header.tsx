import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { boardState, todosState } from "../atoms";
import { FaCheck, FaCheckCircle } from "react-icons/fa";

const Column = styled.div``;
const CategoryForm = styled.form``;
const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: ${(p) => p.theme.color.header};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  ${Column} {
    display: flex;
    align-items: center;
    .icon {
      font-size: 30px;
    }
    span {
      font-size: 30px;
      color: ${(p) => p.theme.color.bg};
      margin-left: 10px;
    }
    ${CategoryForm} {
      display: flex;
      align-items: center;
      input {
        margin-left: 10px;
        height: 40px;
        width: 200px;
        border-radius: 20px;
        background: none;
        border: none;
        background-color: ${(p) => p.theme.color.input};
        padding-left: 20px;
        margin: 0 10px;
        font-size: 17px;
        outline-color: rgba(0, 0, 0, 0.4);
        ::placeholder {
          color: ${(p) => p.theme.color.accent};
        }
      }
      span {
        font-size: 20px;
      }
      .submit {
        font-size: 20px;
        color: white;
      }
    }
  }
`;

interface ICategoryForm {
  category: string;
}

function Header() {
  const [todoBoards, setTodoBoards] = useRecoilState(todosState);
  const setBoards = useSetRecoilState(boardState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  function onCategorySubmit({ category }: ICategoryForm) {
    if (category in todoBoards) {
      setError("category", { message: "Already exist" }, { shouldFocus: true });
      return;
    }
    setTodoBoards((prevBoards) => ({ ...prevBoards, [category]: [] }));
    setBoards((prevBoards) => [...prevBoards, category]);
    setValue("category", "");
  }
  return (
    <Wrapper>
      <Column>
        <FaCheckCircle color='white' className='icon' />
        <span>Todos</span>
      </Column>
      <Column>
        <CategoryForm onSubmit={handleSubmit(onCategorySubmit)}>
          <span>{errors?.category?.message}</span>
          <input
            {...register("category", {
              required: true,
              maxLength: 18,
              onChange: () => clearErrors(),
            })}
            placeholder='New category'
            maxLength={18}
          />
          <FaCheck
            className='submit'
            onClick={handleSubmit(onCategorySubmit)}
          />
        </CategoryForm>
      </Column>
    </Wrapper>
  );
}

export default Header;
